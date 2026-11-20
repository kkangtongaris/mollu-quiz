let targetStudent = null;
let usedHintsCount = 0; 
let isAnswered = false;

window.addEventListener('DOMContentLoaded', () => {
  openHelpPage(1);
});

function startNewGame() {
  targetStudent = studentsData[Math.floor(Math.random() * studentsData.length)];
  usedHintsCount = 0;
  isAnswered = false;
  updateHintCountUI();

  document.getElementById('searchInput').value = '';
  document.getElementById('searchInput').disabled = false;
  document.getElementById('suggestionBox').style.display = 'none';
  
  document.getElementById('wrongAnswerWrapper').style.display = 'none';
  document.getElementById('wrongAnswerList').innerHTML = '';
  
  const imageBox = document.getElementById('studentImageContainer');
  imageBox.innerHTML = '<span id="questionMarkLg" style="font-size: 150px;">?</span>';
  imageBox.style.backgroundColor = "#edf2f7";
  
  document.getElementById('resultMessage').style.display = 'none';
  document.getElementById('nextQuestionBtn').style.display = 'none';

  document.querySelectorAll('.hint-tile, .terrain-tile').forEach(tile => {
    const qMark = tile.querySelector('.question-mark');
    const hText = tile.querySelector('.hidden-text');
    if (qMark) qMark.style.display = 'inline';
    if (hText) hText.style.display = 'none';
  });

  document.getElementById('hint-versions').textContent = targetStudent.hints.versions + "개";
  document.getElementById('hint-height').textContent = targetStudent.hints.height;
  document.getElementById('hint-birthMonth').textContent = targetStudent.hints.birthMonth;
  document.getElementById('hint-age').textContent = targetStudent.hints.age;
  document.getElementById('hint-grade').textContent = targetStudent.hints.grade;
  
  // 머리색 텍스트 폰트 컬러 적용
  document.getElementById('hint-hairColor').innerHTML = getColoredHairColorHTML(targetStudent.hints.hairColor);
  
  document.getElementById('hint-weapon').textContent = targetStudent.hints.weapon;
  document.getElementById('hint-school').textContent = targetStudent.hints.school;
  document.getElementById('hint-role').textContent = targetStudent.hints.role;
  document.getElementById('hint-squadType').textContent = targetStudent.hints.squadType;
  document.getElementById('hint-range').textContent = targetStudent.hints.range;

  document.getElementById('hint-urban').innerHTML = getTerrainImg(targetStudent.terrain.urban);
  document.getElementById('hint-outdoor').innerHTML = getTerrainImg(targetStudent.terrain.outdoor);
  document.getElementById('hint-indoor').innerHTML = getTerrainImg(targetStudent.terrain.indoor);

  applyTypeColor('hint-attackType', targetStudent.hints.attackType);
  applyTypeColor('hint-defenseType', targetStudent.hints.defenseType);
}

function getColoredHairColorHTML(colorString) {
  if (!colorString || colorString === "입력필요") return "입력필요";
  
  const colorMap = {
    "빨간색": "#e53e3e",
    "분홍색": "#f687b3",
    "회색": "#a0aec0",
    "흰색": "#ffffff", 
    "주황색": "#ed8936",
    "검은색": "#2d3748",
    "파란색": "#3182ce",
    "갈색": "#975a16",
    "노란색": "#ecc94b",
    "보라색": "#9f7aea",
    "하늘색": "#63b3ed",
    "초록색": "#48bb78"
  };

  const colorCode = colorMap[colorString];
  if (colorCode) {
    if (colorString === "흰색") {
       return `<span style="color: #ffffff; text-shadow: -1px -1px 0 #cbd5e0, 1px -1px 0 #cbd5e0, -1px 1px 0 #cbd5e0, 1px 1px 0 #cbd5e0;">${colorString}</span>`;
    }
    return `<span style="color: ${colorCode};">${colorString}</span>`;
  }
  return colorString;
}

function getTerrainImg(rankString) {
  if (!rankString || rankString === "비밀") return "비밀";
  return rankString.split(' / ').map(rank => {
    rank = rank.trim();
    const rankToNum = { "D": 0, "C": 1, "B": 2, "A": 3, "S": 4, "SS": 5, "SSS": 6 };
    const num = rankToNum[rank];
    if (num !== undefined) {
       const imgUrl = `https://schaledb.com/images/ui/Adaptresult${num}.png`;
       return `<img src="${imgUrl}" onerror="this.outerHTML='<span style=\\'font-size:24px; font-weight:bold;\\'>${rank}</span>'" alt="${rank}" style="width: 45px; vertical-align: middle;">`;
    }
    return `<span style="font-size:24px; font-weight:bold;">${rank}</span>`;
  }).join(' <span style="font-size:18px; color:#a0aec0; margin:0 4px;">/</span> ');
}

function getColoredTypeHTML(typeString) {
  if (!typeString) return "";
  return typeString.split(' / ').map(t => {
    t = t.trim();
    if (t === "CompositeArmor" || t === "복합장갑") return `<span class="type-green">복합장갑</span>`;
    if (["폭발", "경장갑"].includes(t)) return `<span class="type-red">${t}</span>`;
    if (["관통", "중장갑"].includes(t)) return `<span class="type-yellow">${t}</span>`;
    if (["신비", "특수장갑"].includes(t)) return `<span class="type-blue">${t}</span>`;
    if (["진동", "탄력장갑"].includes(t)) return `<span class="type-purple">${t}</span>`;
    return `<span>${t}</span>`;
  }).join(' <span style="color:#a0aec0; font-weight:normal;">/</span> ');
}

function applyTypeColor(elementId, typeString) {
  const el = document.getElementById(elementId);
  el.className = "hidden-text"; 
  el.innerHTML = getColoredTypeHTML(typeString);
}

function updateHintCountUI() {
  document.getElementById('hintCountDisplay').textContent = `사용한 힌트: ${usedHintsCount}개`;
}

function showAnswer() {
  if (isAnswered) return;
  isAnswered = true;
  
  document.getElementById('searchInput').disabled = true;
  document.getElementById('suggestionBox').style.display = 'none';
  
  const imageBox = document.getElementById('studentImageContainer');
  imageBox.innerHTML = `<img src="${targetStudent.imageUrl}" alt="정답 이미지">`;
  imageBox.style.backgroundColor = "#fff";
  
  const resMsg = document.getElementById('resultMessage');
  resMsg.innerHTML = `아쉽네요! 정답은 <span style="color:#e53e3e;">${targetStudent.name}</span> 입니다.`;
  resMsg.style.display = 'block';

  document.getElementById('nextQuestionBtn').style.display = 'block';
}

function revealHint(element, cost) {
  if(isAnswered) return;
  const qMark = element.querySelector('.question-mark');
  const hText = element.querySelector('.hidden-text');
  if (qMark && qMark.style.display !== 'none') {
    qMark.style.display = 'none';
    hText.style.display = 'inline';
    usedHintsCount += cost;
    updateHintCountUI();
  }
}

function revealTerrainHints() {
  if (isAnswered) return;
  let newlyRevealed = false;
  
  document.querySelectorAll('.terrain-tile').forEach(tile => {
    const qMark = tile.querySelector('.question-mark');
    const hText = tile.querySelector('.hidden-text');
    
    if (qMark && qMark.style.display !== 'none') {
      qMark.style.display = 'none';
      hText.style.display = 'inline';
      newlyRevealed = true;
    }
  });

  if (newlyRevealed) {
    usedHintsCount += 1;
    updateHintCountUI();
  }
}

function playAudioHint(btnElement, cost) {
  const qMark = btnElement.querySelector('.question-mark');
  const hText = btnElement.querySelector('.hidden-text');
  const audioPlayer = btnElement.querySelector('#audio-player');

  if (!isAnswered && qMark.style.display !== 'none') {
    qMark.style.display = 'none';
    hText.style.display = 'inline';
    usedHintsCount += cost;
    updateHintCountUI();
  }

  const audioKey = targetStudent.hints.audioKey; 
  if(!audioKey) return;

  const audioUrl = `https://r2.schaledb.com/voice/jp_${audioKey}/${audioKey}_title.mp3`;
  
  audioPlayer.src = audioUrl;
  audioPlayer.currentTime = 0;
  audioPlayer.play().catch(e => console.log("Audio play blocked or file not found."));
}

const searchInput = document.getElementById('searchInput');
const suggestionBox = document.getElementById('suggestionBox');

searchInput.addEventListener('input', function() {
  if(isAnswered) return;
  const query = this.value.replace(/\s/g, "").toLowerCase();
  suggestionBox.innerHTML = '';
  if (!query) { suggestionBox.style.display = 'none'; return; }

  const matchedStudents = studentsData.filter(student => student.aliases.some(alias => alias.replace(/\s/g, "").toLowerCase().includes(query)));

  if (matchedStudents.length > 0) {
    suggestionBox.style.display = 'block';
    matchedStudents.forEach(student => {
      const div = document.createElement('div');
      div.className = 'autocomplete-item';
      div.textContent = student.name;
      div.onclick = function() {
        searchInput.value = student.name;
        suggestionBox.style.display = 'none';
        searchInput.focus();
      };
      suggestionBox.appendChild(div);
    });
  } else { suggestionBox.style.display = 'none'; }
});

document.addEventListener('click', e => { if (e.target !== searchInput) suggestionBox.style.display = 'none'; });

searchInput.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    const userAnswer = this.value.trim();
    if (!userAnswer || isAnswered) return;
    suggestionBox.style.display = 'none';

    if (userAnswer === targetStudent.name) {
      isAnswered = true;
      this.disabled = true;
      
      const imageBox = document.getElementById('studentImageContainer');
      imageBox.innerHTML = `<img src="${targetStudent.imageUrl}" alt="정답 이미지">`;
      imageBox.style.backgroundColor = "#fff";
      
      let rankClass = "";
      let rankName = "";
      if (usedHintsCount <= 7) { rankClass = "rank-plat"; rankName = "플래티넘"; }
      else if (usedHintsCount <= 10) { rankClass = "rank-gold"; rankName = "골드"; }
      else if (usedHintsCount <= 15) { rankClass = "rank-silver"; rankName = "실버"; }
      else { rankClass = "rank-bronze"; rankName = "브론즈"; }

      const resMsg = document.getElementById('resultMessage');
      resMsg.innerHTML = `정답입니다!<br>당신의 등급: <span class="${rankClass}">${rankName}</span>`;
      resMsg.style.display = 'block';

      document.getElementById('nextQuestionBtn').style.display = 'block';
    } else {
      usedHintsCount++;
      updateHintCountUI();
      
      document.getElementById('wrongAnswerWrapper').style.display = 'flex';
      const wrongList = document.getElementById('wrongAnswerList');
      const badge = document.createElement('span');
      badge.className = 'wrong-badge';
      badge.textContent = userAnswer;
      wrongList.appendChild(badge);

      this.value = '';
    }
  }
});

// ==========================================
// 도움말 모달(팝업) 기능 로직
// ==========================================
let currentHelpPage = 1;
const totalHelpPages = 10;

function openHelpPage(pageNum, event) {
  if(event) event.stopPropagation(); 
  
  document.getElementById('helpModal').style.display = 'flex';
  currentHelpPage = pageNum;
  updateHelpUI();
}

function closeHelpModal() {
  document.getElementById('helpModal').style.display = 'none';
}

function closeHelpModalOnBg(e) {
  if (e.target.id === 'helpModal') closeHelpModal();
}

function changeHelpPage(step) {
  currentHelpPage += step;
  if (currentHelpPage < 1) currentHelpPage = 1;
  if (currentHelpPage > totalHelpPages) currentHelpPage = totalHelpPages;
  updateHelpUI();
}

function updateHelpUI() {
  for (let i = 1; i <= totalHelpPages; i++) {
    const page = document.getElementById('page' + i);
    if (i === currentHelpPage) {
      page.classList.add('active');
    } else {
      page.classList.remove('active');
    }
  }
  document.getElementById('pageIndicator').textContent = `${currentHelpPage} / ${totalHelpPages}`;
  document.getElementById('prevPageBtn').disabled = (currentHelpPage === 1);
  document.getElementById('nextPageBtn').disabled = (currentHelpPage === totalHelpPages);
}

if (studentsData.length > 5) {
    startNewGame();
} else {
    alert("코드 내부에 'studentsData' 부분에 데이터 스크립트로 추출한 JSON 데이터를 붙여넣어 주세요!");
}