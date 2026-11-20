const studentsData = [
  {
    "id": 10000,
    "name": "아루",
    "aliases": [
      "아루",
      "아루",
      "아루"
    ],
    "hints": {
      "versions": 3,
      "height": "16X",
      "birthMonth": "3월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "SR",
      "school": "게헨나",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "폭발",
      "defenseType": "경장갑",
      "range": "750",
      "hairColor": "빨간색",
      "audioKey": "aru"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "B",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10000.webp"
  },
  {
    "id": 10001,
    "name": "에이미",
    "aliases": [
      "에이미",
      "에이미",
      "에이미"
    ],
    "hints": {
      "versions": 3,
      "height": "16X",
      "birthMonth": "5월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "SG",
      "school": "밀레니엄",
      "role": "탱커",
      "squadType": "스트라이커",
      "attackType": "폭발",
      "defenseType": "경장갑",
      "range": "350",
      "hairColor": "분홍색",
      "audioKey": "eimi"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "B",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10001.webp"
  },
  {
    "id": 10002,
    "name": "하루나",
    "aliases": [
      "하루나",
      "하루나",
      "하루나"
    ],
    "hints": {
      "versions": 3,
      "height": "16X",
      "birthMonth": "3월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "SR",
      "school": "게헨나",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "신비",
      "defenseType": "중장갑",
      "range": "750",
      "hairColor": "회색",
      "audioKey": "haruna"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "D",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10002.webp"
  },
  {
    "id": 10003,
    "name": "히후미",
    "aliases": [
      "히후미",
      "히후미",
      "히후미"
    ],
    "hints": {
      "versions": 2,
      "height": "15X",
      "birthMonth": "11월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "AR",
      "school": "트리니티",
      "role": "서포터",
      "squadType": "스트라이커",
      "attackType": "관통",
      "defenseType": "경장갑",
      "range": "650",
      "hairColor": "노란색",
      "audioKey": "hihumi"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "S",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10003.webp"
  },
  {
    "id": 10004,
    "name": "히나",
    "aliases": [
      "히나",
      "히나",
      "히나"
    ],
    "hints": {
      "versions": 3,
      "height": "14X",
      "birthMonth": "2월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "MG",
      "school": "게헨나",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "폭발",
      "defenseType": "중장갑",
      "range": "750",
      "hairColor": "흰색",
      "audioKey": "hina"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "C",
      "indoor": "C"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10004.webp"
  },
  {
    "id": 10005,
    "name": "호시노",
    "aliases": [
      "호시노",
      "호시노",
      "호시노"
    ],
    "hints": {
      "versions": 4,
      "height": "14X",
      "birthMonth": "1월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "SG",
      "school": "아비도스",
      "role": "탱커",
      "squadType": "스트라이커",
      "attackType": "관통",
      "defenseType": "중장갑",
      "range": "350",
      "hairColor": "분홍색",
      "audioKey": "hoshino"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "S",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10005.webp"
  },
  {
    "id": 10006,
    "name": "이오리",
    "aliases": [
      "이오리",
      "이오리",
      "이오리"
    ],
    "hints": {
      "versions": 2,
      "height": "15X",
      "birthMonth": "11월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "SR",
      "school": "게헨나",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "관통",
      "defenseType": "중장갑",
      "range": "650",
      "hairColor": "회색",
      "audioKey": "iori"
    },
    "terrain": {
      "urban": "C",
      "outdoor": "C",
      "indoor": "S"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10006.webp"
  },
  {
    "id": 10007,
    "name": "마키",
    "aliases": [
      "마키",
      "마키",
      "마키"
    ],
    "hints": {
      "versions": 2,
      "height": "14X",
      "birthMonth": "8월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "MG",
      "school": "밀레니엄",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "관통",
      "defenseType": "경장갑",
      "range": "750",
      "hairColor": "빨간색",
      "audioKey": "maki"
    },
    "terrain": {
      "urban": "C",
      "outdoor": "S",
      "indoor": "C"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10007.webp"
  },
  {
    "id": 10008,
    "name": "네루",
    "aliases": [
      "네루",
      "네루",
      "네루"
    ],
    "hints": {
      "versions": 3,
      "height": "14X",
      "birthMonth": "8월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "SMG",
      "school": "밀레니엄",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "관통",
      "defenseType": "경장갑",
      "range": "450",
      "hairColor": "주황색",
      "audioKey": "neru"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "S",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10008.webp"
  },
  {
    "id": 10009,
    "name": "이즈미",
    "aliases": [
      "이즈미",
      "이즈미",
      "이즈미"
    ],
    "hints": {
      "versions": 3,
      "height": "16X",
      "birthMonth": "5월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "MG",
      "school": "게헨나",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "폭발",
      "defenseType": "경장갑",
      "range": "750",
      "hairColor": "갈색",
      "audioKey": "izumi"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "D",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10009.webp"
  },
  {
    "id": 10010,
    "name": "시로코",
    "aliases": [
      "시로코",
      "시로코",
      "시로코"
    ],
    "hints": {
      "versions": 3,
      "height": "15X",
      "birthMonth": "5월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "AR",
      "school": "아비도스",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "폭발",
      "defenseType": "경장갑",
      "range": "650",
      "hairColor": "회색",
      "audioKey": "shiroko"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "B",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10010.webp"
  },
  {
    "id": 10011,
    "name": "슌",
    "aliases": [
      "슌",
      "슌",
      "슌"
    ],
    "hints": {
      "versions": 3,
      "height": "17X",
      "birthMonth": "2월",
      "age": "극비",
      "grade": "3학년",
      "weapon": "SR",
      "school": "산해경",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "폭발",
      "defenseType": "경장갑",
      "range": "750",
      "hairColor": "검은색",
      "audioKey": "shun"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "B",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10011.webp"
  },
  {
    "id": 10012,
    "name": "스미레",
    "aliases": [
      "스미레",
      "스미레",
      "스미레"
    ],
    "hints": {
      "versions": 2,
      "height": "16X",
      "birthMonth": "8월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "SG",
      "school": "밀레니엄",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "관통",
      "defenseType": "특수장갑",
      "range": "450",
      "hairColor": "검은색",
      "audioKey": "sumire"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "D",
      "indoor": "S"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10012.webp"
  },
  {
    "id": 10013,
    "name": "츠루기",
    "aliases": [
      "츠루기",
      "츠루기",
      "츠루기"
    ],
    "hints": {
      "versions": 2,
      "height": "16X",
      "birthMonth": "6월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "SG",
      "school": "트리니티",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "관통",
      "defenseType": "중장갑",
      "range": "450",
      "hairColor": "검은색",
      "audioKey": "tsurugi"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "B",
      "indoor": "S"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10013.webp"
  },
  {
    "id": 10014,
    "name": "이즈나",
    "aliases": [
      "이즈나",
      "이즈나",
      "이즈나"
    ],
    "hints": {
      "versions": 2,
      "height": "15X",
      "birthMonth": "12월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "SMG",
      "school": "백귀야행",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "신비",
      "defenseType": "경장갑",
      "range": "450",
      "hairColor": "갈색",
      "audioKey": "izuna"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "B",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10014.webp"
  },
  {
    "id": 10015,
    "name": "아리스",
    "aliases": [
      "아리스",
      "아리스",
      "아리스"
    ],
    "hints": {
      "versions": 3,
      "height": "15X",
      "birthMonth": "3월",
      "age": "??세",
      "grade": "1학년",
      "weapon": "RG",
      "school": "밀레니엄",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "신비",
      "defenseType": "특수장갑",
      "range": "850",
      "hairColor": "검은색",
      "audioKey": "aris"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "D",
      "indoor": "S"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10015.webp"
  },
  {
    "id": 10016,
    "name": "미도리",
    "aliases": [
      "미도리",
      "미도리",
      "미도리"
    ],
    "hints": {
      "versions": 2,
      "height": "14X",
      "birthMonth": "12월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "SR",
      "school": "밀레니엄",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "관통",
      "defenseType": "경장갑",
      "range": "750",
      "hairColor": "노란색",
      "audioKey": "midori"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "S",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10016.webp"
  },
  {
    "id": 10017,
    "name": "체리노",
    "aliases": [
      "체리노",
      "체리노",
      "체리노"
    ],
    "hints": {
      "versions": 2,
      "height": "12X",
      "birthMonth": "10월",
      "age": "??세",
      "grade": "3학년",
      "weapon": "HG",
      "school": "붉은겨울",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "관통",
      "defenseType": "경장갑",
      "range": "550",
      "hairColor": "흰색",
      "audioKey": "cherino"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "S",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10017.webp"
  },
  {
    "id": 10018,
    "name": "유즈",
    "aliases": [
      "유즈",
      "유즈",
      "유즈"
    ],
    "hints": {
      "versions": 3,
      "height": "15X",
      "birthMonth": "8월",
      "age": "16세",
      "grade": "1학년",
      "weapon": "GL",
      "school": "밀레니엄",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "관통",
      "defenseType": "특수장갑",
      "range": "650",
      "hairColor": "빨간색",
      "audioKey": "yuzu"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "B",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10018.webp"
  },
  {
    "id": 10019,
    "name": "아즈사",
    "aliases": [
      "아즈사",
      "아즈사",
      "아즈사"
    ],
    "hints": {
      "versions": 2,
      "height": "14X",
      "birthMonth": "12월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "AR",
      "school": "트리니티",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "폭발",
      "defenseType": "중장갑",
      "range": "650",
      "hairColor": "흰색",
      "audioKey": "ch0056"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "D",
      "indoor": "S"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10019.webp"
  },
  {
    "id": 10020,
    "name": "코하루",
    "aliases": [
      "코하루",
      "코하루",
      "코하루"
    ],
    "hints": {
      "versions": 2,
      "height": "14X",
      "birthMonth": "4월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "SR",
      "school": "트리니티",
      "role": "힐러",
      "squadType": "스트라이커",
      "attackType": "폭발",
      "defenseType": "중장갑",
      "range": "750",
      "hairColor": "분홍색",
      "audioKey": "ch0057"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "S",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10020.webp"
  },
  {
    "id": 10021,
    "name": "아즈사(수영복)",
    "aliases": [
      "아즈사(수영복)",
      "아즈사(수영복)",
      "아즈사"
    ],
    "hints": {
      "versions": 2,
      "height": "14X",
      "birthMonth": "12월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "AR",
      "school": "트리니티",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "신비",
      "defenseType": "경장갑",
      "range": "650",
      "hairColor": "흰색",
      "audioKey": "ch0059"
    },
    "terrain": {
      "urban": "C",
      "outdoor": "C",
      "indoor": "S"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10021.webp"
  },
  {
    "id": 10022,
    "name": "히나(수영복)",
    "aliases": [
      "히나(수영복)",
      "히나(수영복)",
      "히나"
    ],
    "hints": {
      "versions": 3,
      "height": "14X",
      "birthMonth": "2월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "MG",
      "school": "게헨나",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "폭발",
      "defenseType": "중장갑",
      "range": "750",
      "hairColor": "흰색",
      "audioKey": "ch0063"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "S",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10022.webp"
  },
  {
    "id": 10023,
    "name": "이오리(수영복)",
    "aliases": [
      "이오리(수영복)",
      "이오리(수영복)",
      "이오리"
    ],
    "hints": {
      "versions": 2,
      "height": "15X",
      "birthMonth": "11월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "SR",
      "school": "게헨나",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "폭발",
      "defenseType": "특수장갑",
      "range": "750",
      "hairColor": "회색",
      "audioKey": "ch0064"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "S",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10023.webp"
  },
  {
    "id": 10024,
    "name": "시로코(라이딩)",
    "aliases": [
      "시로코(라이딩)",
      "시로코(라이딩)",
      "시로코"
    ],
    "hints": {
      "versions": 3,
      "height": "15X",
      "birthMonth": "5월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "AR",
      "school": "아비도스",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "신비",
      "defenseType": "중장갑",
      "range": "650",
      "hairColor": "회색",
      "audioKey": "ch0065"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "B",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10024.webp"
  },
  {
    "id": 10025,
    "name": "슌(어린이)",
    "aliases": [
      "슌(어린이)",
      "슌(어린이)",
      "슌"
    ],
    "hints": {
      "versions": 3,
      "height": "비밀",
      "birthMonth": "2월",
      "age": "극비",
      "grade": "3학년",
      "weapon": "SR",
      "school": "산해경",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "폭발",
      "defenseType": "경장갑",
      "range": "750",
      "hairColor": "검은색",
      "audioKey": "ch0066"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "D",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10025.webp"
  },
  {
    "id": 10026,
    "name": "네루(바니걸)",
    "aliases": [
      "네루(바니걸)",
      "네루(바니걸)",
      "네루"
    ],
    "hints": {
      "versions": 3,
      "height": "14X",
      "birthMonth": "8월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "SMG",
      "school": "밀레니엄",
      "role": "탱커",
      "squadType": "스트라이커",
      "attackType": "폭발",
      "defenseType": "중장갑",
      "range": "450",
      "hairColor": "주황색",
      "audioKey": "ch0101"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "S",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10026.webp"
  },
  {
    "id": 10027,
    "name": "카린(바니걸)",
    "aliases": [
      "카린(바니걸)",
      "카린(바니걸)",
      "카린"
    ],
    "hints": {
      "versions": 3,
      "height": "17X",
      "birthMonth": "2월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "SR",
      "school": "밀레니엄",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "신비",
      "defenseType": "중장갑",
      "range": "750",
      "hairColor": "검은색",
      "audioKey": "ch0100"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "B",
      "indoor": "S"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10027.webp"
  },
  {
    "id": 10028,
    "name": "아스나(바니걸)",
    "aliases": [
      "아스나(바니걸)",
      "아스나(바니걸)",
      "아스나"
    ],
    "hints": {
      "versions": 3,
      "height": "16X",
      "birthMonth": "3월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "AR",
      "school": "밀레니엄",
      "role": "서포터",
      "squadType": "스트라이커",
      "attackType": "신비",
      "defenseType": "경장갑",
      "range": "650",
      "hairColor": "노란색",
      "audioKey": "ch0098"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "B",
      "indoor": "S"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10028.webp"
  },
  {
    "id": 10029,
    "name": "나츠",
    "aliases": [
      "나츠",
      "나츠",
      "나츠"
    ],
    "hints": {
      "versions": 2,
      "height": "15X",
      "birthMonth": "12월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "SMG",
      "school": "트리니티",
      "role": "탱커",
      "squadType": "스트라이커",
      "attackType": "신비",
      "defenseType": "중장갑",
      "range": "350",
      "hairColor": "분홍색",
      "audioKey": "ch0155"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "B",
      "indoor": "S"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10029.webp"
  },
  {
    "id": 10030,
    "name": "치나츠(온천)",
    "aliases": [
      "치나츠(온천)",
      "치나츠(온천)",
      "치나츠"
    ],
    "hints": {
      "versions": 2,
      "height": "15X",
      "birthMonth": "8월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "HG",
      "school": "게헨나",
      "role": "서포터",
      "squadType": "스트라이커",
      "attackType": "신비",
      "defenseType": "경장갑",
      "range": "650",
      "hairColor": "갈색",
      "audioKey": "ch0163"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "B",
      "indoor": "S"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10030.webp"
  },
  {
    "id": 10031,
    "name": "아루(새해)",
    "aliases": [
      "아루(새해)",
      "아루(새해)",
      "아루"
    ],
    "hints": {
      "versions": 3,
      "height": "16X",
      "birthMonth": "3월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "SR",
      "school": "게헨나",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "관통",
      "defenseType": "특수장갑",
      "range": "750",
      "hairColor": "빨간색",
      "audioKey": "ch0084"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "B",
      "indoor": "S"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10031.webp"
  },
  {
    "id": 10032,
    "name": "무츠키(새해)",
    "aliases": [
      "무츠키(새해)",
      "무츠키(새해)",
      "무츠키"
    ],
    "hints": {
      "versions": 3,
      "height": "14X",
      "birthMonth": "7월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "MG",
      "school": "게헨나",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "신비",
      "defenseType": "중장갑",
      "range": "750",
      "hairColor": "흰색",
      "audioKey": "ch0085"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "S",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10032.webp"
  },
  {
    "id": 10033,
    "name": "와카모",
    "aliases": [
      "와카모",
      "와카모",
      "와카모"
    ],
    "hints": {
      "versions": 2,
      "height": "16X",
      "birthMonth": "4월",
      "age": "18세",
      "grade": "정학",
      "weapon": "SR",
      "school": "백귀야행",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "신비",
      "defenseType": "경장갑",
      "range": "750",
      "hairColor": "검은색",
      "audioKey": "ch0111"
    },
    "terrain": {
      "urban": "A",
      "outdoor": "D",
      "indoor": "S"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10033.webp"
  },
  {
    "id": 10034,
    "name": "미모리",
    "aliases": [
      "미모리",
      "미모리",
      "미모리"
    ],
    "hints": {
      "versions": 2,
      "height": "15X",
      "birthMonth": "3월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "HG",
      "school": "백귀야행",
      "role": "서포터",
      "squadType": "스트라이커",
      "attackType": "신비",
      "defenseType": "경장갑",
      "range": "550",
      "hairColor": "분홍색",
      "audioKey": "ch0115"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "D",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10034.webp"
  },
  {
    "id": 10035,
    "name": "우이",
    "aliases": [
      "우이",
      "우이",
      "우이"
    ],
    "hints": {
      "versions": 2,
      "height": "16X",
      "birthMonth": "4월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "SR",
      "school": "트리니티",
      "role": "서포터",
      "squadType": "스트라이커",
      "attackType": "폭발",
      "defenseType": "경장갑",
      "range": "750",
      "hairColor": "검은색",
      "audioKey": "ch0169"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "S",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10035.webp"
  },
  {
    "id": 10036,
    "name": "히나타",
    "aliases": [
      "히나타",
      "히나타",
      "히나타"
    ],
    "hints": {
      "versions": 2,
      "height": "16X",
      "birthMonth": "5월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "HG",
      "school": "트리니티",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "신비",
      "defenseType": "중장갑",
      "range": "650",
      "hairColor": "검은색",
      "audioKey": "ch0073"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "S",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10036.webp"
  },
  {
    "id": 10037,
    "name": "마리나",
    "aliases": [
      "마리나",
      "마리나",
      "마리나"
    ],
    "hints": {
      "versions": 2,
      "height": "16X",
      "birthMonth": "11월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "SMG",
      "school": "붉은겨울",
      "role": "탱커",
      "squadType": "스트라이커",
      "attackType": "관통",
      "defenseType": "경장갑",
      "range": "350",
      "hairColor": "노란색",
      "audioKey": "ch0119"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "B",
      "indoor": "S"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10037.webp"
  },
  {
    "id": 10038,
    "name": "미야코",
    "aliases": [
      "미야코",
      "미야코",
      "미야코"
    ],
    "hints": {
      "versions": 2,
      "height": "15X",
      "birthMonth": "1월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "SMG",
      "school": "SRT",
      "role": "탱커",
      "squadType": "스트라이커",
      "attackType": "관통",
      "defenseType": "중장갑",
      "range": "350",
      "hairColor": "흰색",
      "audioKey": "ch0142"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "D",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10038.webp"
  },
  {
    "id": 10039,
    "name": "미유",
    "aliases": [
      "미유",
      "미유",
      "미유"
    ],
    "hints": {
      "versions": 2,
      "height": "14X",
      "birthMonth": "7월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "SR",
      "school": "SRT",
      "role": "서포터",
      "squadType": "스트라이커",
      "attackType": "관통",
      "defenseType": "경장갑",
      "range": "750",
      "hairColor": "검은색",
      "audioKey": "ch0145"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "B",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10039.webp"
  },
  {
    "id": 10040,
    "name": "츠쿠요",
    "aliases": [
      "츠쿠요",
      "츠쿠요",
      "츠쿠요"
    ],
    "hints": {
      "versions": 2,
      "height": "18X",
      "birthMonth": "4월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "SMG",
      "school": "백귀야행",
      "role": "탱커",
      "squadType": "스트라이커",
      "attackType": "신비",
      "defenseType": "경장갑",
      "range": "350",
      "hairColor": "검은색",
      "audioKey": "ch0114"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "D",
      "indoor": "S"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10040.webp"
  },
  {
    "id": 10041,
    "name": "미사키",
    "aliases": [
      "미사키",
      "미사키",
      "미사키"
    ],
    "hints": {
      "versions": 2,
      "height": "16X",
      "birthMonth": "1월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "RL",
      "school": "아리우스",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "폭발",
      "defenseType": "특수장갑",
      "range": "850",
      "hairColor": "검은색",
      "audioKey": "ch0105"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "D",
      "indoor": "S"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10041.webp"
  },
  {
    "id": 10042,
    "name": "아츠코",
    "aliases": [
      "아츠코",
      "아츠코",
      "아츠코"
    ],
    "hints": {
      "versions": 2,
      "height": "15X",
      "birthMonth": "1월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "SMG",
      "school": "아리우스",
      "role": "탱커",
      "squadType": "스트라이커",
      "attackType": "폭발",
      "defenseType": "특수장갑",
      "range": "350",
      "hairColor": "보라색",
      "audioKey": "ch0104"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "D",
      "indoor": "S"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10042.webp"
  },
  {
    "id": 10043,
    "name": "와카모(수영복)",
    "aliases": [
      "와카모(수영복)",
      "와카모(수영복)",
      "와카모"
    ],
    "hints": {
      "versions": 2,
      "height": "16X",
      "birthMonth": "4월",
      "age": "18세",
      "grade": "정학",
      "weapon": "SR",
      "school": "백귀야행",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "관통",
      "defenseType": "중장갑",
      "range": "750",
      "hairColor": "검은색",
      "audioKey": "ch0175"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "D",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10043.webp"
  },
  {
    "id": 10044,
    "name": "노노미(수영복)",
    "aliases": [
      "노노미(수영복)",
      "노노미(수영복)",
      "노노미"
    ],
    "hints": {
      "versions": 2,
      "height": "16X",
      "birthMonth": "9월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "MG",
      "school": "아비도스",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "폭발",
      "defenseType": "특수장갑",
      "range": "750",
      "hairColor": "노란색",
      "audioKey": "ch0092"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "D",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10044.webp"
  },
  {
    "id": 10045,
    "name": "호시노(수영복)",
    "aliases": [
      "호시노(수영복)",
      "호시노(수영복)",
      "호시노"
    ],
    "hints": {
      "versions": 4,
      "height": "14X",
      "birthMonth": "1월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "SG",
      "school": "아비도스",
      "role": "서포터",
      "squadType": "스트라이커",
      "attackType": "폭발",
      "defenseType": "특수장갑",
      "range": "450",
      "hairColor": "분홍색",
      "audioKey": "ch0091"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "A",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10045.webp"
  },
  {
    "id": 10046,
    "name": "이즈나(수영복)",
    "aliases": [
      "이즈나(수영복)",
      "이즈나(수영복)",
      "이즈나"
    ],
    "hints": {
      "versions": 2,
      "height": "15X",
      "birthMonth": "12월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "SMG",
      "school": "백귀야행",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "신비",
      "defenseType": "특수장갑",
      "range": "450",
      "hairColor": "갈색",
      "audioKey": "ch0179"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "B",
      "indoor": "S"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10046.webp"
  },
  {
    "id": 10047,
    "name": "치세(수영복)",
    "aliases": [
      "치세(수영복)",
      "치세(수영복)",
      "치세"
    ],
    "hints": {
      "versions": 2,
      "height": "15X",
      "birthMonth": "7월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "GL",
      "school": "백귀야행",
      "role": "서포터",
      "squadType": "스트라이커",
      "attackType": "신비",
      "defenseType": "경장갑",
      "range": "650",
      "hairColor": "하늘색",
      "audioKey": "ch0178"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "S",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10047.webp"
  },
  {
    "id": 10048,
    "name": "사오리",
    "aliases": [
      "사오리",
      "사오리",
      "사오리"
    ],
    "hints": {
      "versions": 3,
      "height": "16X",
      "birthMonth": "9월",
      "age": "17세",
      "grade": "2학년",
      "weapon": "AR",
      "school": "아리우스",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "폭발",
      "defenseType": "특수장갑",
      "range": "650",
      "hairColor": "검은색",
      "audioKey": "ch0103"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "D",
      "indoor": "S"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10048.webp"
  },
  {
    "id": 10049,
    "name": "카즈사",
    "aliases": [
      "카즈사",
      "카즈사",
      "카즈사"
    ],
    "hints": {
      "versions": 2,
      "height": "15X",
      "birthMonth": "8월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "MG",
      "school": "트리니티",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "관통",
      "defenseType": "중장갑",
      "range": "750",
      "hairColor": "검은색",
      "audioKey": "ch0075"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "D",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10049.webp"
  },
  {
    "id": 10050,
    "name": "코코나",
    "aliases": [
      "코코나",
      "코코나",
      "코코나"
    ],
    "hints": {
      "versions": 1,
      "height": "13X",
      "birthMonth": "6월",
      "age": "11세",
      "grade": "1학년",
      "weapon": "AR",
      "school": "산해경",
      "role": "힐러",
      "squadType": "스트라이커",
      "attackType": "관통",
      "defenseType": "특수장갑",
      "range": "650",
      "hairColor": "흰색",
      "audioKey": "ch0137"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "B",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10050.webp"
  },
  {
    "id": 10051,
    "name": "우타하(응원단)",
    "aliases": [
      "우타하(응원단)",
      "우타하(응원단)",
      "우타하"
    ],
    "hints": {
      "versions": 2,
      "height": "16X",
      "birthMonth": "11월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "SMG",
      "school": "밀레니엄",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "신비",
      "defenseType": "특수장갑",
      "range": "450",
      "hairColor": "보라색",
      "audioKey": "ch0182"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "B",
      "indoor": "S"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10051.webp"
  },
  {
    "id": 10052,
    "name": "노아",
    "aliases": [
      "노아",
      "노아",
      "노아"
    ],
    "hints": {
      "versions": 2,
      "height": "16X",
      "birthMonth": "4월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "HG",
      "school": "밀레니엄",
      "role": "서포터",
      "squadType": "스트라이커",
      "attackType": "신비",
      "defenseType": "특수장갑",
      "range": "550",
      "hairColor": "흰색",
      "audioKey": "ch0095"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "B",
      "indoor": "S"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10052.webp"
  },
  {
    "id": 10053,
    "name": "유우카(체육복)",
    "aliases": [
      "유우카(체육복)",
      "유우카(체육복)",
      "유우카"
    ],
    "hints": {
      "versions": 3,
      "height": "15X",
      "birthMonth": "3월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "SMG",
      "school": "밀레니엄",
      "role": "탱커",
      "squadType": "스트라이커",
      "attackType": "신비",
      "defenseType": "특수장갑",
      "range": "450",
      "hairColor": "파란색",
      "audioKey": "ch0184"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "D",
      "indoor": "S"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10053.webp"
  },
  {
    "id": 10054,
    "name": "마리(체육복)",
    "aliases": [
      "마리(체육복)",
      "마리(체육복)",
      "마리"
    ],
    "hints": {
      "versions": 3,
      "height": "15X",
      "birthMonth": "9월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "HG",
      "school": "트리니티",
      "role": "힐러",
      "squadType": "스트라이커",
      "attackType": "신비",
      "defenseType": "특수장갑",
      "range": "550",
      "hairColor": "주황색",
      "audioKey": "ch0186"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "D",
      "indoor": "S"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10054.webp"
  },
  {
    "id": 10055,
    "name": "시구레",
    "aliases": [
      "시구레",
      "시구레",
      "시구레"
    ],
    "hints": {
      "versions": 2,
      "height": "15X",
      "birthMonth": "1월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "GL",
      "school": "붉은겨울",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "폭발",
      "defenseType": "중장갑",
      "range": "650",
      "hairColor": "하늘색",
      "audioKey": "ch0122"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "S",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10055.webp"
  },
  {
    "id": 10056,
    "name": "세리나(크리스마스)",
    "aliases": [
      "세리나(크리스마스)",
      "세리나(크리스마스)",
      "세리나"
    ],
    "hints": {
      "versions": 2,
      "height": "15X",
      "birthMonth": "1월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "AR",
      "school": "트리니티",
      "role": "서포터",
      "squadType": "스트라이커",
      "attackType": "관통",
      "defenseType": "특수장갑",
      "range": "650",
      "hairColor": "분홍색",
      "audioKey": "ch0194"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "S",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10056.webp"
  },
  {
    "id": 10057,
    "name": "하루나(새해)",
    "aliases": [
      "하루나(새해)",
      "하루나(새해)",
      "하루나"
    ],
    "hints": {
      "versions": 3,
      "height": "16X",
      "birthMonth": "3월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "SR",
      "school": "게헨나",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "폭발",
      "defenseType": "경장갑",
      "range": "750",
      "hairColor": "흰색",
      "audioKey": "ch0191"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "S",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10057.webp"
  },
  {
    "id": 10058,
    "name": "미네",
    "aliases": [
      "미네",
      "미네",
      "미네"
    ],
    "hints": {
      "versions": 2,
      "height": "16X",
      "birthMonth": "11월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "SG",
      "school": "트리니티",
      "role": "탱커",
      "squadType": "스트라이커",
      "attackType": "폭발",
      "defenseType": "경장갑",
      "range": "350",
      "hairColor": "하늘색",
      "audioKey": "ch0152"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "S",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10058.webp"
  },
  {
    "id": 10059,
    "name": "미카",
    "aliases": [
      "미카",
      "미카",
      "미카"
    ],
    "hints": {
      "versions": 2,
      "height": "15X",
      "birthMonth": "5월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "SMG",
      "school": "트리니티",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "관통",
      "defenseType": "경장갑",
      "range": "450",
      "hairColor": "분홍색",
      "audioKey": "ch0069"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "A",
      "indoor": "S"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10059.webp"
  },
  {
    "id": 10060,
    "name": "메구",
    "aliases": [
      "메구",
      "메구",
      "메구"
    ],
    "hints": {
      "versions": 1,
      "height": "16X",
      "birthMonth": "4월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "FT",
      "school": "게헨나",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "폭발",
      "defenseType": "특수장갑",
      "range": "450",
      "hairColor": "빨간색",
      "audioKey": "ch0088"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "S",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10060.webp"
  },
  {
    "id": 10061,
    "name": "사쿠라코",
    "aliases": [
      "사쿠라코",
      "사쿠라코",
      "사쿠라코"
    ],
    "hints": {
      "versions": 2,
      "height": "16X",
      "birthMonth": "10월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "AR",
      "school": "트리니티",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "신비",
      "defenseType": "특수장갑",
      "range": "650",
      "hairColor": "흰색",
      "audioKey": "ch0067"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "S",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10061.webp"
  },
  {
    "id": 10062,
    "name": "토키",
    "aliases": [
      "토키",
      "토키",
      "토키"
    ],
    "hints": {
      "versions": 3,
      "height": "16X",
      "birthMonth": "8월",
      "age": "16세",
      "grade": "1학년",
      "weapon": "AR",
      "school": "밀레니엄",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "폭발",
      "defenseType": "탄력장갑",
      "range": "650",
      "hairColor": "노란색",
      "audioKey": "ch0187"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "D",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10062.webp"
  },
  {
    "id": 10063,
    "name": "코유키",
    "aliases": [
      "코유키",
      "코유키",
      "코유키"
    ],
    "hints": {
      "versions": 2,
      "height": "14X",
      "birthMonth": "2월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "MG",
      "school": "밀레니엄",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "신비",
      "defenseType": "중장갑",
      "range": "750",
      "hairColor": "분홍색",
      "audioKey": "ch0198"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "D",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10063.webp"
  },
  {
    "id": 10064,
    "name": "카요코(새해)",
    "aliases": [
      "카요코(새해)",
      "카요코(새해)",
      "카요코"
    ],
    "hints": {
      "versions": 3,
      "height": "15X",
      "birthMonth": "3월",
      "age": "18세",
      "grade": "3학년",
      "weapon": "HG",
      "school": "게헨나",
      "role": "서포터",
      "squadType": "스트라이커",
      "attackType": "신비",
      "defenseType": "특수장갑",
      "range": "550",
      "hairColor": "흰색",
      "audioKey": "ch0086"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "D",
      "indoor": "S"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10064.webp"
  },
  {
    "id": 10065,
    "name": "카호",
    "aliases": [
      "카호",
      "카호",
      "카호"
    ],
    "hints": {
      "versions": 1,
      "height": "17X",
      "birthMonth": "10월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "AR",
      "school": "백귀야행",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "신비",
      "defenseType": "중장갑",
      "range": "650",
      "hairColor": "노란색",
      "audioKey": "ch0107"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "S",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10065.webp"
  },
  {
    "id": 10066,
    "name": "아리스(메이드)",
    "aliases": [
      "아리스(메이드)",
      "아리스(메이드)",
      "아리스"
    ],
    "hints": {
      "versions": 3,
      "height": "15X",
      "birthMonth": "3월",
      "age": "??세",
      "grade": "1학년",
      "weapon": "RG",
      "school": "밀레니엄",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "신비",
      "defenseType": "경장갑",
      "range": "850",
      "hairColor": "검은색",
      "audioKey": "ch0200"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "B",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10066.webp"
  },
  {
    "id": 10067,
    "name": "토키(바니걸)",
    "aliases": [
      "토키(바니걸)",
      "토키(바니걸)",
      "토키"
    ],
    "hints": {
      "versions": 3,
      "height": "16X",
      "birthMonth": "8월",
      "age": "16세",
      "grade": "1학년",
      "weapon": "AR",
      "school": "밀레니엄",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "폭발",
      "defenseType": "경장갑",
      "range": "650",
      "hairColor": "노란색",
      "audioKey": "ch0211"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "S",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10067.webp"
  },
  {
    "id": 10068,
    "name": "레이사",
    "aliases": [
      "레이사",
      "레이사",
      "레이사"
    ],
    "hints": {
      "versions": 2,
      "height": "15X",
      "birthMonth": "5월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "SG",
      "school": "트리니티",
      "role": "탱커",
      "squadType": "스트라이커",
      "attackType": "관통",
      "defenseType": "중장갑",
      "range": "350",
      "hairColor": "보라색",
      "audioKey": "ch0167"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "B",
      "indoor": "S"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10068.webp"
  },
  {
    "id": 10069,
    "name": "루미",
    "aliases": [
      "루미",
      "루미",
      "루미"
    ],
    "hints": {
      "versions": 1,
      "height": "16X",
      "birthMonth": "3월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "SMG",
      "school": "산해경",
      "role": "힐러",
      "squadType": "스트라이커",
      "attackType": "폭발",
      "defenseType": "중장갑",
      "range": "450",
      "hairColor": "갈색",
      "audioKey": "ch0135"
    },
    "terrain": {
      "urban": "C",
      "outdoor": "C",
      "indoor": "S"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10069.webp"
  },
  {
    "id": 10070,
    "name": "미나",
    "aliases": [
      "미나",
      "미나",
      "미나"
    ],
    "hints": {
      "versions": 1,
      "height": "16X",
      "birthMonth": "9월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "HG",
      "school": "산해경",
      "role": "서포터",
      "squadType": "스트라이커",
      "attackType": "폭발",
      "defenseType": "중장갑",
      "range": "550",
      "hairColor": "회색",
      "audioKey": "ch0138"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "B",
      "indoor": "S"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10070.webp"
  },
  {
    "id": 10071,
    "name": "미야코(수영복)",
    "aliases": [
      "미야코(수영복)",
      "미야코(수영복)",
      "미야코"
    ],
    "hints": {
      "versions": 2,
      "height": "15X",
      "birthMonth": "1월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "SMG",
      "school": "SRT",
      "role": "탱커",
      "squadType": "스트라이커",
      "attackType": "폭발",
      "defenseType": "중장갑",
      "range": "350",
      "hairColor": "흰색",
      "audioKey": "ch0215"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "B",
      "indoor": "S"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10071.webp"
  },
  {
    "id": 10072,
    "name": "사키(수영복)",
    "aliases": [
      "사키(수영복)",
      "사키(수영복)",
      "사키"
    ],
    "hints": {
      "versions": 2,
      "height": "16X",
      "birthMonth": "4월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "MG",
      "school": "SRT",
      "role": "서포터",
      "squadType": "스트라이커",
      "attackType": "폭발",
      "defenseType": "중장갑",
      "range": "750",
      "hairColor": "회색",
      "audioKey": "ch0217"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "B",
      "indoor": "S"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10072.webp"
  },
  {
    "id": 10073,
    "name": "우이(수영복)",
    "aliases": [
      "우이(수영복)",
      "우이(수영복)",
      "우이"
    ],
    "hints": {
      "versions": 2,
      "height": "16X",
      "birthMonth": "4월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "SR",
      "school": "트리니티",
      "role": "서포터",
      "squadType": "스트라이커",
      "attackType": "관통",
      "defenseType": "탄력장갑",
      "range": "750",
      "hairColor": "검은색",
      "audioKey": "ch0204"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "D",
      "indoor": "S"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10073.webp"
  },
  {
    "id": 10074,
    "name": "하나코(수영복)",
    "aliases": [
      "하나코(수영복)",
      "하나코(수영복)",
      "하나코"
    ],
    "hints": {
      "versions": 2,
      "height": "16X",
      "birthMonth": "1월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "AR",
      "school": "트리니티",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "진동",
      "defenseType": "중장갑",
      "range": "650",
      "hairColor": "분홍색",
      "audioKey": "ch0209"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "A",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10074.webp"
  },
  {
    "id": 10075,
    "name": "메루",
    "aliases": [
      "메루",
      "메루",
      "메루"
    ],
    "hints": {
      "versions": 1,
      "height": "13X",
      "birthMonth": "12월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "HG",
      "school": "붉은겨울",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "관통",
      "defenseType": "경장갑",
      "range": "550",
      "hairColor": "초록색",
      "audioKey": "ch0124"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "S",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10075.webp"
  },
  {
    "id": 10076,
    "name": "코토리(응원단)",
    "aliases": [
      "코토리(응원단)",
      "코토리(응원단)",
      "코토리"
    ],
    "hints": {
      "versions": 2,
      "height": "15X",
      "birthMonth": "12월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "MG",
      "school": "밀레니엄",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "폭발",
      "defenseType": "특수장갑",
      "range": "750",
      "hairColor": "노란색",
      "audioKey": "ch0185"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "B",
      "indoor": "S"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10076.webp"
  },
  {
    "id": 10077,
    "name": "이치카",
    "aliases": [
      "이치카",
      "이치카",
      "이치카"
    ],
    "hints": {
      "versions": 2,
      "height": "16X",
      "birthMonth": "11월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "AR",
      "school": "트리니티",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "진동",
      "defenseType": "중장갑",
      "range": "650",
      "hairColor": "검은색",
      "audioKey": "ch0071"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "B",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10077.webp"
  },
  {
    "id": 10078,
    "name": "카스미",
    "aliases": [
      "카스미",
      "카스미",
      "카스미"
    ],
    "hints": {
      "versions": 1,
      "height": "14X",
      "birthMonth": "5월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "HG",
      "school": "게헨나",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "진동",
      "defenseType": "중장갑",
      "range": "550",
      "hairColor": "갈색",
      "audioKey": "ch0089"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "B",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10078.webp"
  },
  {
    "id": 10079,
    "name": "미사카 미코토",
    "aliases": [
      "미사카 미코토",
      "미사카 미코토",
      "미사카 미코토"
    ],
    "hints": {
      "versions": 1,
      "height": "16X",
      "birthMonth": "5월",
      "age": "14세",
      "grade": "2학년",
      "weapon": "AR",
      "school": "토키와다이",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "관통",
      "defenseType": "중장갑",
      "range": "650",
      "hairColor": "주황색",
      "audioKey": "ch9998"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "S",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10079.webp"
  },
  {
    "id": 10080,
    "name": "쇼쿠호 미사키",
    "aliases": [
      "쇼쿠호 미사키",
      "쇼쿠호 미사키",
      "쇼쿠호 미사키"
    ],
    "hints": {
      "versions": 1,
      "height": "비밀",
      "birthMonth": "-월",
      "age": "14세",
      "grade": "2학년",
      "weapon": "HG",
      "school": "토키와다이",
      "role": "서포터",
      "squadType": "스트라이커",
      "attackType": "폭발",
      "defenseType": "중장갑",
      "range": "550",
      "hairColor": "노란색",
      "audioKey": "ch9997"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "C",
      "indoor": "C"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10080.webp"
  },
  {
    "id": 10081,
    "name": "유카리",
    "aliases": [
      "유카리",
      "유카리",
      "유카리"
    ],
    "hints": {
      "versions": 2,
      "height": "15X",
      "birthMonth": "6월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "SR",
      "school": "백귀야행",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "진동",
      "defenseType": "중장갑",
      "range": "750",
      "hairColor": "보라색",
      "audioKey": "ch0161"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "B",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10081.webp"
  },
  {
    "id": 10082,
    "name": "렌게",
    "aliases": [
      "렌게",
      "렌게",
      "렌게"
    ],
    "hints": {
      "versions": 2,
      "height": "15X",
      "birthMonth": "7월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "SR",
      "school": "백귀야행",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "진동",
      "defenseType": "중장갑",
      "range": "750",
      "hairColor": "빨간색",
      "audioKey": "ch0224"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "B",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10082.webp"
  },
  {
    "id": 10083,
    "name": "키쿄",
    "aliases": [
      "키쿄",
      "키쿄",
      "키쿄"
    ],
    "hints": {
      "versions": 2,
      "height": "16X",
      "birthMonth": "8월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "SR",
      "school": "백귀야행",
      "role": "서포터",
      "squadType": "스트라이커",
      "attackType": "진동",
      "defenseType": "중장갑",
      "range": "750",
      "hairColor": "검은색",
      "audioKey": "ch0225"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "B",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10083.webp"
  },
  {
    "id": 10084,
    "name": "코타마(캠핑)",
    "aliases": [
      "코타마(캠핑)",
      "코타마(캠핑)",
      "코타마"
    ],
    "hints": {
      "versions": 2,
      "height": "15X",
      "birthMonth": "1월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "HG",
      "school": "밀레니엄",
      "role": "서포터",
      "squadType": "스트라이커",
      "attackType": "관통",
      "defenseType": "중장갑",
      "range": "550",
      "hairColor": "노란색",
      "audioKey": "ch0232"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "S",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10084.webp"
  },
  {
    "id": 10085,
    "name": "하레(캠핑)",
    "aliases": [
      "하레(캠핑)",
      "하레(캠핑)",
      "하레"
    ],
    "hints": {
      "versions": 2,
      "height": "15X",
      "birthMonth": "4월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "AR",
      "school": "밀레니엄",
      "role": "서포터",
      "squadType": "스트라이커",
      "attackType": "폭발",
      "defenseType": "경장갑",
      "range": "650",
      "hairColor": "흰색",
      "audioKey": "ch0233"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "S",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10085.webp"
  },
  {
    "id": 10086,
    "name": "히나(드레스)",
    "aliases": [
      "히나(드레스)",
      "히나(드레스)",
      "히나"
    ],
    "hints": {
      "versions": 3,
      "height": "14X",
      "birthMonth": "2월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "MG",
      "school": "게헨나",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "폭발",
      "defenseType": "탄력장갑",
      "range": "750",
      "hairColor": "흰색",
      "audioKey": "ch0230"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "A",
      "indoor": "S"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10086.webp"
  },
  {
    "id": 10087,
    "name": "아코(드레스)",
    "aliases": [
      "아코(드레스)",
      "아코(드레스)",
      "아코"
    ],
    "hints": {
      "versions": 2,
      "height": "16X",
      "birthMonth": "12월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "HG",
      "school": "게헨나",
      "role": "서포터",
      "squadType": "스트라이커",
      "attackType": "폭발",
      "defenseType": "특수장갑",
      "range": "550",
      "hairColor": "파란색",
      "audioKey": "ch0231"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "S",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10087.webp"
  },
  {
    "id": 10088,
    "name": "카요코(드레스)",
    "aliases": [
      "카요코(드레스)",
      "카요코(드레스)",
      "카요코"
    ],
    "hints": {
      "versions": 3,
      "height": "15X",
      "birthMonth": "3월",
      "age": "18세",
      "grade": "3학년",
      "weapon": "HG",
      "school": "게헨나",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "관통",
      "defenseType": "경장갑",
      "range": "550",
      "hairColor": "흰색",
      "audioKey": "ch0239"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "B",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10088.webp"
  },
  {
    "id": 10089,
    "name": "아루(드레스)",
    "aliases": [
      "아루(드레스)",
      "아루(드레스)",
      "아루"
    ],
    "hints": {
      "versions": 3,
      "height": "16X",
      "birthMonth": "3월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "SR",
      "school": "게헨나",
      "role": "서포터",
      "squadType": "스트라이커",
      "attackType": "관통",
      "defenseType": "중장갑",
      "range": "750",
      "hairColor": "빨간색",
      "audioKey": "ch0240"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "B",
      "indoor": "S"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10089.webp"
  },
  {
    "id": 10090,
    "name": "우미카",
    "aliases": [
      "우미카",
      "우미카",
      "우미카"
    ],
    "hints": {
      "versions": 1,
      "height": "16X",
      "birthMonth": "7월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "AR",
      "school": "백귀야행",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "신비",
      "defenseType": "특수장갑",
      "range": "650",
      "hairColor": "회색",
      "audioKey": "ch0110"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "S",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10090.webp"
  },
  {
    "id": 10091,
    "name": "카즈사(밴드)",
    "aliases": [
      "카즈사(밴드)",
      "카즈사(밴드)",
      "카즈사"
    ],
    "hints": {
      "versions": 2,
      "height": "15X",
      "birthMonth": "8월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "MG",
      "school": "트리니티",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "폭발",
      "defenseType": "특수장갑",
      "range": "750",
      "hairColor": "검은색",
      "audioKey": "ch0250"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "S",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10091.webp"
  },
  {
    "id": 10092,
    "name": "요시미(밴드)",
    "aliases": [
      "요시미(밴드)",
      "요시미(밴드)",
      "요시미"
    ],
    "hints": {
      "versions": 2,
      "height": "14X",
      "birthMonth": "8월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "AR",
      "school": "트리니티",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "폭발",
      "defenseType": "특수장갑",
      "range": "650",
      "hairColor": "노란색",
      "audioKey": "ch0220"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "S",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10092.webp"
  },
  {
    "id": 10093,
    "name": "키라라",
    "aliases": [
      "키라라",
      "키라라",
      "키라라"
    ],
    "hints": {
      "versions": 1,
      "height": "15X",
      "birthMonth": "2월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "AR",
      "school": "게헨나",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "진동",
      "defenseType": "경장갑",
      "range": "650",
      "hairColor": "분홍색",
      "audioKey": "ch0136"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "B",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10093.webp"
  },
  {
    "id": 10094,
    "name": "모모이(메이드)",
    "aliases": [
      "모모이(메이드)",
      "모모이(메이드)",
      "모모이"
    ],
    "hints": {
      "versions": 2,
      "height": "14X",
      "birthMonth": "12월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "AR",
      "school": "밀레니엄",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "진동",
      "defenseType": "경장갑",
      "range": "650",
      "hairColor": "노란색",
      "audioKey": "ch0201"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "S",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10094.webp"
  },
  {
    "id": 10095,
    "name": "미도리(메이드)",
    "aliases": [
      "미도리(메이드)",
      "미도리(메이드)",
      "미도리"
    ],
    "hints": {
      "versions": 2,
      "height": "14X",
      "birthMonth": "12월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "SR",
      "school": "밀레니엄",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "진동",
      "defenseType": "경장갑",
      "range": "750",
      "hairColor": "노란색",
      "audioKey": "ch0202"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "S",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10095.webp"
  },
  {
    "id": 10096,
    "name": "칸나(수영복)",
    "aliases": [
      "칸나(수영복)",
      "칸나(수영복)",
      "칸나"
    ],
    "hints": {
      "versions": 2,
      "height": "16X",
      "birthMonth": "9월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "HG",
      "school": "발키리",
      "role": "서포터",
      "squadType": "스트라이커",
      "attackType": "폭발",
      "defenseType": "경장갑",
      "range": "550",
      "hairColor": "노란색",
      "audioKey": "ch0260"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "S",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10096.webp"
  },
  {
    "id": 10097,
    "name": "모에(수영복)",
    "aliases": [
      "모에(수영복)",
      "모에(수영복)",
      "모에"
    ],
    "hints": {
      "versions": 2,
      "height": "16X",
      "birthMonth": "9월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "HG",
      "school": "SRT",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "진동",
      "defenseType": "특수장갑",
      "range": "550",
      "hairColor": "갈색",
      "audioKey": "ch0216"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "B",
      "indoor": "S"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10097.webp"
  },
  {
    "id": 10098,
    "name": "호시노(무장) - 탱커",
    "aliases": [
      "호시노(무장) - 탱커",
      "호시노(무장)",
      "호시노"
    ],
    "hints": {
      "versions": 4,
      "height": "14X",
      "birthMonth": "1월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "SG",
      "school": "아비도스",
      "role": "탱커",
      "squadType": "스트라이커",
      "attackType": "신비",
      "defenseType": "중장갑",
      "range": "350",
      "hairColor": "분홍색",
      "audioKey": "ch0258_02"
    },
    "terrain": {
      "urban": "A",
      "outdoor": "S",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10098.webp"
  },
  {
    "id": 10099,
    "name": "호시노(무장) - 딜러",
    "aliases": [
      "호시노(무장) - 딜러",
      "호시노(무장)",
      "호시노"
    ],
    "hints": {
      "versions": 4,
      "height": "14X",
      "birthMonth": "1월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "SG",
      "school": "아비도스",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "신비",
      "defenseType": "중장갑",
      "range": "350",
      "hairColor": "분홍색",
      "audioKey": "ch0258_01"
    },
    "terrain": {
      "urban": "A",
      "outdoor": "S",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10099.webp"
  },
  {
    "id": 10100,
    "name": "시로코*테러",
    "aliases": [
      "시로코*테러",
      "시로코*테러",
      "시로코*테러"
    ],
    "hints": {
      "versions": 1,
      "height": "16X",
      "birthMonth": "5월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "AR",
      "school": "아비도스",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "신비",
      "defenseType": "특수장갑",
      "range": "650",
      "hairColor": "회색",
      "audioKey": "ch0263"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "S",
      "indoor": "A"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10100.webp"
  },
  {
    "id": 10101,
    "name": "사오리(수영복)",
    "aliases": [
      "사오리(수영복)",
      "사오리(수영복)",
      "사오리"
    ],
    "hints": {
      "versions": 3,
      "height": "16X",
      "birthMonth": "9월",
      "age": "17세",
      "grade": "2학년",
      "weapon": "AR",
      "school": "아리우스",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "신비",
      "defenseType": "중장갑",
      "range": "650",
      "hairColor": "파란색",
      "audioKey": "ch0266"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "S",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10101.webp"
  },
  {
    "id": 10102,
    "name": "히요리(수영복)",
    "aliases": [
      "히요리(수영복)",
      "히요리(수영복)",
      "히요리"
    ],
    "hints": {
      "versions": 2,
      "height": "15X",
      "birthMonth": "1월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "SR",
      "school": "아리우스",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "관통",
      "defenseType": "중장갑",
      "range": "750",
      "hairColor": "하늘색",
      "audioKey": "ch0269"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "S",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10102.webp"
  },
  {
    "id": 10103,
    "name": "마리나(치파오)",
    "aliases": [
      "마리나(치파오)",
      "마리나(치파오)",
      "마리나"
    ],
    "hints": {
      "versions": 2,
      "height": "16X",
      "birthMonth": "11월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "SMG",
      "school": "붉은겨울",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "관통",
      "defenseType": "중장갑",
      "range": "350",
      "hairColor": "노란색",
      "audioKey": "ch0270"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "S",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10103.webp"
  },
  {
    "id": 10104,
    "name": "레이죠",
    "aliases": [
      "레이죠",
      "레이죠",
      "레이죠"
    ],
    "hints": {
      "versions": 1,
      "height": "16X",
      "birthMonth": "3월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "AR",
      "school": "산해경",
      "role": "서포터",
      "squadType": "스트라이커",
      "attackType": "신비",
      "defenseType": "중장갑",
      "range": "650",
      "hairColor": "빨간색",
      "audioKey": "ch0134"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "S",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10104.webp"
  },
  {
    "id": 10105,
    "name": "마리(아이돌)",
    "aliases": [
      "마리(아이돌)",
      "마리(아이돌)",
      "마리"
    ],
    "hints": {
      "versions": 3,
      "height": "15X",
      "birthMonth": "9월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "HG",
      "school": "트리니티",
      "role": "힐러",
      "squadType": "스트라이커",
      "attackType": "폭발",
      "defenseType": "중장갑",
      "range": "550",
      "hairColor": "주황색",
      "audioKey": "ch0273"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "S",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10105.webp"
  },
  {
    "id": 10106,
    "name": "사쿠라코(아이돌)",
    "aliases": [
      "사쿠라코(아이돌)",
      "사쿠라코(아이돌)",
      "사쿠라코"
    ],
    "hints": {
      "versions": 2,
      "height": "16X",
      "birthMonth": "10월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "AR",
      "school": "트리니티",
      "role": "서포터",
      "squadType": "스트라이커",
      "attackType": "폭발",
      "defenseType": "중장갑",
      "range": "650",
      "hairColor": "흰색",
      "audioKey": "ch0274"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "S",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10106.webp"
  },
  {
    "id": 10107,
    "name": "치아키",
    "aliases": [
      "치아키",
      "치아키",
      "치아키"
    ],
    "hints": {
      "versions": 2,
      "height": "16X",
      "birthMonth": "9월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "AR",
      "school": "게헨나",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "진동",
      "defenseType": "특수장갑",
      "range": "650",
      "hairColor": "검은색",
      "audioKey": "ch0238"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "D",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10107.webp"
  },
  {
    "id": 10108,
    "name": "유우카(파자마)",
    "aliases": [
      "유우카(파자마)",
      "유우카(파자마)",
      "유우카"
    ],
    "hints": {
      "versions": 3,
      "height": "15X",
      "birthMonth": "3월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "SMG",
      "school": "밀레니엄",
      "role": "탱커",
      "squadType": "스트라이커",
      "attackType": "폭발",
      "defenseType": "중장갑",
      "range": "450",
      "hairColor": "파란색",
      "audioKey": "ch0284"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "S",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10108.webp"
  },
  {
    "id": 10109,
    "name": "노아(파자마)",
    "aliases": [
      "노아(파자마)",
      "노아(파자마)",
      "노아"
    ],
    "hints": {
      "versions": 2,
      "height": "16X",
      "birthMonth": "4월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "HG",
      "school": "밀레니엄",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "관통",
      "defenseType": "경장갑",
      "range": "550",
      "hairColor": "흰색",
      "audioKey": "ch0285"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "S",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10109.webp"
  },
  {
    "id": 10110,
    "name": "세이아",
    "aliases": [
      "세이아",
      "세이아",
      "세이아"
    ],
    "hints": {
      "versions": 2,
      "height": "14X",
      "birthMonth": "9월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "HG",
      "school": "트리니티",
      "role": "서포터",
      "squadType": "스트라이커",
      "attackType": "관통",
      "defenseType": "탄력장갑",
      "range": "550",
      "hairColor": "노란색",
      "audioKey": "ch0070"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "D",
      "indoor": "S"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10110.webp"
  },
  {
    "id": 10111,
    "name": "네루(교복)",
    "aliases": [
      "네루(교복)",
      "네루(교복)",
      "네루"
    ],
    "hints": {
      "versions": 3,
      "height": "14X",
      "birthMonth": "8월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "SMG",
      "school": "밀레니엄",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "관통",
      "defenseType": "탄력장갑",
      "range": "450",
      "hairColor": "주황색",
      "audioKey": "ch0280"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "A",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10111.webp"
  },
  {
    "id": 10112,
    "name": "아스나(교복)",
    "aliases": [
      "아스나(교복)",
      "아스나(교복)",
      "아스나"
    ],
    "hints": {
      "versions": 3,
      "height": "16X",
      "birthMonth": "3월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "AR",
      "school": "밀레니엄",
      "role": "서포터",
      "squadType": "스트라이커",
      "attackType": "폭발",
      "defenseType": "중장갑",
      "range": "650",
      "hairColor": "노란색",
      "audioKey": "ch0281"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "S",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10112.webp"
  },
  {
    "id": 10113,
    "name": "세나(사복)",
    "aliases": [
      "세나(사복)",
      "세나(사복)",
      "세나"
    ],
    "hints": {
      "versions": 2,
      "height": "15X",
      "birthMonth": "4월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "GL",
      "school": "게헨나",
      "role": "힐러",
      "squadType": "스트라이커",
      "attackType": "진동",
      "defenseType": "중장갑",
      "range": "650",
      "hairColor": "흰색",
      "audioKey": "ch0082"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "B",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10113.webp"
  },
  {
    "id": 10114,
    "name": "주리(아르바이트)",
    "aliases": [
      "주리(아르바이트)",
      "주리(아르바이트)",
      "주리"
    ],
    "hints": {
      "versions": 2,
      "height": "17X",
      "birthMonth": "10월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "SG",
      "school": "게헨나",
      "role": "탱커",
      "squadType": "스트라이커",
      "attackType": "신비",
      "defenseType": "경장갑",
      "range": "350",
      "hairColor": "분홍색",
      "audioKey": "ch0286"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "S",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10114.webp"
  },
  {
    "id": 10115,
    "name": "레이",
    "aliases": [
      "레이",
      "레이",
      "레이"
    ],
    "hints": {
      "versions": 1,
      "height": "15X",
      "birthMonth": "8월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "RL",
      "school": "밀레니엄",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "진동",
      "defenseType": "경장갑",
      "range": "850",
      "hairColor": "주황색",
      "audioKey": "ch0245"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "D",
      "indoor": "S"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10115.webp"
  },
  {
    "id": 10116,
    "name": "사오리(드레스)",
    "aliases": [
      "사오리(드레스)",
      "사오리(드레스)",
      "사오리"
    ],
    "hints": {
      "versions": 3,
      "height": "16X",
      "birthMonth": "9월",
      "age": "17세",
      "grade": "2학년",
      "weapon": "AR",
      "school": "아리우스",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "진동",
      "defenseType": "경장갑",
      "range": "650",
      "hairColor": "검은색",
      "audioKey": "ch0259"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "B",
      "indoor": "S"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10116.webp"
  },
  {
    "id": 10117,
    "name": "히카리",
    "aliases": [
      "히카리",
      "히카리",
      "히카리"
    ],
    "hints": {
      "versions": 1,
      "height": "14X",
      "birthMonth": "6월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "HG",
      "school": "하이랜더",
      "role": "서포터",
      "squadType": "스트라이커",
      "attackType": "진동",
      "defenseType": "경장갑",
      "range": "550",
      "hairColor": "초록색",
      "audioKey": "ch0242"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "B",
      "indoor": "S"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10117.webp"
  },
  {
    "id": 10118,
    "name": "노조미",
    "aliases": [
      "노조미",
      "노조미",
      "노조미"
    ],
    "hints": {
      "versions": 1,
      "height": "14X",
      "birthMonth": "6월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "HG",
      "school": "하이랜더",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "진동",
      "defenseType": "경장갑",
      "range": "550",
      "hairColor": "초록색",
      "audioKey": "ch0243"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "B",
      "indoor": "S"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10118.webp"
  },
  {
    "id": 10119,
    "name": "나구사",
    "aliases": [
      "나구사",
      "나구사",
      "나구사"
    ],
    "hints": {
      "versions": 2,
      "height": "16X",
      "birthMonth": "12월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "SR",
      "school": "백귀야행",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "진동",
      "defenseType": "탄력장갑",
      "range": "750",
      "hairColor": "흰색",
      "audioKey": "ch0222"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "B",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10119.webp"
  },
  {
    "id": 10120,
    "name": "나츠(밴드)",
    "aliases": [
      "나츠(밴드)",
      "나츠(밴드)",
      "나츠"
    ],
    "hints": {
      "versions": 2,
      "height": "15X",
      "birthMonth": "12월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "SMG",
      "school": "트리니티",
      "role": "힐러",
      "squadType": "스트라이커",
      "attackType": "폭발",
      "defenseType": "특수장갑",
      "range": "450",
      "hairColor": "분홍색",
      "audioKey": "ch0221"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "S",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10120.webp"
  },
  {
    "id": 10121,
    "name": "유카리(수영복)",
    "aliases": [
      "유카리(수영복)",
      "유카리(수영복)",
      "유카리"
    ],
    "hints": {
      "versions": 2,
      "height": "15X",
      "birthMonth": "6월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "SR",
      "school": "백귀야행",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "관통",
      "defenseType": "경장갑",
      "range": "750",
      "hairColor": "보라색",
      "audioKey": "ch0301"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "B",
      "indoor": "S"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10121.webp"
  },
  {
    "id": 10122,
    "name": "미카(수영복)",
    "aliases": [
      "미카(수영복)",
      "미카(수영복)",
      "미카"
    ],
    "hints": {
      "versions": 2,
      "height": "15X",
      "birthMonth": "5월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "SMG",
      "school": "트리니티",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "진동",
      "defenseType": "특수장갑",
      "range": "450",
      "hairColor": "분홍색",
      "audioKey": "ch0294"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "A",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10122.webp"
  },
  {
    "id": 10123,
    "name": "세이아(수영복)",
    "aliases": [
      "세이아(수영복)",
      "세이아(수영복)",
      "세이아"
    ],
    "hints": {
      "versions": 2,
      "height": "14X",
      "birthMonth": "9월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "HG",
      "school": "트리니티",
      "role": "서포터",
      "squadType": "스트라이커",
      "attackType": "관통",
      "defenseType": "특수장갑",
      "range": "550",
      "hairColor": "노란색",
      "audioKey": "ch0295"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "B",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10123.webp"
  },
  {
    "id": 10124,
    "name": "하스미(수영복)",
    "aliases": [
      "하스미(수영복)",
      "하스미(수영복)",
      "하스미"
    ],
    "hints": {
      "versions": 3,
      "height": "17X",
      "birthMonth": "12월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "SR",
      "school": "트리니티",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "관통",
      "defenseType": "경장갑",
      "range": "750",
      "hairColor": "검은색",
      "audioKey": "ch0291"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "S",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10124.webp"
  },
  {
    "id": 10125,
    "name": "에리",
    "aliases": [
      "에리",
      "에리",
      "에리"
    ],
    "hints": {
      "versions": 1,
      "height": "15X",
      "birthMonth": "10월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "SR",
      "school": "WildHunt",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "진동",
      "defenseType": "특수장갑",
      "range": "750",
      "hairColor": "흰색",
      "audioKey": "ch0304"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "B",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10125.webp"
  },
  {
    "id": 10126,
    "name": "카노에",
    "aliases": [
      "카노에",
      "카노에",
      "카노에"
    ],
    "hints": {
      "versions": 1,
      "height": "14X",
      "birthMonth": "11월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "SG",
      "school": "WildHunt",
      "role": "탱커",
      "squadType": "스트라이커",
      "attackType": "신비",
      "defenseType": "중장갑",
      "range": "350",
      "hairColor": "회색",
      "audioKey": "ch0306"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "B",
      "indoor": "S"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10126.webp"
  },
  {
    "id": 10127,
    "name": "미요",
    "aliases": [
      "미요",
      "미요",
      "미요"
    ],
    "hints": {
      "versions": 1,
      "height": "15X",
      "birthMonth": "8월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "SR",
      "school": "WildHunt",
      "role": "서포터",
      "squadType": "스트라이커",
      "attackType": "진동",
      "defenseType": "탄력장갑",
      "range": "750",
      "hairColor": "회색",
      "audioKey": "ch0317"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "D",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10127.webp"
  },
  {
    "id": 10128,
    "name": "후유",
    "aliases": [
      "후유",
      "후유",
      "후유"
    ],
    "hints": {
      "versions": 1,
      "height": "17X",
      "birthMonth": "9월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "HG",
      "school": "WildHunt",
      "role": "서포터",
      "squadType": "스트라이커",
      "attackType": "진동",
      "defenseType": "특수장갑",
      "range": "550",
      "hairColor": "검은색",
      "audioKey": "ch0318"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "D",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10128.webp"
  },
  {
    "id": 10129,
    "name": "스즈미(매지컬)",
    "aliases": [
      "스즈미(매지컬)",
      "스즈미(매지컬)",
      "스즈미"
    ],
    "hints": {
      "versions": 2,
      "height": "16X",
      "birthMonth": "8월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "AR",
      "school": "트리니티",
      "role": "서포터",
      "squadType": "스트라이커",
      "attackType": "진동",
      "defenseType": "특수장갑",
      "range": "650",
      "hairColor": "흰색",
      "audioKey": "ch0325"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "D",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10129.webp"
  },
  {
    "id": 10130,
    "name": "스바루",
    "aliases": [
      "스바루",
      "스바루",
      "스바루"
    ],
    "hints": {
      "versions": 1,
      "height": "16X",
      "birthMonth": "3월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "AR",
      "school": "아리우스",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "신비",
      "defenseType": "특수장갑",
      "range": "650",
      "hairColor": "검은색",
      "audioKey": "ch0309"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "D",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10130.webp"
  },
  {
    "id": 10131,
    "name": "타카네",
    "aliases": [
      "타카네",
      "타카네",
      "타카네"
    ],
    "hints": {
      "versions": 1,
      "height": "14X",
      "birthMonth": "6월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "HG",
      "school": "붉은겨울",
      "role": "힐러",
      "squadType": "스트라이커",
      "attackType": "신비",
      "defenseType": "경장갑",
      "range": "550",
      "hairColor": "빨간색",
      "audioKey": "ch0229"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "D",
      "indoor": "S"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10131.webp"
  },
  {
    "id": 10132,
    "name": "츠쿠요(드레스)",
    "aliases": [
      "츠쿠요(드레스)",
      "츠쿠요(드레스)",
      "츠쿠요"
    ],
    "hints": {
      "versions": 2,
      "height": "18X",
      "birthMonth": "4월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "SMG",
      "school": "백귀야행",
      "role": "탱커",
      "squadType": "스트라이커",
      "attackType": "관통",
      "defenseType": "경장갑",
      "range": "350",
      "hairColor": "보라색",
      "audioKey": "ch0297"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "S",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10132.webp"
  },
  {
    "id": 10133,
    "name": "리오(무장)",
    "aliases": [
      "리오(무장)",
      "리오(무장)",
      "리오"
    ],
    "hints": {
      "versions": 2,
      "height": "17X",
      "birthMonth": "6월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "HG",
      "school": "밀레니엄",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "폭발",
      "defenseType": "특수장갑",
      "range": "550",
      "hairColor": "검은색",
      "audioKey": "ch0331"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "B",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10133.webp"
  },
  {
    "id": 10134,
    "name": "아리스(무장)",
    "aliases": [
      "아리스(무장)",
      "아리스(무장)",
      "아리스"
    ],
    "hints": {
      "versions": 3,
      "height": "15X",
      "birthMonth": "3월",
      "age": "??세",
      "grade": "1학년",
      "weapon": "AR",
      "school": "밀레니엄",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "신비",
      "defenseType": "복합장갑",
      "range": "650",
      "hairColor": "검은색",
      "audioKey": "ch0334"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "D",
      "indoor": "A"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10134.webp"
  },
  {
    "id": 10135,
    "name": "케이",
    "aliases": [
      "케이",
      "케이",
      "케이"
    ],
    "hints": {
      "versions": 1,
      "height": "15X",
      "birthMonth": "3월",
      "age": "??세",
      "grade": "1학년",
      "weapon": "RG",
      "school": "밀레니엄",
      "role": "서포터",
      "squadType": "스트라이커",
      "attackType": "신비",
      "defenseType": "복합장갑",
      "range": "850",
      "hairColor": "흰색",
      "audioKey": "ch0335"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "D",
      "indoor": "A"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10135.webp"
  },
  {
    "id": 10136,
    "name": "에이미(무장)",
    "aliases": [
      "에이미(무장)",
      "에이미(무장)",
      "에이미"
    ],
    "hints": {
      "versions": 3,
      "height": "16X",
      "birthMonth": "5월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "SR",
      "school": "밀레니엄",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "폭발",
      "defenseType": "경장갑",
      "range": "750",
      "hairColor": "분홍색",
      "audioKey": "ch0337"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "B",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10136.webp"
  },
  {
    "id": 10137,
    "name": "코노카",
    "aliases": [
      "코노카",
      "코노카",
      "코노카"
    ],
    "hints": {
      "versions": 1,
      "height": "16X",
      "birthMonth": "8월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "SG",
      "school": "발키리",
      "role": "탱커",
      "squadType": "스트라이커",
      "attackType": "신비",
      "defenseType": "경장갑",
      "range": "350",
      "hairColor": "흰색",
      "audioKey": "ch0264"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "B",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10137.webp"
  },
  {
    "id": 10138,
    "name": "레나",
    "aliases": [
      "레나",
      "레나",
      "레나"
    ],
    "hints": {
      "versions": 1,
      "height": "15X",
      "birthMonth": "9월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "HG",
      "school": "WildHunt",
      "role": "서포터",
      "squadType": "스트라이커",
      "attackType": "폭발",
      "defenseType": "경장갑",
      "range": "550",
      "hairColor": "갈색",
      "audioKey": "ch0305"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "D",
      "indoor": "S"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10138.webp"
  },
  {
    "id": 10139,
    "name": "니코",
    "aliases": [
      "니코",
      "니코",
      "니코"
    ],
    "hints": {
      "versions": 1,
      "height": "16X",
      "birthMonth": "2월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "SG",
      "school": "SRT",
      "role": "서포터",
      "squadType": "스트라이커",
      "attackType": "폭발",
      "defenseType": "탄력장갑",
      "range": "450",
      "hairColor": "분홍색",
      "audioKey": "ch0172"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "D",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10139.webp"
  },
  {
    "id": 10140,
    "name": "쿠루미",
    "aliases": [
      "쿠루미",
      "쿠루미",
      "쿠루미"
    ],
    "hints": {
      "versions": 1,
      "height": "15X",
      "birthMonth": "9월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "SMG",
      "school": "SRT",
      "role": "탱커",
      "squadType": "스트라이커",
      "attackType": "폭발",
      "defenseType": "경장갑",
      "range": "350",
      "hairColor": "노란색",
      "audioKey": "ch0173"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "B",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10140.webp"
  },
  {
    "id": 10141,
    "name": "하루카(드레스)",
    "aliases": [
      "하루카(드레스)",
      "하루카(드레스)",
      "하루카"
    ],
    "hints": {
      "versions": 3,
      "height": "15X",
      "birthMonth": "5월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "SG",
      "school": "게헨나",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "폭발",
      "defenseType": "경장갑",
      "range": "450",
      "hairColor": "보라색",
      "audioKey": "ch0247"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "B",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10141.webp"
  },
  {
    "id": 10142,
    "name": "나구사(수영복)",
    "aliases": [
      "나구사(수영복)",
      "나구사(수영복)",
      "나구사"
    ],
    "hints": {
      "versions": 2,
      "height": "16X",
      "birthMonth": "12월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "SR",
      "school": "백귀야행",
      "role": "서포터",
      "squadType": "스트라이커",
      "attackType": "폭발",
      "defenseType": "중장갑",
      "range": "750",
      "hairColor": "흰색",
      "audioKey": "ch0303"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "S",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10142.webp"
  },
  {
    "id": 10143,
    "name": "슌(수영복)",
    "aliases": [
      "슌(수영복)",
      "슌(수영복)",
      "슌"
    ],
    "hints": {
      "versions": 3,
      "height": "17X",
      "birthMonth": "2월",
      "age": "극비",
      "grade": "3학년",
      "weapon": "SR",
      "school": "산해경",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "진동",
      "defenseType": "경장갑",
      "range": "750",
      "hairColor": "검은색",
      "audioKey": "ch0355_01"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "S",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10143.webp"
  },
  {
    "id": 10144,
    "name": "슈에링(수영복)",
    "aliases": [
      "슈에링(수영복)",
      "슈에링(수영복)",
      "슈에링"
    ],
    "hints": {
      "versions": 1,
      "height": "비밀",
      "birthMonth": "2월",
      "age": "극비",
      "grade": "극비",
      "weapon": "SR",
      "school": "산해경",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "진동",
      "defenseType": "경장갑",
      "range": "750",
      "hairColor": "검은색",
      "audioKey": "ch0355_02"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "S",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10144.webp"
  },
  {
    "id": 10145,
    "name": "키사키(수영복)",
    "aliases": [
      "키사키(수영복)",
      "키사키(수영복)",
      "키사키"
    ],
    "hints": {
      "versions": 2,
      "height": "14X",
      "birthMonth": "2월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "SMG",
      "school": "산해경",
      "role": "서포터",
      "squadType": "스트라이커",
      "attackType": "진동",
      "defenseType": "탄력장갑",
      "range": "450",
      "hairColor": "검은색",
      "audioKey": "ch0356"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "D",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10145.webp"
  },
  {
    "id": 10146,
    "name": "마코토(수영복)",
    "aliases": [
      "마코토(수영복)",
      "마코토(수영복)",
      "마코토"
    ],
    "hints": {
      "versions": 2,
      "height": "16X",
      "birthMonth": "3월",
      "age": "18세",
      "grade": "3학년",
      "weapon": "SR",
      "school": "게헨나",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "신비",
      "defenseType": "중장갑",
      "range": "750",
      "hairColor": "회색",
      "audioKey": "ch0344"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "D",
      "indoor": "S"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10146.webp"
  },
  {
    "id": 10147,
    "name": "사츠키(수영복)",
    "aliases": [
      "사츠키(수영복)",
      "사츠키(수영복)",
      "사츠키"
    ],
    "hints": {
      "versions": 2,
      "height": "17X",
      "birthMonth": "4월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "HG",
      "school": "게헨나",
      "role": "힐러",
      "squadType": "스트라이커",
      "attackType": "진동",
      "defenseType": "탄력장갑",
      "range": "550",
      "hairColor": "분홍색",
      "audioKey": "ch0345"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "B",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10147.webp"
  },
  {
    "id": 10148,
    "name": "이로하(수영복)",
    "aliases": [
      "이로하(수영복)",
      "이로하(수영복)",
      "이로하"
    ],
    "hints": {
      "versions": 2,
      "height": "15X",
      "birthMonth": "11월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "HG",
      "school": "게헨나",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "폭발",
      "defenseType": "특수장갑",
      "range": "650",
      "hairColor": "빨간색",
      "audioKey": "ch0346"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "A",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/10148.webp"
  },
  {
    "id": 13000,
    "name": "아카네",
    "aliases": [
      "아카네",
      "아카네",
      "아카네"
    ],
    "hints": {
      "versions": 3,
      "height": "16X",
      "birthMonth": "4월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "HG",
      "school": "밀레니엄",
      "role": "서포터",
      "squadType": "스트라이커",
      "attackType": "관통",
      "defenseType": "경장갑",
      "range": "550",
      "hairColor": "갈색",
      "audioKey": "akane"
    },
    "terrain": {
      "urban": "A",
      "outdoor": "A",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/13000.webp"
  },
  {
    "id": 13001,
    "name": "치세",
    "aliases": [
      "치세",
      "치세",
      "치세"
    ],
    "hints": {
      "versions": 2,
      "height": "15X",
      "birthMonth": "7월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "GL",
      "school": "백귀야행",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "신비",
      "defenseType": "중장갑",
      "range": "650",
      "hairColor": "하늘색",
      "audioKey": "chise"
    },
    "terrain": {
      "urban": "A",
      "outdoor": "D",
      "indoor": "A"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/13001.webp"
  },
  {
    "id": 13002,
    "name": "아카리",
    "aliases": [
      "아카리",
      "아카리",
      "아카리"
    ],
    "hints": {
      "versions": 2,
      "height": "16X",
      "birthMonth": "12월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "AR",
      "school": "게헨나",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "폭발",
      "defenseType": "중장갑",
      "range": "650",
      "hairColor": "노란색",
      "audioKey": "akari"
    },
    "terrain": {
      "urban": "A",
      "outdoor": "B",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/13002.webp"
  },
  {
    "id": 13003,
    "name": "하스미",
    "aliases": [
      "하스미",
      "하스미",
      "하스미"
    ],
    "hints": {
      "versions": 3,
      "height": "17X",
      "birthMonth": "12월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "SR",
      "school": "트리니티",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "관통",
      "defenseType": "중장갑",
      "range": "750",
      "hairColor": "검은색",
      "audioKey": "hasumi"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "A",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/13003.webp"
  },
  {
    "id": 13004,
    "name": "노노미",
    "aliases": [
      "노노미",
      "노노미",
      "노노미"
    ],
    "hints": {
      "versions": 2,
      "height": "16X",
      "birthMonth": "9월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "MG",
      "school": "아비도스",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "관통",
      "defenseType": "경장갑",
      "range": "750",
      "hairColor": "노란색",
      "audioKey": "nonomi"
    },
    "terrain": {
      "urban": "A",
      "outdoor": "A",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/13004.webp"
  },
  {
    "id": 13005,
    "name": "카요코",
    "aliases": [
      "카요코",
      "카요코",
      "카요코"
    ],
    "hints": {
      "versions": 3,
      "height": "15X",
      "birthMonth": "3월",
      "age": "18세",
      "grade": "3학년",
      "weapon": "HG",
      "school": "게헨나",
      "role": "서포터",
      "squadType": "스트라이커",
      "attackType": "폭발",
      "defenseType": "중장갑",
      "range": "550",
      "hairColor": "흰색",
      "audioKey": "kayoko"
    },
    "terrain": {
      "urban": "A",
      "outdoor": "D",
      "indoor": "A"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/13005.webp"
  },
  {
    "id": 13006,
    "name": "무츠키",
    "aliases": [
      "무츠키",
      "무츠키",
      "무츠키"
    ],
    "hints": {
      "versions": 3,
      "height": "14X",
      "birthMonth": "7월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "MG",
      "school": "게헨나",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "폭발",
      "defenseType": "경장갑",
      "range": "750",
      "hairColor": "흰색",
      "audioKey": "mutsuki"
    },
    "terrain": {
      "urban": "A",
      "outdoor": "A",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/13006.webp"
  },
  {
    "id": 13007,
    "name": "준코",
    "aliases": [
      "준코",
      "준코",
      "준코"
    ],
    "hints": {
      "versions": 2,
      "height": "14X",
      "birthMonth": "12월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "AR",
      "school": "게헨나",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "관통",
      "defenseType": "경장갑",
      "range": "650",
      "hairColor": "빨간색",
      "audioKey": "zunko"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "A",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/13007.webp"
  },
  {
    "id": 13008,
    "name": "세리카",
    "aliases": [
      "세리카",
      "세리카",
      "세리카"
    ],
    "hints": {
      "versions": 3,
      "height": "15X",
      "birthMonth": "6월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "AR",
      "school": "아비도스",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "폭발",
      "defenseType": "경장갑",
      "range": "650",
      "hairColor": "검은색",
      "audioKey": "serika"
    },
    "terrain": {
      "urban": "A",
      "outdoor": "D",
      "indoor": "A"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/13008.webp"
  },
  {
    "id": 13009,
    "name": "츠바키",
    "aliases": [
      "츠바키",
      "츠바키",
      "츠바키"
    ],
    "hints": {
      "versions": 2,
      "height": "16X",
      "birthMonth": "2월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "SMG",
      "school": "백귀야행",
      "role": "탱커",
      "squadType": "스트라이커",
      "attackType": "관통",
      "defenseType": "특수장갑",
      "range": "350",
      "hairColor": "검은색",
      "audioKey": "tsubaki"
    },
    "terrain": {
      "urban": "A",
      "outdoor": "A",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/13009.webp"
  },
  {
    "id": 13010,
    "name": "유우카",
    "aliases": [
      "유우카",
      "유우카",
      "유우카"
    ],
    "hints": {
      "versions": 3,
      "height": "15X",
      "birthMonth": "3월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "SMG",
      "school": "밀레니엄",
      "role": "탱커",
      "squadType": "스트라이커",
      "attackType": "폭발",
      "defenseType": "중장갑",
      "range": "350",
      "hairColor": "파란색",
      "audioKey": "yuuka"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "B",
      "indoor": "A"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/13010.webp"
  },
  {
    "id": 13011,
    "name": "모모이",
    "aliases": [
      "모모이",
      "모모이",
      "모모이"
    ],
    "hints": {
      "versions": 2,
      "height": "14X",
      "birthMonth": "12월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "AR",
      "school": "밀레니엄",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "관통",
      "defenseType": "경장갑",
      "range": "650",
      "hairColor": "노란색",
      "audioKey": "momoi"
    },
    "terrain": {
      "urban": "A",
      "outdoor": "A",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/13011.webp"
  },
  {
    "id": 13012,
    "name": "키리노",
    "aliases": [
      "키리노",
      "키리노",
      "키리노"
    ],
    "hints": {
      "versions": 2,
      "height": "16X",
      "birthMonth": "10월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "HG",
      "school": "발키리",
      "role": "서포터",
      "squadType": "스트라이커",
      "attackType": "폭발",
      "defenseType": "특수장갑",
      "range": "550",
      "hairColor": "흰색",
      "audioKey": "ch0140"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "A",
      "indoor": "A"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/13012.webp"
  },
  {
    "id": 13013,
    "name": "모미지",
    "aliases": [
      "모미지",
      "모미지",
      "모미지"
    ],
    "hints": {
      "versions": 1,
      "height": "13X",
      "birthMonth": "8월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "RL",
      "school": "붉은겨울",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "진동",
      "defenseType": "중장갑",
      "range": "850",
      "hairColor": "초록색",
      "audioKey": "ch0126"
    },
    "terrain": {
      "urban": "A",
      "outdoor": "A",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/13013.webp"
  },
  {
    "id": 13014,
    "name": "렌게(수영복)",
    "aliases": [
      "렌게(수영복)",
      "렌게(수영복)",
      "렌게"
    ],
    "hints": {
      "versions": 2,
      "height": "15X",
      "birthMonth": "7월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "SR",
      "school": "백귀야행",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "진동",
      "defenseType": "특수장갑",
      "range": "750",
      "hairColor": "빨간색",
      "audioKey": "ch0302"
    },
    "terrain": {
      "urban": "A",
      "outdoor": "B",
      "indoor": "C"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/13014.webp"
  },
  {
    "id": 16000,
    "name": "하루카",
    "aliases": [
      "하루카",
      "하루카",
      "하루카"
    ],
    "hints": {
      "versions": 3,
      "height": "15X",
      "birthMonth": "5월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "SG",
      "school": "게헨나",
      "role": "탱커",
      "squadType": "스트라이커",
      "attackType": "폭발",
      "defenseType": "경장갑",
      "range": "350",
      "hairColor": "보라색",
      "audioKey": "haruka"
    },
    "terrain": {
      "urban": "C",
      "outdoor": "B",
      "indoor": "A"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/16000.webp"
  },
  {
    "id": 16001,
    "name": "아스나",
    "aliases": [
      "아스나",
      "아스나",
      "아스나"
    ],
    "hints": {
      "versions": 3,
      "height": "16X",
      "birthMonth": "3월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "AR",
      "school": "밀레니엄",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "신비",
      "defenseType": "경장갑",
      "range": "650",
      "hairColor": "노란색",
      "audioKey": "asuna"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "B",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/16001.webp"
  },
  {
    "id": 16002,
    "name": "코토리",
    "aliases": [
      "코토리",
      "코토리",
      "코토리"
    ],
    "hints": {
      "versions": 2,
      "height": "15X",
      "birthMonth": "12월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "MG",
      "school": "밀레니엄",
      "role": "서포터",
      "squadType": "스트라이커",
      "attackType": "관통",
      "defenseType": "경장갑",
      "range": "750",
      "hairColor": "노란색",
      "audioKey": "kotori"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "B",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/16002.webp"
  },
  {
    "id": 16003,
    "name": "스즈미",
    "aliases": [
      "스즈미",
      "스즈미",
      "스즈미"
    ],
    "hints": {
      "versions": 2,
      "height": "16X",
      "birthMonth": "8월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "AR",
      "school": "트리니티",
      "role": "서포터",
      "squadType": "스트라이커",
      "attackType": "폭발",
      "defenseType": "중장갑",
      "range": "650",
      "hairColor": "흰색",
      "audioKey": "suzumi"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "B",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/16003.webp"
  },
  {
    "id": 16004,
    "name": "피나",
    "aliases": [
      "피나",
      "피나",
      "피나"
    ],
    "hints": {
      "versions": 2,
      "height": "16X",
      "birthMonth": "11월",
      "age": "17세",
      "grade": "1학년",
      "weapon": "MG",
      "school": "백귀야행",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "관통",
      "defenseType": "경장갑",
      "range": "750",
      "hairColor": "노란색",
      "audioKey": "pina"
    },
    "terrain": {
      "urban": "A",
      "outdoor": "B",
      "indoor": "C"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/16004.webp"
  },
  {
    "id": 16005,
    "name": "츠루기(수영복)",
    "aliases": [
      "츠루기(수영복)",
      "츠루기(수영복)",
      "츠루기"
    ],
    "hints": {
      "versions": 2,
      "height": "16X",
      "birthMonth": "6월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "SG",
      "school": "트리니티",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "신비",
      "defenseType": "특수장갑",
      "range": "450",
      "hairColor": "검은색",
      "audioKey": "ch0060"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "C",
      "indoor": "A"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/16005.webp"
  },
  {
    "id": 16006,
    "name": "이즈미(수영복)",
    "aliases": [
      "이즈미(수영복)",
      "이즈미(수영복)",
      "이즈미"
    ],
    "hints": {
      "versions": 3,
      "height": "16X",
      "birthMonth": "5월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "MG",
      "school": "게헨나",
      "role": "서포터",
      "squadType": "스트라이커",
      "attackType": "폭발",
      "defenseType": "경장갑",
      "range": "750",
      "hairColor": "갈색",
      "audioKey": "ch0062"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "A",
      "indoor": "C"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/16006.webp"
  },
  {
    "id": 16007,
    "name": "토모에",
    "aliases": [
      "토모에",
      "토모에",
      "토모에"
    ],
    "hints": {
      "versions": 2,
      "height": "16X",
      "birthMonth": "11월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "SR",
      "school": "붉은겨울",
      "role": "서포터",
      "squadType": "스트라이커",
      "attackType": "관통",
      "defenseType": "특수장갑",
      "range": "750",
      "hairColor": "분홍색",
      "audioKey": "ch0120"
    },
    "terrain": {
      "urban": "C",
      "outdoor": "B",
      "indoor": "A"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/16007.webp"
  },
  {
    "id": 16008,
    "name": "후부키",
    "aliases": [
      "후부키",
      "후부키",
      "후부키"
    ],
    "hints": {
      "versions": 2,
      "height": "14X",
      "birthMonth": "10월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "SR",
      "school": "발키리",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "관통",
      "defenseType": "중장갑",
      "range": "750",
      "hairColor": "파란색",
      "audioKey": "ch0141"
    },
    "terrain": {
      "urban": "A",
      "outdoor": "B",
      "indoor": "C"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/16008.webp"
  },
  {
    "id": 16009,
    "name": "미치루",
    "aliases": [
      "미치루",
      "미치루",
      "미치루"
    ],
    "hints": {
      "versions": 2,
      "height": "15X",
      "birthMonth": "2월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "SG",
      "school": "백귀야행",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "신비",
      "defenseType": "경장갑",
      "range": "450",
      "hairColor": "회색",
      "audioKey": "ch0113"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "B",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/16009.webp"
  },
  {
    "id": 16010,
    "name": "히비키(응원단)",
    "aliases": [
      "히비키(응원단)",
      "히비키(응원단)",
      "히비키"
    ],
    "hints": {
      "versions": 2,
      "height": "15X",
      "birthMonth": "4월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "MT",
      "school": "밀레니엄",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "폭발",
      "defenseType": "경장갑",
      "range": "850",
      "hairColor": "검은색",
      "audioKey": "ch0181"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "C",
      "indoor": "A"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/16010.webp"
  },
  {
    "id": 16011,
    "name": "하스미(체육복)",
    "aliases": [
      "하스미(체육복)",
      "하스미(체육복)",
      "하스미"
    ],
    "hints": {
      "versions": 3,
      "height": "17X",
      "birthMonth": "12월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "SR",
      "school": "트리니티",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "신비",
      "defenseType": "특수장갑",
      "range": "850",
      "hairColor": "검은색",
      "audioKey": "ch0190"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "C",
      "indoor": "A"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/16011.webp"
  },
  {
    "id": 16012,
    "name": "준코(새해)",
    "aliases": [
      "준코(새해)",
      "준코(새해)",
      "준코"
    ],
    "hints": {
      "versions": 2,
      "height": "14X",
      "birthMonth": "12월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "AR",
      "school": "게헨나",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "신비",
      "defenseType": "중장갑",
      "range": "650",
      "hairColor": "빨간색",
      "audioKey": "ch0192"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "B",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/16012.webp"
  },
  {
    "id": 16013,
    "name": "코하루(수영복)",
    "aliases": [
      "코하루(수영복)",
      "코하루(수영복)",
      "코하루"
    ],
    "hints": {
      "versions": 2,
      "height": "14X",
      "birthMonth": "4월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "SR",
      "school": "트리니티",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "신비",
      "defenseType": "중장갑",
      "range": "750",
      "hairColor": "분홍색",
      "audioKey": "ch0205"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "B",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/16013.webp"
  },
  {
    "id": 16014,
    "name": "이부키",
    "aliases": [
      "이부키",
      "이부키",
      "이부키"
    ],
    "hints": {
      "versions": 2,
      "height": "12X",
      "birthMonth": "4월",
      "age": "11세",
      "grade": "1학년",
      "weapon": "AR",
      "school": "게헨나",
      "role": "서포터",
      "squadType": "스트라이커",
      "attackType": "신비",
      "defenseType": "중장갑",
      "range": "650",
      "hairColor": "노란색",
      "audioKey": "ch0077"
    },
    "terrain": {
      "urban": "C",
      "outdoor": "B",
      "indoor": "A"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/16014.webp"
  },
  {
    "id": 16015,
    "name": "아이리(밴드)",
    "aliases": [
      "아이리(밴드)",
      "아이리(밴드)",
      "아이리"
    ],
    "hints": {
      "versions": 2,
      "height": "16X",
      "birthMonth": "1월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "SMG",
      "school": "트리니티",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "폭발",
      "defenseType": "특수장갑",
      "range": "450",
      "hairColor": "갈색",
      "audioKey": "ch0251"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "A",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/16015.webp"
  },
  {
    "id": 16016,
    "name": "미네(아이돌)",
    "aliases": [
      "미네(아이돌)",
      "미네(아이돌)",
      "미네"
    ],
    "hints": {
      "versions": 2,
      "height": "16X",
      "birthMonth": "11월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "SG",
      "school": "트리니티",
      "role": "탱커",
      "squadType": "스트라이커",
      "attackType": "폭발",
      "defenseType": "중장갑",
      "range": "350",
      "hairColor": "하늘색",
      "audioKey": "ch0275"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "B",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/16016.webp"
  },
  {
    "id": 16017,
    "name": "아오바",
    "aliases": [
      "아오바",
      "아오바",
      "아오바"
    ],
    "hints": {
      "versions": 1,
      "height": "15X",
      "birthMonth": "7월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "SG",
      "school": "하이랜더",
      "role": "탱커",
      "squadType": "스트라이커",
      "attackType": "진동",
      "defenseType": "경장갑",
      "range": "350",
      "hairColor": "노란색",
      "audioKey": "ch0288"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "C",
      "indoor": "A"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/16017.webp"
  },
  {
    "id": 16018,
    "name": "라브",
    "aliases": [
      "라브",
      "라브",
      "라브"
    ],
    "hints": {
      "versions": 1,
      "height": "16X",
      "birthMonth": "5월",
      "age": "16세",
      "grade": "중퇴",
      "weapon": "SG",
      "school": "트리니티",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "진동",
      "defenseType": "특수장갑",
      "range": "450",
      "hairColor": "빨간색",
      "audioKey": "ch0166"
    },
    "terrain": {
      "urban": "A",
      "outdoor": "B",
      "indoor": "C"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/16018.webp"
  },
  {
    "id": 16019,
    "name": "토키(무장)",
    "aliases": [
      "토키(무장)",
      "토키(무장)",
      "토키"
    ],
    "hints": {
      "versions": 3,
      "height": "16X",
      "birthMonth": "8월",
      "age": "16세",
      "grade": "1학년",
      "weapon": "HG",
      "school": "밀레니엄",
      "role": "서포터",
      "squadType": "스트라이커",
      "attackType": "관통",
      "defenseType": "경장갑",
      "range": "550",
      "hairColor": "노란색",
      "audioKey": "ch0333"
    },
    "terrain": {
      "urban": "A",
      "outdoor": "B",
      "indoor": "C"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/16019.webp"
  },
  {
    "id": 16020,
    "name": "오토기",
    "aliases": [
      "오토기",
      "오토기",
      "오토기"
    ],
    "hints": {
      "versions": 1,
      "height": "15X",
      "birthMonth": "5월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "SR",
      "school": "SRT",
      "role": "딜러",
      "squadType": "스트라이커",
      "attackType": "폭발",
      "defenseType": "특수장갑",
      "range": "750",
      "hairColor": "갈색",
      "audioKey": "ch0174"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "B",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/16020.webp"
  },
  {
    "id": 20000,
    "name": "히비키",
    "aliases": [
      "히비키",
      "히비키",
      "히비키"
    ],
    "hints": {
      "versions": 2,
      "height": "15X",
      "birthMonth": "4월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "MT",
      "school": "밀레니엄",
      "role": "딜러",
      "squadType": "스페셜",
      "attackType": "폭발",
      "defenseType": "중장갑",
      "range": "1000",
      "hairColor": "검은색",
      "audioKey": "hibiki"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "B",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/20000.webp"
  },
  {
    "id": 20001,
    "name": "카린",
    "aliases": [
      "카린",
      "카린",
      "카린"
    ],
    "hints": {
      "versions": 3,
      "height": "17X",
      "birthMonth": "2월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "SR",
      "school": "밀레니엄",
      "role": "딜러",
      "squadType": "스페셜",
      "attackType": "관통",
      "defenseType": "중장갑",
      "range": "1000",
      "hairColor": "검은색",
      "audioKey": "karin"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "S",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/20001.webp"
  },
  {
    "id": 20002,
    "name": "사야",
    "aliases": [
      "사야",
      "사야",
      "사야"
    ],
    "hints": {
      "versions": 2,
      "height": "14X",
      "birthMonth": "1월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "HG",
      "school": "산해경",
      "role": "딜러",
      "squadType": "스페셜",
      "attackType": "폭발",
      "defenseType": "경장갑",
      "range": "1000",
      "hairColor": "회색",
      "audioKey": "saya"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "D",
      "indoor": "S"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/20002.webp"
  },
  {
    "id": 20003,
    "name": "마시로",
    "aliases": [
      "마시로",
      "마시로",
      "마시로"
    ],
    "hints": {
      "versions": 2,
      "height": "15X",
      "birthMonth": "6월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "SR",
      "school": "트리니티",
      "role": "딜러",
      "squadType": "스페셜",
      "attackType": "폭발",
      "defenseType": "중장갑",
      "range": "1000",
      "hairColor": "검은색",
      "audioKey": "mashiro"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "S",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/20003.webp"
  },
  {
    "id": 20004,
    "name": "마시로(수영복)",
    "aliases": [
      "마시로(수영복)",
      "마시로(수영복)",
      "마시로"
    ],
    "hints": {
      "versions": 2,
      "height": "15X",
      "birthMonth": "6월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "SR",
      "school": "트리니티",
      "role": "딜러",
      "squadType": "스페셜",
      "attackType": "신비",
      "defenseType": "경장갑",
      "range": "1000",
      "hairColor": "검은색",
      "audioKey": "ch0061"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "S",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/20004.webp"
  },
  {
    "id": 20005,
    "name": "히후미(수영복)",
    "aliases": [
      "히후미(수영복)",
      "히후미(수영복)",
      "히후미"
    ],
    "hints": {
      "versions": 2,
      "height": "15X",
      "birthMonth": "11월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "AR",
      "school": "트리니티",
      "role": "T.S",
      "squadType": "스페셜",
      "attackType": "관통",
      "defenseType": "중장갑",
      "range": "1000",
      "hairColor": "노란색",
      "audioKey": "ch0058"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "B",
      "indoor": "S"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/20005.webp"
  },
  {
    "id": 20006,
    "name": "사야(사복)",
    "aliases": [
      "사야(사복)",
      "사야(사복)",
      "사야"
    ],
    "hints": {
      "versions": 2,
      "height": "14X",
      "birthMonth": "1월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "HG",
      "school": "산해경",
      "role": "딜러",
      "squadType": "스페셜",
      "attackType": "관통",
      "defenseType": "특수장갑",
      "range": "1000",
      "hairColor": "회색",
      "audioKey": "ch0133"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "S",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/20006.webp"
  },
  {
    "id": 20007,
    "name": "하츠네 미쿠",
    "aliases": [
      "하츠네 미쿠",
      "하츠네 미쿠",
      "하츠네 미쿠"
    ],
    "hints": {
      "versions": 1,
      "height": "15X",
      "birthMonth": "8월",
      "age": "16세",
      "grade": "비밀",
      "weapon": "GL",
      "school": "ETC",
      "role": "서포터",
      "squadType": "스페셜",
      "attackType": "폭발",
      "defenseType": "경장갑",
      "range": "1000",
      "hairColor": "하늘색",
      "audioKey": "ch9999"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "D",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/20007.webp"
  },
  {
    "id": 20008,
    "name": "아코",
    "aliases": [
      "아코",
      "아코",
      "아코"
    ],
    "hints": {
      "versions": 2,
      "height": "16X",
      "birthMonth": "12월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "HG",
      "school": "게헨나",
      "role": "서포터",
      "squadType": "스페셜",
      "attackType": "신비",
      "defenseType": "중장갑",
      "range": "1000",
      "hairColor": "파란색",
      "audioKey": "ch0083"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "B",
      "indoor": "S"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/20008.webp"
  },
  {
    "id": 20009,
    "name": "체리노(온천)",
    "aliases": [
      "체리노(온천)",
      "체리노(온천)",
      "체리노"
    ],
    "hints": {
      "versions": 2,
      "height": "12X",
      "birthMonth": "10월",
      "age": "??세",
      "grade": "3학년",
      "weapon": "HG",
      "school": "붉은겨울",
      "role": "T.S",
      "squadType": "스페셜",
      "attackType": "폭발",
      "defenseType": "중장갑",
      "range": "1000",
      "hairColor": "흰색",
      "audioKey": "ch0164"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "B",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/20009.webp"
  },
  {
    "id": 20010,
    "name": "노도카(온천)",
    "aliases": [
      "노도카(온천)",
      "노도카(온천)",
      "노도카"
    ],
    "hints": {
      "versions": 2,
      "height": "14X",
      "birthMonth": "2월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "SMG",
      "school": "붉은겨울",
      "role": "힐러",
      "squadType": "스페셜",
      "attackType": "폭발",
      "defenseType": "특수장갑",
      "range": "1000",
      "hairColor": "분홍색",
      "audioKey": "ch0165"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "D",
      "indoor": "S"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/20010.webp"
  },
  {
    "id": 20011,
    "name": "세리카(새해)",
    "aliases": [
      "세리카(새해)",
      "세리카(새해)",
      "세리카"
    ],
    "hints": {
      "versions": 3,
      "height": "15X",
      "birthMonth": "6월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "AR",
      "school": "아비도스",
      "role": "서포터",
      "squadType": "스페셜",
      "attackType": "관통",
      "defenseType": "특수장갑",
      "range": "1000",
      "hairColor": "검은색",
      "audioKey": "ch0090"
    },
    "terrain": {
      "urban": "C",
      "outdoor": "C",
      "indoor": "S"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/20011.webp"
  },
  {
    "id": 20012,
    "name": "세나",
    "aliases": [
      "세나",
      "세나",
      "세나"
    ],
    "hints": {
      "versions": 2,
      "height": "15X",
      "birthMonth": "4월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "GL",
      "school": "게헨나",
      "role": "T.S",
      "squadType": "스페셜",
      "attackType": "신비",
      "defenseType": "경장갑",
      "range": "1000",
      "hairColor": "흰색",
      "audioKey": "ch0081"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "S",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/20012.webp"
  },
  {
    "id": 20013,
    "name": "치히로",
    "aliases": [
      "치히로",
      "치히로",
      "치히로"
    ],
    "hints": {
      "versions": 1,
      "height": "16X",
      "birthMonth": "4월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "AR",
      "school": "밀레니엄",
      "role": "딜러",
      "squadType": "스페셜",
      "attackType": "관통",
      "defenseType": "중장갑",
      "range": "1000",
      "hairColor": "검은색",
      "audioKey": "ch0160"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "D",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/20013.webp"
  },
  {
    "id": 20014,
    "name": "사키",
    "aliases": [
      "사키",
      "사키",
      "사키"
    ],
    "hints": {
      "versions": 2,
      "height": "16X",
      "birthMonth": "4월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "MG",
      "school": "SRT",
      "role": "딜러",
      "squadType": "스페셜",
      "attackType": "관통",
      "defenseType": "특수장갑",
      "range": "1000",
      "hairColor": "회색",
      "audioKey": "ch0144"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "D",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/20014.webp"
  },
  {
    "id": 20015,
    "name": "카에데",
    "aliases": [
      "카에데",
      "카에데",
      "카에데"
    ],
    "hints": {
      "versions": 1,
      "height": "14X",
      "birthMonth": "7월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "HG",
      "school": "백귀야행",
      "role": "서포터",
      "squadType": "스페셜",
      "attackType": "폭발",
      "defenseType": "특수장갑",
      "range": "1000",
      "hairColor": "검은색",
      "audioKey": "ch0116"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "D",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/20015.webp"
  },
  {
    "id": 20016,
    "name": "이로하",
    "aliases": [
      "이로하",
      "이로하",
      "이로하"
    ],
    "hints": {
      "versions": 2,
      "height": "15X",
      "birthMonth": "11월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "HG",
      "school": "게헨나",
      "role": "T.S",
      "squadType": "스페셜",
      "attackType": "신비",
      "defenseType": "중장갑",
      "range": "1000",
      "hairColor": "빨간색",
      "audioKey": "ch0156"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "B",
      "indoor": "S"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/20016.webp"
  },
  {
    "id": 20017,
    "name": "히요리",
    "aliases": [
      "히요리",
      "히요리",
      "히요리"
    ],
    "hints": {
      "versions": 2,
      "height": "15X",
      "birthMonth": "1월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "SR",
      "school": "아리우스",
      "role": "서포터",
      "squadType": "스페셜",
      "attackType": "폭발",
      "defenseType": "경장갑",
      "range": "1000",
      "hairColor": "하늘색",
      "audioKey": "ch0106"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "D",
      "indoor": "S"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/20017.webp"
  },
  {
    "id": 20018,
    "name": "모에",
    "aliases": [
      "모에",
      "모에",
      "모에"
    ],
    "hints": {
      "versions": 2,
      "height": "16X",
      "birthMonth": "9월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "HG",
      "school": "SRT",
      "role": "딜러",
      "squadType": "스페셜",
      "attackType": "관통",
      "defenseType": "경장갑",
      "range": "1000",
      "hairColor": "갈색",
      "audioKey": "ch0143"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "B",
      "indoor": "S"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/20018.webp"
  },
  {
    "id": 20019,
    "name": "아카네(바니걸)",
    "aliases": [
      "아카네(바니걸)",
      "아카네(바니걸)",
      "아카네"
    ],
    "hints": {
      "versions": 3,
      "height": "16X",
      "birthMonth": "4월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "HG",
      "school": "밀레니엄",
      "role": "딜러",
      "squadType": "스페셜",
      "attackType": "신비",
      "defenseType": "중장갑",
      "range": "1000",
      "hairColor": "갈색",
      "audioKey": "ch0099"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "D",
      "indoor": "S"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/20019.webp"
  },
  {
    "id": 20020,
    "name": "히마리",
    "aliases": [
      "히마리",
      "히마리",
      "히마리"
    ],
    "hints": {
      "versions": 2,
      "height": "16X",
      "birthMonth": "12월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "HG",
      "school": "밀레니엄",
      "role": "서포터",
      "squadType": "스페셜",
      "attackType": "관통",
      "defenseType": "경장갑",
      "range": "1000",
      "hairColor": "흰색",
      "audioKey": "ch0159"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "B",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/20020.webp"
  },
  {
    "id": 20021,
    "name": "하나에(크리스마스)",
    "aliases": [
      "하나에(크리스마스)",
      "하나에(크리스마스)",
      "하나에"
    ],
    "hints": {
      "versions": 2,
      "height": "15X",
      "birthMonth": "5월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "AR",
      "school": "트리니티",
      "role": "힐러",
      "squadType": "스페셜",
      "attackType": "신비",
      "defenseType": "특수장갑",
      "range": "1000",
      "hairColor": "보라색",
      "audioKey": "ch0195"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "D",
      "indoor": "S"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/20021.webp"
  },
  {
    "id": 20022,
    "name": "후우카(새해)",
    "aliases": [
      "후우카(새해)",
      "후우카(새해)",
      "후우카"
    ],
    "hints": {
      "versions": 2,
      "height": "15X",
      "birthMonth": "4월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "SMG",
      "school": "게헨나",
      "role": "서포터",
      "squadType": "스페셜",
      "attackType": "관통",
      "defenseType": "특수장갑",
      "range": "1000",
      "hairColor": "검은색",
      "audioKey": "ch0177"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "D",
      "indoor": "S"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/20022.webp"
  },
  {
    "id": 20023,
    "name": "칸나",
    "aliases": [
      "칸나",
      "칸나",
      "칸나"
    ],
    "hints": {
      "versions": 2,
      "height": "16X",
      "birthMonth": "9월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "HG",
      "school": "발키리",
      "role": "딜러",
      "squadType": "스페셜",
      "attackType": "관통",
      "defenseType": "중장갑",
      "range": "1000",
      "hairColor": "노란색",
      "audioKey": "ch0170"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "D",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/20023.webp"
  },
  {
    "id": 20024,
    "name": "나기사",
    "aliases": [
      "나기사",
      "나기사",
      "나기사"
    ],
    "hints": {
      "versions": 2,
      "height": "16X",
      "birthMonth": "7월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "HG",
      "school": "트리니티",
      "role": "딜러",
      "squadType": "스페셜",
      "attackType": "폭발",
      "defenseType": "중장갑",
      "range": "1000",
      "hairColor": "갈색",
      "audioKey": "ch0068"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "B",
      "indoor": "S"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/20024.webp"
  },
  {
    "id": 20025,
    "name": "하루카(새해)",
    "aliases": [
      "하루카(새해)",
      "하루카(새해)",
      "하루카"
    ],
    "hints": {
      "versions": 3,
      "height": "15X",
      "birthMonth": "5월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "SG",
      "school": "게헨나",
      "role": "서포터",
      "squadType": "스페셜",
      "attackType": "폭발",
      "defenseType": "경장갑",
      "range": "1000",
      "hairColor": "보라색",
      "audioKey": "ch0087"
    },
    "terrain": {
      "urban": "C",
      "outdoor": "S",
      "indoor": "C"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/20025.webp"
  },
  {
    "id": 20026,
    "name": "미노리",
    "aliases": [
      "미노리",
      "미노리",
      "미노리"
    ],
    "hints": {
      "versions": 1,
      "height": "15X",
      "birthMonth": "7월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "AR",
      "school": "붉은겨울",
      "role": "딜러",
      "squadType": "스페셜",
      "attackType": "폭발",
      "defenseType": "특수장갑",
      "range": "1000",
      "hairColor": "회색",
      "audioKey": "ch0214"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "B",
      "indoor": "S"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/20026.webp"
  },
  {
    "id": 20027,
    "name": "시로코(수영복)",
    "aliases": [
      "시로코(수영복)",
      "시로코(수영복)",
      "시로코"
    ],
    "hints": {
      "versions": 3,
      "height": "15X",
      "birthMonth": "5월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "AR",
      "school": "아비도스",
      "role": "딜러",
      "squadType": "스페셜",
      "attackType": "신비",
      "defenseType": "경장갑",
      "range": "1000",
      "hairColor": "회색",
      "audioKey": "ch0188"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "S",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/20027.webp"
  },
  {
    "id": 20028,
    "name": "히나타(수영복)",
    "aliases": [
      "히나타(수영복)",
      "히나타(수영복)",
      "히나타"
    ],
    "hints": {
      "versions": 2,
      "height": "16X",
      "birthMonth": "5월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "HG",
      "school": "트리니티",
      "role": "딜러",
      "squadType": "스페셜",
      "attackType": "폭발",
      "defenseType": "경장갑",
      "range": "1000",
      "hairColor": "검은색",
      "audioKey": "ch0210"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "S",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/20028.webp"
  },
  {
    "id": 20029,
    "name": "미모리(수영복)",
    "aliases": [
      "미모리(수영복)",
      "미모리(수영복)",
      "미모리"
    ],
    "hints": {
      "versions": 2,
      "height": "15X",
      "birthMonth": "3월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "HG",
      "school": "백귀야행",
      "role": "서포터",
      "squadType": "스페셜",
      "attackType": "신비",
      "defenseType": "특수장갑",
      "range": "1000",
      "hairColor": "분홍색",
      "audioKey": "ch0183"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "D",
      "indoor": "S"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/20029.webp"
  },
  {
    "id": 20030,
    "name": "하루나(체육복)",
    "aliases": [
      "하루나(체육복)",
      "하루나(체육복)",
      "하루나"
    ],
    "hints": {
      "versions": 3,
      "height": "16X",
      "birthMonth": "3월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "SR",
      "school": "게헨나",
      "role": "힐러",
      "squadType": "스페셜",
      "attackType": "진동",
      "defenseType": "중장갑",
      "range": "1000",
      "hairColor": "흰색",
      "audioKey": "ch0193"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "B",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/20030.webp"
  },
  {
    "id": 20031,
    "name": "시구레(온천)",
    "aliases": [
      "시구레(온천)",
      "시구레(온천)",
      "시구레"
    ],
    "hints": {
      "versions": 2,
      "height": "15X",
      "birthMonth": "1월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "GL",
      "school": "붉은겨울",
      "role": "힐러",
      "squadType": "스페셜",
      "attackType": "관통",
      "defenseType": "특수장갑",
      "range": "1000",
      "hairColor": "하늘색",
      "audioKey": "ch0123"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "D",
      "indoor": "S"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/20031.webp"
  },
  {
    "id": 20032,
    "name": "에이미(수영복)",
    "aliases": [
      "에이미(수영복)",
      "에이미(수영복)",
      "에이미"
    ],
    "hints": {
      "versions": 3,
      "height": "16X",
      "birthMonth": "5월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "SG",
      "school": "밀레니엄",
      "role": "서포터",
      "squadType": "스페셜",
      "attackType": "신비",
      "defenseType": "특수장갑",
      "range": "1000",
      "hairColor": "분홍색",
      "audioKey": "ch0219"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "S",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/20032.webp"
  },
  {
    "id": 20033,
    "name": "마코토",
    "aliases": [
      "마코토",
      "마코토",
      "마코토"
    ],
    "hints": {
      "versions": 2,
      "height": "16X",
      "birthMonth": "3월",
      "age": "18세",
      "grade": "3학년",
      "weapon": "SR",
      "school": "게헨나",
      "role": "딜러",
      "squadType": "스페셜",
      "attackType": "관통",
      "defenseType": "특수장갑",
      "range": "1000",
      "hairColor": "회색",
      "audioKey": "ch0079"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "B",
      "indoor": "S"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/20033.webp"
  },
  {
    "id": 20034,
    "name": "아카리(새해)",
    "aliases": [
      "아카리(새해)",
      "아카리(새해)",
      "아카리"
    ],
    "hints": {
      "versions": 2,
      "height": "16X",
      "birthMonth": "12월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "AR",
      "school": "게헨나",
      "role": "T.S",
      "squadType": "스페셜",
      "attackType": "신비",
      "defenseType": "특수장갑",
      "range": "1000",
      "hairColor": "노란색",
      "audioKey": "ch0196"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "S",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/20034.webp"
  },
  {
    "id": 20035,
    "name": "츠바키(가이드)",
    "aliases": [
      "츠바키(가이드)",
      "츠바키(가이드)",
      "츠바키"
    ],
    "hints": {
      "versions": 2,
      "height": "16X",
      "birthMonth": "2월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "SMG",
      "school": "백귀야행",
      "role": "서포터",
      "squadType": "스페셜",
      "attackType": "관통",
      "defenseType": "중장갑",
      "range": "1000",
      "hairColor": "검은색",
      "audioKey": "ch0255"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "S",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/20035.webp"
  },
  {
    "id": 20036,
    "name": "세리카(수영복)",
    "aliases": [
      "세리카(수영복)",
      "세리카(수영복)",
      "세리카"
    ],
    "hints": {
      "versions": 3,
      "height": "15X",
      "birthMonth": "6월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "AR",
      "school": "아비도스",
      "role": "딜러",
      "squadType": "스페셜",
      "attackType": "신비",
      "defenseType": "중장갑",
      "range": "1000",
      "hairColor": "검은색",
      "audioKey": "ch0189"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "B",
      "indoor": "S"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/20036.webp"
  },
  {
    "id": 20037,
    "name": "후부키(수영복)",
    "aliases": [
      "후부키(수영복)",
      "후부키(수영복)",
      "후부키"
    ],
    "hints": {
      "versions": 2,
      "height": "14X",
      "birthMonth": "10월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "SR",
      "school": "발키리",
      "role": "딜러",
      "squadType": "스페셜",
      "attackType": "폭발",
      "defenseType": "중장갑",
      "range": "1000",
      "hairColor": "파란색",
      "audioKey": "ch0261"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "S",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/20037.webp"
  },
  {
    "id": 20038,
    "name": "토모에(치파오)",
    "aliases": [
      "토모에(치파오)",
      "토모에(치파오)",
      "토모에"
    ],
    "hints": {
      "versions": 2,
      "height": "16X",
      "birthMonth": "11월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "SR",
      "school": "붉은겨울",
      "role": "서포터",
      "squadType": "스페셜",
      "attackType": "신비",
      "defenseType": "특수장갑",
      "range": "1000",
      "hairColor": "분홍색",
      "audioKey": "ch0271"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "B",
      "indoor": "S"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/20038.webp"
  },
  {
    "id": 20039,
    "name": "키사키",
    "aliases": [
      "키사키",
      "키사키",
      "키사키"
    ],
    "hints": {
      "versions": 2,
      "height": "14X",
      "birthMonth": "2월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "SMG",
      "school": "산해경",
      "role": "서포터",
      "squadType": "스페셜",
      "attackType": "진동",
      "defenseType": "탄력장갑",
      "range": "1000",
      "hairColor": "검은색",
      "audioKey": "ch0139"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "D",
      "indoor": "S"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/20039.webp"
  },
  {
    "id": 20040,
    "name": "사츠키",
    "aliases": [
      "사츠키",
      "사츠키",
      "사츠키"
    ],
    "hints": {
      "versions": 2,
      "height": "17X",
      "birthMonth": "4월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "HG",
      "school": "게헨나",
      "role": "딜러",
      "squadType": "스페셜",
      "attackType": "폭발",
      "defenseType": "중장갑",
      "range": "1000",
      "hairColor": "분홍색",
      "audioKey": "ch0080"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "S",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/20040.webp"
  },
  {
    "id": 20041,
    "name": "리오",
    "aliases": [
      "리오",
      "리오",
      "리오"
    ],
    "hints": {
      "versions": 2,
      "height": "17X",
      "birthMonth": "6월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "HG",
      "school": "밀레니엄",
      "role": "서포터",
      "squadType": "스페셜",
      "attackType": "신비",
      "defenseType": "탄력장갑",
      "range": "1000",
      "hairColor": "검은색",
      "audioKey": "ch0158"
    },
    "terrain": {
      "urban": "A",
      "outdoor": "D",
      "indoor": "S"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/20041.webp"
  },
  {
    "id": 20042,
    "name": "마키(캠핑)",
    "aliases": [
      "마키(캠핑)",
      "마키(캠핑)",
      "마키"
    ],
    "hints": {
      "versions": 2,
      "height": "14X",
      "birthMonth": "8월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "MG",
      "school": "밀레니엄",
      "role": "딜러",
      "squadType": "스페셜",
      "attackType": "폭발",
      "defenseType": "중장갑",
      "range": "1000",
      "hairColor": "빨간색",
      "audioKey": "ch0235"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "S",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/20042.webp"
  },
  {
    "id": 20043,
    "name": "이즈미(새해)",
    "aliases": [
      "이즈미(새해)",
      "이즈미(새해)",
      "이즈미"
    ],
    "hints": {
      "versions": 3,
      "height": "16X",
      "birthMonth": "5월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "MG",
      "school": "게헨나",
      "role": "서포터",
      "squadType": "스페셜",
      "attackType": "폭발",
      "defenseType": "경장갑",
      "range": "1000",
      "hairColor": "회색",
      "audioKey": "ch0197"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "D",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/20043.webp"
  },
  {
    "id": 20044,
    "name": "스미레(아르바이트)",
    "aliases": [
      "스미레(아르바이트)",
      "스미레(아르바이트)",
      "스미레"
    ],
    "hints": {
      "versions": 2,
      "height": "16X",
      "birthMonth": "8월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "SG",
      "school": "밀레니엄",
      "role": "서포터",
      "squadType": "스페셜",
      "attackType": "관통",
      "defenseType": "경장갑",
      "range": "1000",
      "hairColor": "검은색",
      "audioKey": "ch0287"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "S",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/20044.webp"
  },
  {
    "id": 20045,
    "name": "피나(가이드)",
    "aliases": [
      "피나(가이드)",
      "피나(가이드)",
      "피나"
    ],
    "hints": {
      "versions": 2,
      "height": "16X",
      "birthMonth": "11월",
      "age": "17세",
      "grade": "1학년",
      "weapon": "MG",
      "school": "백귀야행",
      "role": "딜러",
      "squadType": "스페셜",
      "attackType": "폭발",
      "defenseType": "중장갑",
      "range": "1000",
      "hairColor": "노란색",
      "audioKey": "ch0257"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "S",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/20045.webp"
  },
  {
    "id": 20046,
    "name": "니야",
    "aliases": [
      "니야",
      "니야",
      "니야"
    ],
    "hints": {
      "versions": 1,
      "height": "16X",
      "birthMonth": "1월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "HG",
      "school": "백귀야행",
      "role": "딜러",
      "squadType": "스페셜",
      "attackType": "진동",
      "defenseType": "중장갑",
      "range": "1000",
      "hairColor": "검은색",
      "audioKey": "ch0109"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "D",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/20046.webp"
  },
  {
    "id": 20047,
    "name": "키쿄(수영복)",
    "aliases": [
      "키쿄(수영복)",
      "키쿄(수영복)",
      "키쿄"
    ],
    "hints": {
      "versions": 2,
      "height": "16X",
      "birthMonth": "8월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "SR",
      "school": "백귀야행",
      "role": "서포터",
      "squadType": "스페셜",
      "attackType": "진동",
      "defenseType": "중장갑",
      "range": "1000",
      "hairColor": "검은색",
      "audioKey": "ch0300"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "B",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/20047.webp"
  },
  {
    "id": 20048,
    "name": "나기사(수영복)",
    "aliases": [
      "나기사(수영복)",
      "나기사(수영복)",
      "나기사"
    ],
    "hints": {
      "versions": 2,
      "height": "16X",
      "birthMonth": "7월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "HG",
      "school": "트리니티",
      "role": "서포터",
      "squadType": "스페셜",
      "attackType": "진동",
      "defenseType": "탄력장갑",
      "range": "1000",
      "hairColor": "갈색",
      "audioKey": "ch0293"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "A",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/20048.webp"
  },
  {
    "id": 20049,
    "name": "미사키(수영복)",
    "aliases": [
      "미사키(수영복)",
      "미사키(수영복)",
      "미사키"
    ],
    "hints": {
      "versions": 2,
      "height": "16X",
      "birthMonth": "1월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "RL",
      "school": "아리우스",
      "role": "딜러",
      "squadType": "스페셜",
      "attackType": "폭발",
      "defenseType": "특수장갑",
      "range": "1000",
      "hairColor": "검은색",
      "audioKey": "ch0268"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "B",
      "indoor": "S"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/20049.webp"
  },
  {
    "id": 20050,
    "name": "리츠",
    "aliases": [
      "리츠",
      "리츠",
      "리츠"
    ],
    "hints": {
      "versions": 1,
      "height": "14X",
      "birthMonth": "3월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "SMG",
      "school": "WildHunt",
      "role": "서포터",
      "squadType": "스페셜",
      "attackType": "신비",
      "defenseType": "특수장갑",
      "range": "1000",
      "hairColor": "초록색",
      "audioKey": "ch0319"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "D",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/20050.webp"
  },
  {
    "id": 20051,
    "name": "레이사(매지컬)",
    "aliases": [
      "레이사(매지컬)",
      "레이사(매지컬)",
      "레이사"
    ],
    "hints": {
      "versions": 2,
      "height": "15X",
      "birthMonth": "5월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "SG",
      "school": "트리니티",
      "role": "힐러",
      "squadType": "스페셜",
      "attackType": "진동",
      "defenseType": "특수장갑",
      "range": "1000",
      "hairColor": "보라색",
      "audioKey": "ch0326"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "D",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/20051.webp"
  },
  {
    "id": 20052,
    "name": "야쿠모",
    "aliases": [
      "야쿠모",
      "야쿠모",
      "야쿠모"
    ],
    "hints": {
      "versions": 1,
      "height": "14X",
      "birthMonth": "5월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "HG",
      "school": "붉은겨울",
      "role": "서포터",
      "squadType": "스페셜",
      "attackType": "폭발",
      "defenseType": "경장갑",
      "range": "1000",
      "hairColor": "초록색",
      "audioKey": "ch0228"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "B",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/20052.webp"
  },
  {
    "id": 20053,
    "name": "미치루(드레스)",
    "aliases": [
      "미치루(드레스)",
      "미치루(드레스)",
      "미치루"
    ],
    "hints": {
      "versions": 2,
      "height": "15X",
      "birthMonth": "2월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "SG",
      "school": "백귀야행",
      "role": "힐러",
      "squadType": "스페셜",
      "attackType": "폭발",
      "defenseType": "경장갑",
      "range": "1000",
      "hairColor": "회색",
      "audioKey": "ch0296"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "B",
      "indoor": "S"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/20053.webp"
  },
  {
    "id": 20054,
    "name": "히마리(무장)",
    "aliases": [
      "히마리(무장)",
      "히마리(무장)",
      "히마리"
    ],
    "hints": {
      "versions": 2,
      "height": "16X",
      "birthMonth": "12월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "HG",
      "school": "밀레니엄",
      "role": "T.S",
      "squadType": "스페셜",
      "attackType": "관통",
      "defenseType": "탄력장갑",
      "range": "1000",
      "hairColor": "흰색",
      "audioKey": "ch0332"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "D",
      "indoor": "S"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/20054.webp"
  },
  {
    "id": 20055,
    "name": "유즈(무장)",
    "aliases": [
      "유즈(무장)",
      "유즈(무장)",
      "유즈"
    ],
    "hints": {
      "versions": 3,
      "height": "15X",
      "birthMonth": "8월",
      "age": "16세",
      "grade": "1학년",
      "weapon": "GL",
      "school": "밀레니엄",
      "role": "서포터",
      "squadType": "스페셜",
      "attackType": "신비",
      "defenseType": "특수장갑",
      "range": "1000",
      "hairColor": "빨간색",
      "audioKey": "ch0336"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "D",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/20055.webp"
  },
  {
    "id": 20056,
    "name": "코유키(파자마)",
    "aliases": [
      "코유키(파자마)",
      "코유키(파자마)",
      "코유키"
    ],
    "hints": {
      "versions": 2,
      "height": "14X",
      "birthMonth": "2월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "MG",
      "school": "밀레니엄",
      "role": "서포터",
      "squadType": "스페셜",
      "attackType": "신비",
      "defenseType": "경장갑",
      "range": "1000",
      "hairColor": "분홍색",
      "audioKey": "ch0310"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "D",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/20056.webp"
  },
  {
    "id": 20057,
    "name": "아카네(교복)",
    "aliases": [
      "아카네(교복)",
      "아카네(교복)",
      "아카네"
    ],
    "hints": {
      "versions": 3,
      "height": "16X",
      "birthMonth": "4월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "HG",
      "school": "밀레니엄",
      "role": "딜러",
      "squadType": "스페셜",
      "attackType": "폭발",
      "defenseType": "경장갑",
      "range": "1000",
      "hairColor": "갈색",
      "audioKey": "ch0307"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "B",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/20057.webp"
  },
  {
    "id": 20058,
    "name": "에리카",
    "aliases": [
      "에리카",
      "에리카",
      "에리카"
    ],
    "hints": {
      "versions": 1,
      "height": "16X",
      "birthMonth": "2월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "SG",
      "school": "게헨나",
      "role": "서포터",
      "squadType": "스페셜",
      "attackType": "진동",
      "defenseType": "경장갑",
      "range": "1000",
      "hairColor": "흰색",
      "audioKey": "ch0076"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "B",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/20058.webp"
  },
  {
    "id": 20059,
    "name": "무츠키(드레스)",
    "aliases": [
      "무츠키(드레스)",
      "무츠키(드레스)",
      "무츠키"
    ],
    "hints": {
      "versions": 3,
      "height": "14X",
      "birthMonth": "7월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "MG",
      "school": "게헨나",
      "role": "딜러",
      "squadType": "스페셜",
      "attackType": "신비",
      "defenseType": "중장갑",
      "range": "1000",
      "hairColor": "흰색",
      "audioKey": "ch0246"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "S",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/20059.webp"
  },
  {
    "id": 20060,
    "name": "이부키(수영복)",
    "aliases": [
      "이부키(수영복)",
      "이부키(수영복)",
      "이부키"
    ],
    "hints": {
      "versions": 2,
      "height": "12X",
      "birthMonth": "4월",
      "age": "11세",
      "grade": "1학년",
      "weapon": "AR",
      "school": "게헨나",
      "role": "서포터",
      "squadType": "스페셜",
      "attackType": "폭발",
      "defenseType": "특수장갑",
      "range": "1000",
      "hairColor": "노란색",
      "audioKey": "ch0347"
    },
    "terrain": {
      "urban": "S",
      "outdoor": "A",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/20060.webp"
  },
  {
    "id": 23000,
    "name": "아이리",
    "aliases": [
      "아이리",
      "아이리",
      "아이리"
    ],
    "hints": {
      "versions": 2,
      "height": "16X",
      "birthMonth": "1월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "SMG",
      "school": "트리니티",
      "role": "서포터",
      "squadType": "스페셜",
      "attackType": "폭발",
      "defenseType": "경장갑",
      "range": "1000",
      "hairColor": "갈색",
      "audioKey": "airi"
    },
    "terrain": {
      "urban": "A",
      "outdoor": "D",
      "indoor": "A"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/23000.webp"
  },
  {
    "id": 23001,
    "name": "후우카",
    "aliases": [
      "후우카",
      "후우카",
      "후우카"
    ],
    "hints": {
      "versions": 2,
      "height": "15X",
      "birthMonth": "4월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "SMG",
      "school": "게헨나",
      "role": "힐러",
      "squadType": "스페셜",
      "attackType": "폭발",
      "defenseType": "중장갑",
      "range": "1000",
      "hairColor": "검은색",
      "audioKey": "fuuka"
    },
    "terrain": {
      "urban": "A",
      "outdoor": "A",
      "indoor": "D"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/23001.webp"
  },
  {
    "id": 23002,
    "name": "하나에",
    "aliases": [
      "하나에",
      "하나에",
      "하나에"
    ],
    "hints": {
      "versions": 2,
      "height": "15X",
      "birthMonth": "5월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "AR",
      "school": "트리니티",
      "role": "힐러",
      "squadType": "스페셜",
      "attackType": "폭발",
      "defenseType": "중장갑",
      "range": "1000",
      "hairColor": "보라색",
      "audioKey": "hanae"
    },
    "terrain": {
      "urban": "A",
      "outdoor": "D",
      "indoor": "A"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/23002.webp"
  },
  {
    "id": 23003,
    "name": "하레",
    "aliases": [
      "하레",
      "하레",
      "하레"
    ],
    "hints": {
      "versions": 2,
      "height": "15X",
      "birthMonth": "4월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "AR",
      "school": "밀레니엄",
      "role": "서포터",
      "squadType": "스페셜",
      "attackType": "폭발",
      "defenseType": "경장갑",
      "range": "1000",
      "hairColor": "흰색",
      "audioKey": "hare"
    },
    "terrain": {
      "urban": "A",
      "outdoor": "B",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/23003.webp"
  },
  {
    "id": 23004,
    "name": "우타하",
    "aliases": [
      "우타하",
      "우타하",
      "우타하"
    ],
    "hints": {
      "versions": 2,
      "height": "16X",
      "birthMonth": "11월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "SMG",
      "school": "밀레니엄",
      "role": "딜러",
      "squadType": "스페셜",
      "attackType": "관통",
      "defenseType": "중장갑",
      "range": "1000",
      "hairColor": "보라색",
      "audioKey": "utaha"
    },
    "terrain": {
      "urban": "A",
      "outdoor": "D",
      "indoor": "A"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/23004.webp"
  },
  {
    "id": 23005,
    "name": "아야네",
    "aliases": [
      "아야네",
      "아야네",
      "아야네"
    ],
    "hints": {
      "versions": 2,
      "height": "15X",
      "birthMonth": "11월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "HG",
      "school": "아비도스",
      "role": "힐러",
      "squadType": "스페셜",
      "attackType": "관통",
      "defenseType": "경장갑",
      "range": "1000",
      "hairColor": "검은색",
      "audioKey": "ayane"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "A",
      "indoor": "A"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/23005.webp"
  },
  {
    "id": 23006,
    "name": "시즈코",
    "aliases": [
      "시즈코",
      "시즈코",
      "시즈코"
    ],
    "hints": {
      "versions": 2,
      "height": "15X",
      "birthMonth": "7월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "SG",
      "school": "백귀야행",
      "role": "서포터",
      "squadType": "스페셜",
      "attackType": "신비",
      "defenseType": "특수장갑",
      "range": "1000",
      "hairColor": "갈색",
      "audioKey": "shizuko"
    },
    "terrain": {
      "urban": "A",
      "outdoor": "A",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/23006.webp"
  },
  {
    "id": 23007,
    "name": "하나코",
    "aliases": [
      "하나코",
      "하나코",
      "하나코"
    ],
    "hints": {
      "versions": 2,
      "height": "16X",
      "birthMonth": "1월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "AR",
      "school": "트리니티",
      "role": "힐러",
      "squadType": "스페셜",
      "attackType": "관통",
      "defenseType": "특수장갑",
      "range": "1000",
      "hairColor": "분홍색",
      "audioKey": "ch0055"
    },
    "terrain": {
      "urban": "A",
      "outdoor": "D",
      "indoor": "A"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/23007.webp"
  },
  {
    "id": 23008,
    "name": "마리",
    "aliases": [
      "마리",
      "마리",
      "마리"
    ],
    "hints": {
      "versions": 3,
      "height": "15X",
      "birthMonth": "9월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "HG",
      "school": "트리니티",
      "role": "서포터",
      "squadType": "스페셜",
      "attackType": "신비",
      "defenseType": "특수장갑",
      "range": "1000",
      "hairColor": "주황색",
      "audioKey": "ch0072"
    },
    "terrain": {
      "urban": "D",
      "outdoor": "A",
      "indoor": "A"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/23008.webp"
  },
  {
    "id": 26000,
    "name": "치나츠",
    "aliases": [
      "치나츠",
      "치나츠",
      "치나츠"
    ],
    "hints": {
      "versions": 2,
      "height": "15X",
      "birthMonth": "8월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "HG",
      "school": "게헨나",
      "role": "힐러",
      "squadType": "스페셜",
      "attackType": "관통",
      "defenseType": "경장갑",
      "range": "1000",
      "hairColor": "갈색",
      "audioKey": "chinatsu"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "B",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/26000.webp"
  },
  {
    "id": 26001,
    "name": "코타마",
    "aliases": [
      "코타마",
      "코타마",
      "코타마"
    ],
    "hints": {
      "versions": 2,
      "height": "15X",
      "birthMonth": "1월",
      "age": "17세",
      "grade": "3학년",
      "weapon": "HG",
      "school": "밀레니엄",
      "role": "서포터",
      "squadType": "스페셜",
      "attackType": "폭발",
      "defenseType": "경장갑",
      "range": "1000",
      "hairColor": "노란색",
      "audioKey": "kotama"
    },
    "terrain": {
      "urban": "A",
      "outdoor": "C",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/26001.webp"
  },
  {
    "id": 26002,
    "name": "주리",
    "aliases": [
      "주리",
      "주리",
      "주리"
    ],
    "hints": {
      "versions": 2,
      "height": "17X",
      "birthMonth": "10월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "SG",
      "school": "게헨나",
      "role": "서포터",
      "squadType": "스페셜",
      "attackType": "폭발",
      "defenseType": "경장갑",
      "range": "1000",
      "hairColor": "분홍색",
      "audioKey": "juri"
    },
    "terrain": {
      "urban": "C",
      "outdoor": "B",
      "indoor": "A"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/26002.webp"
  },
  {
    "id": 26003,
    "name": "세리나",
    "aliases": [
      "세리나",
      "세리나",
      "세리나"
    ],
    "hints": {
      "versions": 2,
      "height": "15X",
      "birthMonth": "1월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "AR",
      "school": "트리니티",
      "role": "힐러",
      "squadType": "스페셜",
      "attackType": "신비",
      "defenseType": "경장갑",
      "range": "1000",
      "hairColor": "분홍색",
      "audioKey": "serina"
    },
    "terrain": {
      "urban": "A",
      "outdoor": "C",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/26003.webp"
  },
  {
    "id": 26004,
    "name": "시미코",
    "aliases": [
      "시미코",
      "시미코",
      "시미코"
    ],
    "hints": {
      "versions": 1,
      "height": "15X",
      "birthMonth": "11월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "AR",
      "school": "트리니티",
      "role": "서포터",
      "squadType": "스페셜",
      "attackType": "폭발",
      "defenseType": "경장갑",
      "range": "1000",
      "hairColor": "주황색",
      "audioKey": "shimiko"
    },
    "terrain": {
      "urban": "C",
      "outdoor": "A",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/26004.webp"
  },
  {
    "id": 26005,
    "name": "요시미",
    "aliases": [
      "요시미",
      "요시미",
      "요시미"
    ],
    "hints": {
      "versions": 2,
      "height": "14X",
      "birthMonth": "8월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "AR",
      "school": "트리니티",
      "role": "딜러",
      "squadType": "스페셜",
      "attackType": "관통",
      "defenseType": "중장갑",
      "range": "1000",
      "hairColor": "노란색",
      "audioKey": "yoshimi"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "B",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/26005.webp"
  },
  {
    "id": 26006,
    "name": "노도카",
    "aliases": [
      "노도카",
      "노도카",
      "노도카"
    ],
    "hints": {
      "versions": 2,
      "height": "14X",
      "birthMonth": "2월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "SMG",
      "school": "붉은겨울",
      "role": "서포터",
      "squadType": "스페셜",
      "attackType": "폭발",
      "defenseType": "중장갑",
      "range": "1000",
      "hairColor": "분홍색",
      "audioKey": "nodoka"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "B",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/26006.webp"
  },
  {
    "id": 26007,
    "name": "아야네(수영복)",
    "aliases": [
      "아야네(수영복)",
      "아야네(수영복)",
      "아야네"
    ],
    "hints": {
      "versions": 2,
      "height": "15X",
      "birthMonth": "11월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "HG",
      "school": "아비도스",
      "role": "T.S",
      "squadType": "스페셜",
      "attackType": "관통",
      "defenseType": "경장갑",
      "range": "1000",
      "hairColor": "검은색",
      "audioKey": "ch0176"
    },
    "terrain": {
      "urban": "C",
      "outdoor": "A",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/26007.webp"
  },
  {
    "id": 26008,
    "name": "시즈코(수영복)",
    "aliases": [
      "시즈코(수영복)",
      "시즈코(수영복)",
      "시즈코"
    ],
    "hints": {
      "versions": 2,
      "height": "15X",
      "birthMonth": "7월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "SG",
      "school": "백귀야행",
      "role": "서포터",
      "squadType": "스페셜",
      "attackType": "신비",
      "defenseType": "중장갑",
      "range": "1000",
      "hairColor": "갈색",
      "audioKey": "ch0180"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "B",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/26008.webp"
  },
  {
    "id": 26009,
    "name": "유즈(메이드)",
    "aliases": [
      "유즈(메이드)",
      "유즈(메이드)",
      "유즈"
    ],
    "hints": {
      "versions": 3,
      "height": "15X",
      "birthMonth": "8월",
      "age": "16세",
      "grade": "1학년",
      "weapon": "GL",
      "school": "밀레니엄",
      "role": "딜러",
      "squadType": "스페셜",
      "attackType": "폭발",
      "defenseType": "탄력장갑",
      "range": "1000",
      "hairColor": "빨간색",
      "audioKey": "ch0203"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "C",
      "indoor": "A"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/26009.webp"
  },
  {
    "id": 26010,
    "name": "미유(수영복)",
    "aliases": [
      "미유(수영복)",
      "미유(수영복)",
      "미유"
    ],
    "hints": {
      "versions": 2,
      "height": "14X",
      "birthMonth": "7월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "SR",
      "school": "SRT",
      "role": "딜러",
      "squadType": "스페셜",
      "attackType": "폭발",
      "defenseType": "경장갑",
      "range": "1000",
      "hairColor": "검은색",
      "audioKey": "ch0218"
    },
    "terrain": {
      "urban": "C",
      "outdoor": "B",
      "indoor": "A"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/26010.webp"
  },
  {
    "id": 26011,
    "name": "사텐 루이코",
    "aliases": [
      "사텐 루이코",
      "사텐 루이코",
      "사텐 루이코"
    ],
    "hints": {
      "versions": 1,
      "height": "16X",
      "birthMonth": "-월",
      "age": "12세",
      "grade": "1학년",
      "weapon": "SMG",
      "school": "사쿠가와",
      "role": "딜러",
      "squadType": "스페셜",
      "attackType": "관통",
      "defenseType": "특수장갑",
      "range": "1500",
      "hairColor": "검은색",
      "audioKey": "ch9996"
    },
    "terrain": {
      "urban": "C",
      "outdoor": "A",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/26011.webp"
  },
  {
    "id": 26012,
    "name": "키리노(수영복)",
    "aliases": [
      "키리노(수영복)",
      "키리노(수영복)",
      "키리노"
    ],
    "hints": {
      "versions": 2,
      "height": "16X",
      "birthMonth": "10월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "HG",
      "school": "발키리",
      "role": "서포터",
      "squadType": "스페셜",
      "attackType": "신비",
      "defenseType": "중장갑",
      "range": "1000",
      "hairColor": "흰색",
      "audioKey": "ch0262"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "B",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/26012.webp"
  },
  {
    "id": 26013,
    "name": "아츠코(수영복)",
    "aliases": [
      "아츠코(수영복)",
      "아츠코(수영복)",
      "아츠코"
    ],
    "hints": {
      "versions": 2,
      "height": "15X",
      "birthMonth": "1월",
      "age": "15세",
      "grade": "1학년",
      "weapon": "SMG",
      "school": "아리우스",
      "role": "힐러",
      "squadType": "스페셜",
      "attackType": "진동",
      "defenseType": "특수장갑",
      "range": "1000",
      "hairColor": "보라색",
      "audioKey": "ch0267"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "B",
      "indoor": "B"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/26013.webp"
  },
  {
    "id": 26014,
    "name": "카린(교복)",
    "aliases": [
      "카린(교복)",
      "카린(교복)",
      "카린"
    ],
    "hints": {
      "versions": 3,
      "height": "17X",
      "birthMonth": "2월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "SR",
      "school": "밀레니엄",
      "role": "딜러",
      "squadType": "스페셜",
      "attackType": "폭발",
      "defenseType": "중장갑",
      "range": "1000",
      "hairColor": "검은색",
      "audioKey": "ch0282"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "A",
      "indoor": "C"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/26014.webp"
  },
  {
    "id": 26015,
    "name": "이치카(수영복)",
    "aliases": [
      "이치카(수영복)",
      "이치카(수영복)",
      "이치카"
    ],
    "hints": {
      "versions": 2,
      "height": "16X",
      "birthMonth": "11월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "AR",
      "school": "트리니티",
      "role": "서포터",
      "squadType": "스페셜",
      "attackType": "진동",
      "defenseType": "특수장갑",
      "range": "1000",
      "hairColor": "검은색",
      "audioKey": "ch0292"
    },
    "terrain": {
      "urban": "A",
      "outdoor": "B",
      "indoor": "C"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/26015.webp"
  },
  {
    "id": 26016,
    "name": "치아키(수영복)",
    "aliases": [
      "치아키(수영복)",
      "치아키(수영복)",
      "치아키"
    ],
    "hints": {
      "versions": 2,
      "height": "16X",
      "birthMonth": "9월",
      "age": "16세",
      "grade": "2학년",
      "weapon": "AR",
      "school": "게헨나",
      "role": "딜러",
      "squadType": "스페셜",
      "attackType": "관통",
      "defenseType": "중장갑",
      "range": "1000",
      "hairColor": "검은색",
      "audioKey": "ch0348"
    },
    "terrain": {
      "urban": "B",
      "outdoor": "A",
      "indoor": "C"
    },
    "imageUrl": "https://schaledb.com/images/student/portrait/26016.webp"
  }
];