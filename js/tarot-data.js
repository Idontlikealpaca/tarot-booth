// 타로 카드 데이터 (메이저 아르카나 22장)
const tarotCards = [
    {
        id: 0,
        name: "The Fool",
        korean: "광대",
        color: "#FFD700",
        meaning: "새로운 시작과 모험",
        detail: "순수한 마음으로 새로운 여정을 시작하세요. 두려움 없이 앞으로 나아가면 놀라운 기회가 기다리고 있습니다."
    },
    {
        id: 1,
        name: "The Magician",
        korean: "마법사",
        color: "#FF6B6B",
        meaning: "창의력과 잠재력",
        detail: "당신 안에 숨겨진 재능을 발휘할 때입니다. 자신감을 가지고 목표를 향해 나아가세요."
    },
    {
        id: 2,
        name: "The High Priestess",
        korean: "여사제",
        color: "#4ECDC4",
        meaning: "직관과 신비",
        detail: "내면의 목소리에 귀 기울이세요. 당신의 직관이 올바른 방향을 알려줄 것입니다."
    },
    {
        id: 3,
        name: "The Empress",
        korean: "여황제",
        color: "#95E1D3",
        meaning: "풍요와 사랑",
        detail: "사랑과 풍요가 당신을 둘러싸고 있습니다. 따뜻한 마음으로 주변을 돌보세요."
    },
    {
        id: 4,
        name: "The Emperor",
        korean: "황제",
        color: "#E74C3C",
        meaning: "리더십과 안정",
        detail: "강한 의지로 목표를 이루어낼 수 있습니다. 자신감 있게 결정하세요."
    },
    {
        id: 5,
        name: "The Hierophant",
        korean: "교황",
        color: "#9B59B6",
        meaning: "지혜와 전통",
        detail: "경험에서 배우고 지혜를 나누세요. 좋은 조언자를 만날 수 있습니다."
    },
    {
        id: 6,
        name: "The Lovers",
        korean: "연인",
        color: "#FF69B4",
        meaning: "사랑과 선택",
        detail: "중요한 선택의 순간입니다. 마음이 이끄는 대로 따르세요."
    },
    {
        id: 7,
        name: "The Chariot",
        korean: "전차",
        color: "#3498DB",
        meaning: "승리와 의지",
        detail: "강한 의지로 장애물을 극복할 수 있습니다. 계속 전진하세요."
    },
    {
        id: 8,
        name: "Strength",
        korean: "힘",
        color: "#F39C12",
        meaning: "용기와 인내",
        detail: "부드러운 힘으로 어려움을 극복하세요. 당신은 생각보다 강합니다."
    },
    {
        id: 9,
        name: "The Hermit",
        korean: "은둔자",
        color: "#7F8C8D",
        meaning: "성찰과 탐구",
        detail: "혼자만의 시간이 필요합니다. 내면을 돌아보며 답을 찾으세요."
    },
    {
        id: 10,
        name: "Wheel of Fortune",
        korean: "운명의 수레바퀴",
        color: "#1ABC9C",
        meaning: "변화와 행운",
        detail: "긍정적인 변화가 다가오고 있습니다. 행운의 흐름을 타세요."
    },
    {
        id: 11,
        name: "Justice",
        korean: "정의",
        color: "#2ECC71",
        meaning: "공정과 균형",
        detail: "공정한 결과를 얻게 될 것입니다. 진실되게 행동하세요."
    },
    {
        id: 12,
        name: "The Hanged Man",
        korean: "매달린 사람",
        color: "#16A085",
        meaning: "희생과 관점 전환",
        detail: "새로운 관점에서 상황을 바라보세요. 기다림이 필요한 시기입니다."
    },
    {
        id: 13,
        name: "Death",
        korean: "죽음",
        color: "#34495E",
        meaning: "변화와 재탄생",
        detail: "끝은 새로운 시작입니다. 과거를 놓아주고 새롭게 출발하세요."
    },
    {
        id: 14,
        name: "Temperance",
        korean: "절제",
        color: "#A29BFE",
        meaning: "조화와 균형",
        detail: "균형 잡힌 삶을 추구하세요. 모든 것이 적절한 조화를 이룰 것입니다."
    },
    {
        id: 15,
        name: "The Devil",
        korean: "악마",
        color: "#636E72",
        meaning: "유혹과 속박",
        detail: "자신을 묶고 있는 것이 무엇인지 살펴보세요. 자유로워질 수 있습니다."
    },
    {
        id: 16,
        name: "The Tower",
        korean: "탑",
        color: "#E17055",
        meaning: "파괴와 깨달음",
        detail: "급격한 변화가 올 수 있지만, 그 후에는 더 나은 기반을 세울 수 있습니다."
    },
    {
        id: 17,
        name: "The Star",
        korean: "별",
        color: "#74B9FF",
        meaning: "희망과 영감",
        detail: "희망의 빛이 당신을 비추고 있습니다. 꿈을 향해 나아가세요."
    },
    {
        id: 18,
        name: "The Moon",
        korean: "달",
        color: "#A29BFE",
        meaning: "환상과 불안",
        detail: "불확실한 상황 속에서도 직관을 믿으세요. 진실이 곧 드러날 것입니다."
    },
    {
        id: 19,
        name: "The Sun",
        korean: "태양",
        color: "#FDCB6E",
        meaning: "성공과 기쁨",
        detail: "밝은 에너지가 당신을 감싸고 있습니다. 행복한 순간들이 기다리고 있습니다."
    },
    {
        id: 20,
        name: "Judgement",
        korean: "심판",
        color: "#6C5CE7",
        meaning: "각성과 재생",
        detail: "과거를 평가하고 새롭게 거듭날 때입니다. 중요한 결정을 내리세요."
    },
    {
        id: 21,
        name: "The World",
        korean: "세계",
        color: "#00B894",
        meaning: "완성과 성취",
        detail: "모든 것이 완성되는 순간입니다. 당신의 노력이 결실을 맺을 것입니다."
    }
];

// 카드 섞기 함수
function shuffleCards() {
    const shuffled = [...tarotCards];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}