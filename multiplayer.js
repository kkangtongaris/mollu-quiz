// ==========================================
// Firebase 초기화 (발급받은 프로젝트 설정)
// ==========================================
const firebaseConfig = {
  apiKey: "AIzaSyASwDNEgUQAXM4OD6C5JxvyzUYtBpKcBqQ",
  authDomain: "mollu-quiz.firebaseapp.com",
  databaseURL: "https://mollu-quiz-default-rtdb.firebaseio.com",
  projectId: "mollu-quiz",
  storageBucket: "mollu-quiz.firebasestorage.app",
  messagingSenderId: "477569278505",
  appId: "1:477569278505:web:5ce7ff016833586c47f238",
  measurementId: "G-5LDPDSRDF9"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.database();

// ==========================================
// 멀티플레이 상태 변수
// ==========================================
let myUid = null;
let myProfile = { nickname: '센세', rating: 1000, wins: 0, losses: 0, draws: 0 };
let currentRoomId = null;
let currentRoomRef = null;
let matchListenerRef = null;
let matchingWaitTimer = null;
let gameCountdownTimer = null;
let gameStartLocalTime = 0;
let myHintHistory = [];
let hasFinishedMatch = false;

const MATCH_TIME_LIMIT_SEC = 60;

function getRatingTier(rating) {
  if (rating >= 1200) return { name: '플래티넘', className: 'tier-plat' };
  if (rating >= 1100) return { name: '골드', className: 'tier-gold' };
  if (rating >= 1000) return { name: '실버', className: 'tier-silver' };
  return { name: '브론즈', className: 'tier-bronze' };
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, m => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[m]));
}

// 익명 로그인 및 유저 프로필 로드
async function ensureMultiAuth() {
  if (!myUid) {
    const cred = await auth.signInAnonymously();
    myUid = cred.user.uid;
  }
  const snap = await db.ref(`users/${myUid}`).get();
  if (snap.exists()) {
    myProfile = {
      nickname: snap.val().nickname || `센세#${myUid.slice(0, 4)}`,
      rating: typeof snap.val().rating === 'number' ? snap.val().rating : 1000,
      wins: snap.val().wins || 0,
      losses: snap.val().losses || 0,
      draws: snap.val().draws || 0
    };
  } else {
    myProfile = {
      nickname: `센세#${myUid.slice(0, 4)}`,
      rating: 1000,
      wins: 0,
      losses: 0,
      draws: 0
    };
    await db.ref(`users/${myUid}`).set(myProfile);
  }
  updateMultiLobbyUI();
}

function updateMultiLobbyUI() {
  const nickInput = document.getElementById('multiNicknameInput');
  if (nickInput) nickInput.value = myProfile.nickname;

  const tier = getRatingTier(myProfile.rating);
  const tierBadge = document.getElementById('myTierBadge');
  if (tierBadge) {
    tierBadge.textContent = tier.name;
    tierBadge.className = `tier-badge ${tier.className}`;
  }

  document.getElementById('myRatingDisplay').textContent = myProfile.rating;
  document.getElementById('myRecordDisplay').textContent = `${myProfile.wins}승 ${myProfile.losses}패 ${myProfile.draws}무`;
}

// 1 vs 1 로비 진입
async function enterMultiLobby() {
  cleanupMultiplayerSession();
  showScreen('multiLobbyScreen');
  try {
    await ensureMultiAuth();
  } catch (err) {
    alert('서버 연결에 실패했습니다. Firebase Realtime Database와 익명 로그인 설정을 확인해 주세요.');
    console.error(err);
  }
}

// 닉네임 저장
async function saveMultiNickname() {
  const input = document.getElementById('multiNicknameInput');
  const raw = input.value.trim();
  if (!raw) {
    alert('닉네임을 입력해 주세요.');
    return;
  }
  myProfile.nickname = raw.slice(0, 12);
  if (myUid) {
    await db.ref(`users/${myUid}/nickname`).set(myProfile.nickname);
  }
  updateMultiLobbyUI();
  alert('닉네임이 저장되었습니다.');
}

// ==========================================
// 랜덤 매칭 로직
// ==========================================
async function startRandomMatch() {
  await ensureMultiAuth();
  const inputNick = document.getElementById('multiNicknameInput').value.trim();
  if (inputNick && inputNick !== myProfile.nickname) {
    myProfile.nickname = inputNick.slice(0, 12);
    await db.ref(`users/${myUid}/nickname`).set(myProfile.nickname);
  }

  cleanupMultiplayerSession();
  showScreen('matchingScreen');

  let waitSec = 0;
  document.getElementById('matchingTimerText').textContent = `대기 시간: 0초`;
  matchingWaitTimer = setInterval(() => {
    waitSec++;
    document.getElementById('matchingTimerText').textContent = `대기 시간: ${waitSec}초`;
  }, 1000);

  // 이전 잔여 데이터 정리
  await db.ref(`userMatch/${myUid}`).remove();
  await db.ref(`queue/KR/${myUid}`).remove();

  // 대기열(queue/KR) 원자적 트랜잭션으로 매칭 시도
  const queueRef = db.ref('queue/KR');
  let matchedOpponent = null;
  const myEntry = {
    nickname: myProfile.nickname,
    rating: myProfile.rating,
    timestamp: Date.now()
  };

  await queueRef.transaction(currentQueue => {
    matchedOpponent = null;
    if (!currentQueue) {
      return { [myUid]: myEntry };
    }
    for (const [oppUid, oppData] of Object.entries(currentQueue)) {
      if (oppUid !== myUid && oppData) {
        matchedOpponent = { uid: oppUid, ...oppData };
        delete currentQueue[oppUid];
        return currentQueue;
      }
    }
    currentQueue[myUid] = myEntry;
    return currentQueue;
  });

  if (matchedOpponent) {
    // 상대를 찾은 경우: 방 생성 후 상대에게 roomId 전달
    const krPool = getKrStudentsPool();
    const randomStu = krPool[Math.floor(Math.random() * krPool.length)];
    const newRoomRef = db.ref('rooms').push();
    const roomId = newRoomRef.key;

    const roomData = {
      studentId: randomStu.id,
      startedAt: firebase.database.ServerValue.TIMESTAMP,
      players: {
        [matchedOpponent.uid]: {
          uid: matchedOpponent.uid,
          nickname: matchedOpponent.nickname,
          rating: matchedOpponent.rating || 1000,
          status: 'playing',
          hints: 0,
          clearTime: null,
          hintHistory: []
        },
        [myUid]: {
          uid: myUid,
          nickname: myProfile.nickname,
          rating: myProfile.rating,
          status: 'playing',
          hints: 0,
          clearTime: null,
          hintHistory: []
        }
      }
    };

    await newRoomRef.set(roomData);
    await db.ref(`userMatch/${matchedOpponent.uid}`).set({ roomId });
    enterMultiGameRoom(roomId);
  } else {
    // 대기열에 등록된 경우: 연결 끊김 시 자동 삭제 등록 및 매칭 대기
    const myQueueRef = db.ref(`queue/KR/${myUid}`);
    await myQueueRef.onDisconnect().remove();

    matchListenerRef = db.ref(`userMatch/${myUid}`);
    matchListenerRef.on('value', snap => {
      const val = snap.val();
      if (val && val.roomId) {
        matchListenerRef.off();
        matchListenerRef = null;
        myQueueRef.onDisconnect().cancel();
        db.ref(`userMatch/${myUid}`).remove();
        enterMultiGameRoom(val.roomId);
      }
    });
  }
}

async function cancelRandomMatch() {
  cleanupMultiplayerSession();
  showScreen('multiLobbyScreen');
}

function cleanupMultiplayerSession() {
  if (matchingWaitTimer) {
    clearInterval(matchingWaitTimer);
    matchingWaitTimer = null;
  }
  if (gameCountdownTimer) {
    clearInterval(gameCountdownTimer);
    gameCountdownTimer = null;
  }
  if (matchListenerRef) {
    matchListenerRef.off();
    matchListenerRef = null;
  }
  if (currentRoomRef) {
    currentRoomRef.off();
    currentRoomRef = null;
  }
  if (myUid) {
    db.ref(`queue/KR/${myUid}`).remove().catch(() => {});
  }
  currentRoomId = null;
}

// ==========================================
// 인게임 진입 및 실시간 동기화
// ==========================================
async function enterMultiGameRoom(roomId) {
  if (matchingWaitTimer) {
    clearInterval(matchingWaitTimer);
    matchingWaitTimer = null;
  }

  currentRoomId = roomId;
  hasFinishedMatch = false;
  myHintHistory = [];
  isMultiplayerMode = true;

  const roomSnap = await db.ref(`rooms/${roomId}`).get();
  if (!roomSnap.exists()) {
    alert('방 정보를 불러오지 못했습니다.');
    enterMultiLobby();
    return;
  }

  const roomData = roomSnap.val();
  const krPool = getKrStudentsPool();
  const student = krPool.find(s => s.id === roomData.studentId) || krPool[0];

  // UI 세팅 (한섭/일섭 토글 숨김, 실시간 상태바 표시)
  document.getElementById('serverToggleGroup').style.display = 'none';
  document.getElementById('multiStatusBar').style.display = 'flex';
  showScreen('gameScreen');

  setupBoardForStudent(student, krPool);

  // 연결 끊김 시 자동 기권 처리
  const myPlayerRef = db.ref(`rooms/${roomId}/players/${myUid}`);
  myPlayerRef.onDisconnect().update({
    status: 'giveup',
    clearTime: MATCH_TIME_LIMIT_SEC
  });

  // 1분(60초) 카운트다운 시작
  gameStartLocalTime = Date.now();
  const timerEl = document.getElementById('multiTimerDisplay');
  timerEl.classList.remove('timer-urgent');

  gameCountdownTimer = setInterval(() => {
    const elapsed = (Date.now() - gameStartLocalTime) / 1000;
    const remaining = Math.max(0, MATCH_TIME_LIMIT_SEC - elapsed);
    timerEl.textContent = `${remaining.toFixed(1)}s`;

    if (remaining <= 10) {
      timerEl.classList.add('timer-urgent');
    }

    if (remaining <= 0) {
      clearInterval(gameCountdownTimer);
      gameCountdownTimer = null;
      if (!isAnswered) {
        showAnswer(true); // 1분 초과 시 강제 정답 보기
      }
    }
  }, 100);

  // 실시간 방 상태 리스너
  currentRoomRef = db.ref(`rooms/${roomId}`);
  currentRoomRef.on('value', snap => {
    const data = snap.val();
    if (!data || !data.players) return;

    const players = data.players;
    const me = players[myUid];
    const oppUid = Object.keys(players).find(id => id !== myUid);
    const opp = oppUid ? players[oppUid] : null;

    if (me) {
      const meTier = getRatingTier(me.rating || 1000);
      document.getElementById('statusMyName').innerHTML =
        `<span class="tier-badge tier-badge-xs ${meTier.className}">${meTier.name}</span> ${escapeHtml(me.nickname)}`;
      document.getElementById('statusMyHints').textContent = formatStatusText(me);
    }
    if (opp) {
      const oppTier = getRatingTier(opp.rating || 1000);
      document.getElementById('statusOppName').innerHTML =
        `<span class="tier-badge tier-badge-xs ${oppTier.className}">${oppTier.name}</span> ${escapeHtml(opp.nickname)}`;
      document.getElementById('statusOppHints').textContent = formatStatusText(opp);
    }

    // 양쪽 모두 종료(solved / giveup / timeout)되었는지 확인
    if (me && opp && me.status !== 'playing' && opp.status !== 'playing' && !hasFinishedMatch) {
      hasFinishedMatch = true;
      finalizeMultiplayerMatch(data, me, opp);
    }
  });
}

function formatStatusText(player) {
  if (player.status === 'solved') return `완료! (힌트 ${player.hints}개)`;
  if (player.status === 'giveup' || player.status === 'timeout') return `포기 (힌트 ${player.hints}개)`;
  return `힌트 ${player.hints}개`;
}

// ==========================================
// script.js에서 호출하는 이벤트 훅
// ==========================================
function onMultiplayerHintRevealed(hintName, totalHints) {
  if (!currentRoomId || !myUid) return;
  myHintHistory.push(hintName);
  db.ref(`rooms/${currentRoomId}/players/${myUid}`).update({
    hints: totalHints,
    hintHistory: myHintHistory
  });
}

function onMultiplayerWrongAnswer(wrongName, totalHints) {
  if (!currentRoomId || !myUid) return;
  myHintHistory.push(`오답 (${wrongName})`);
  db.ref(`rooms/${currentRoomId}/players/${myUid}`).update({
    hints: totalHints,
    hintHistory: myHintHistory
  });
}

function onMultiplayerSolved(totalHints) {
  if (!currentRoomId || !myUid) return;
  const elapsed = Number(((Date.now() - gameStartLocalTime) / 1000).toFixed(2));
  const myRef = db.ref(`rooms/${currentRoomId}/players/${myUid}`);
  myRef.onDisconnect().cancel();
  myRef.update({
    status: 'solved',
    hints: totalHints,
    clearTime: elapsed,
    hintHistory: myHintHistory
  });
}

function onMultiplayerGiveUp(isTimeout = false) {
  if (!currentRoomId || !myUid) return;
  const elapsed = isTimeout
    ? MATCH_TIME_LIMIT_SEC
    : Number(((Date.now() - gameStartLocalTime) / 1000).toFixed(2));
  const myRef = db.ref(`rooms/${currentRoomId}/players/${myUid}`);
  myRef.onDisconnect().cancel();
  myRef.update({
    status: isTimeout ? 'timeout' : 'giveup',
    hints: usedHintsCount,
    clearTime: elapsed,
    hintHistory: myHintHistory
  });
}

function forfeitMultiplayerGame() {
  if (currentRoomId && myUid && !isAnswered) {
    onMultiplayerGiveUp(false);
  }
}

// ==========================================
// 승패 판정, 레이팅 계산 및 결과 화면 표시
// ==========================================
async function finalizeMultiplayerMatch(roomData, me, opp) {
  if (gameCountdownTimer) {
    clearInterval(gameCountdownTimer);
    gameCountdownTimer = null;
  }
  if (currentRoomRef) {
    currentRoomRef.off();
    currentRoomRef = null;
  }

  // 승패 판정: 1) solved 여부 -> 2) 적은 힌트 수 -> 3) 빠른 클리어 시간
  let outcome = 'draw'; // 'win' | 'lose' | 'draw'
  const meSolved = me.status === 'solved';
  const oppSolved = opp.status === 'solved';

  if (meSolved && !oppSolved) {
    outcome = 'win';
  } else if (!meSolved && oppSolved) {
    outcome = 'lose';
  } else if (meSolved && oppSolved) {
    if (me.hints < opp.hints) outcome = 'win';
    else if (me.hints > opp.hints) outcome = 'lose';
    else {
      const meTime = me.clearTime ?? MATCH_TIME_LIMIT_SEC;
      const oppTime = opp.clearTime ?? MATCH_TIME_LIMIT_SEC;
      if (meTime < oppTime) outcome = 'win';
      else if (meTime > oppTime) outcome = 'lose';
      else outcome = 'draw';
    }
  } else {
    outcome = 'draw';
  }

  // Elo 레이팅 계산 (K = 32)
  const myOldRating = me.rating || myProfile.rating || 1000;
  const oppOldRating = opp.rating || 1000;
  const expectedMe = 1 / (1 + Math.pow(10, (oppOldRating - myOldRating) / 400));
  const scoreMe = outcome === 'win' ? 1 : (outcome === 'lose' ? 0 : 0.5);
  const myDelta = Math.round(32 * (scoreMe - expectedMe));
  const oppDelta = -myDelta;

  const myNewRating = Math.max(0, myOldRating + myDelta);
  const oppNewRating = Math.max(0, oppOldRating + oppDelta);

  // 내 프로필 DB 갱신
  myProfile.rating = myNewRating;
  if (outcome === 'win') myProfile.wins++;
  else if (outcome === 'lose') myProfile.losses++;
  else myProfile.draws++;

  if (myUid) {
    await db.ref(`users/${myUid}`).update({
      rating: myProfile.rating,
      wins: myProfile.wins,
      losses: myProfile.losses,
      draws: myProfile.draws
    });
  }

  // 결과 화면 렌더링
  document.getElementById('multiResultImg').src = targetStudent.imageUrl;
  document.getElementById('multiResultStudentName').textContent = targetStudent.name;

  renderPlayerResultColumn('my', me, outcome, myOldRating, myNewRating, myDelta);
  const oppOutcome = outcome === 'win' ? 'lose' : (outcome === 'lose' ? 'win' : 'draw');
  renderPlayerResultColumn('opp', opp, oppOutcome, oppOldRating, oppNewRating, oppDelta);

  isMultiplayerMode = false;
  currentRoomId = null;
  showScreen('multiResultScreen');
}

function renderPlayerResultColumn(prefix, playerData, outcome, oldRating, newRating, delta) {
  const col = document.getElementById(`${prefix}ResultCol`);
  const badge = document.getElementById(`${prefix}OutcomeBadge`);
  const nameEl = document.getElementById(`${prefix}ResultName`);
  const ratingEl = document.getElementById(`${prefix}RatingChange`);
  const statsEl = document.getElementById(`${prefix}StatsSummary`);
  const listEl = document.getElementById(`${prefix}HintHistoryList`);

  col.classList.remove('col-win', 'col-lose');
  if (outcome === 'win') {
    col.classList.add('col-win');
    badge.textContent = '승리';
  } else if (outcome === 'lose') {
    col.classList.add('col-lose');
    badge.textContent = '패배';
  } else {
    badge.textContent = '무승부';
  }

  nameEl.textContent = playerData.nickname;

  const oldTier = getRatingTier(oldRating);
  const newTier = getRatingTier(newRating);
  const tierBadgeHtml = `<span class="tier-badge tier-badge-sm ${newTier.className}">${newTier.name}</span>`;
  const tierChangeNote = oldTier.name !== newTier.name
    ? (newRating > oldRating ? ' <span class="rating-up">(승급!)</span>' : ' <span class="rating-down">(강등)</span>')
    : '';

  const deltaStr = delta > 0
    ? `<span class="rating-up">(+${delta})</span>`
    : (delta < 0 ? `<span class="rating-down">(${delta})</span>` : `(0)`);

  ratingEl.innerHTML = `${tierBadgeHtml} ${oldRating} → <strong>${newRating}</strong> ${deltaStr}${tierChangeNote}`;

  if (playerData.status === 'solved') {
    statsEl.textContent = `힌트 ${playerData.hints}개 · ${playerData.clearTime}초`;
  } else if (playerData.status === 'timeout') {
    statsEl.textContent = `시간 초과 (힌트 ${playerData.hints}개)`;
  } else {
    statsEl.textContent = `포기 (힌트 ${playerData.hints}개)`;
  }

  listEl.innerHTML = '';
  const history = Array.isArray(playerData.hintHistory) ? playerData.hintHistory : [];
  if (history.length === 0) {
    const li = document.createElement('li');
    li.className = 'hint-history-empty';
    li.textContent = '열람한 힌트 없음 (노힌트!)';
    listEl.appendChild(li);
  } else {
    history.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      listEl.appendChild(li);
    });
  }
}

function confirmMultiResult() {
  enterMultiLobby();
}

// ==========================================
// 실시간 접속자 및 매칭 대기 인원 표시
// ==========================================
let latestOnlineCount = null;
let latestQueueCount = 0;

function updateOnlineStatusDisplay() {
  const container = document.getElementById('mainLobbyOnlineStatus');
  if (!container || latestOnlineCount === null) return;

  const queueText = latestQueueCount > 0
    ? ` · 매칭 대기 <strong>${latestQueueCount}</strong>명`
    : '';
  container.innerHTML = `<span class="online-dot"></span> 현재 접속자 <strong>${latestOnlineCount}</strong>명${queueText}`;
}

function initPresenceTracking() {
  auth.signInAnonymously()
    .then(cred => {
      myUid = cred.user.uid;
      const myPresenceRef = db.ref(`presence/${myUid}`);

      db.ref('.info/connected').on('value', snap => {
        if (snap.val() === true) {
          myPresenceRef.onDisconnect().remove();
          myPresenceRef.set(true);
        }
      });

      db.ref('presence').on('value', snap => {
        latestOnlineCount = snap.exists() ? Object.keys(snap.val()).length : 1;
        updateOnlineStatusDisplay();
      });

      db.ref('queue/KR').on('value', snap => {
        latestQueueCount = snap.exists() ? Object.keys(snap.val()).length : 0;
        updateOnlineStatusDisplay();
      });
    })
    .catch(err => {
      console.warn('접속자 수 표시 초기화 대기:', err.message);
    });
}

initPresenceTracking();