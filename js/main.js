// 메인 애플리케이션 로직

// 전역 변수
let currentScreen = 'main';
let cardSpreadManager = null;
let isMusicPlaying = false;
let bgm = null;

// DOM 요소
const screens = {
    main: document.getElementById('main-screen'),
    select: document.getElementById('select-screen'),
    result: document.getElementById('result-screen'),
    detail: document.getElementById('detail-screen')
};

const buttons = {
    start: document.getElementById('start-btn'),
    bgmToggle: document.getElementById('bgm-toggle'),
    detailToggle: document.getElementById('detail-toggle'),
    back: document.getElementById('back-btn'),
    reset: document.getElementById('reset-btn'),
    resetDetail: document.getElementById('reset-btn-detail')
};

// 초기화
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    // BGM 초기화
    bgm = document.getElementById('bgm');
    bgm.volume = 0.3; // 볼륨을 30%로 설정

    // BGM 버튼 이벤트 리스너
    buttons.bgmToggle.addEventListener('click', toggleBGM);
    // 카드 펼치기 매니저 초기화
    const cardSpreadContainer = document.getElementById('card-spread');
    cardSpreadManager = new CardSpread(cardSpreadContainer);
    
    // 카드 선택 완료 시 콜백
    cardSpreadManager.setOnComplete((selectedCards) => {
        setTimeout(() => {
            showResultScreen(selectedCards);
        }, 800);
    });
    
    // 이벤트 리스너 등록
    buttons.start.addEventListener('click', startReading);
    buttons.bgmToggle.addEventListener('click', toggleBGM);
    buttons.detailToggle.addEventListener('click', showDetailScreen);
    buttons.back.addEventListener('click', backToResult);
    buttons.reset.addEventListener('click', resetReading);
    buttons.resetDetail.addEventListener('click', resetReading);
    
    // 메인 화면 표시
    showScreen('main');
}

// 화면 전환
function showScreen(screenName) {
    // 모든 화면 숨기기
    Object.values(screens).forEach(screen => {
        screen.classList.remove('active');
    });
    
    // 선택한 화면 표시
    screens[screenName].classList.add('active');
    currentScreen = screenName;
}

// 운세 시작
function startReading() {
    showScreen('select');
    
    // 카드 섞고 펼치기
    const shuffledCards = shuffleCards();
    
    // 약간의 딜레이 후 카드 펼치기 (화면 전환 애니메이션 후)
    setTimeout(() => {
        cardSpreadManager.spreadCards(shuffledCards);
    }, 100);
}

// BGM 토글
function toggleBGM() {
    isMusicPlaying = !isMusicPlaying;
    const icon = document.getElementById('bgm-icon');
    
    if (isMusicPlaying) {
        icon.textContent = '🔊';
        // 여기에 실제 BGM 재생 로직 추가
        // 예시:
        // const audio = document.getElementById('bgm-audio');
        // audio.play();
    } else {
        icon.textContent = '🔇';
        // 여기에 실제 BGM 정지 로직 추가
        // 예시:
        // const audio = document.getElementById('bgm-audio');
        // audio.pause();
    }
}

// 결과 화면 표시
function showResultScreen(selectedCards) {
    showScreen('result');
    
    // 선택된 카드 표시
    displaySelectedCards(selectedCards);
    
    // 운세 요약 표시
    displayFortuneSummary(selectedCards);
    
    // 행운의 컬러 적용
    applyLuckyColor(selectedCards[0].color);
    
    // 상세 정보 준비
    prepareCardDetails(selectedCards);
}

// 선택된 카드 3장 표시
function displaySelectedCards(selectedCards) {
    const container = document.getElementById('selected-cards');
    container.innerHTML = '';
    
    selectedCards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.className = 'result-card';
        cardElement.style.background = `linear-gradient(135deg, ${card.color}, ${card.color}dd)`;
        cardElement.style.animationDelay = `${index * 0.2}s`;
        
        cardElement.innerHTML = `
            <div class="result-card-icon">
                <img src="${card.image}" alt="${card.korean}" class="card-back-img">
            </div>
            <div class="result-card-name">${card.korean}</div>
        `;
        
        container.appendChild(cardElement);
    });
}

// 운세 요약 표시
function displayFortuneSummary(selectedCards) {
    const summaryElement = document.getElementById('fortune-summary');
    const cardNames = selectedCards.map(c => c.korean).join(', ');
    const mainMeaning = selectedCards[0].meaning;
    
    const summary = `${cardNames} 카드를 뽑으셨네요! 오늘은 ${mainMeaning}의 기운이 강하게 느껴집니다. ✨`;
    
    summaryElement.textContent = summary;
}

// 행운의 컬러 적용
function applyLuckyColor(color) {
    const colorDot = document.getElementById('lucky-color-dot');
    colorDot.style.backgroundColor = color;
    
    // 결과 화면 배경에도 살짝 적용
    const resultScreen = screens.result;
    resultScreen.style.background = `linear-gradient(135deg, ${color}22, #1a0033, #2d1b4e)`;
    
    // 상세 화면 배경에도 적용
    const detailScreen = screens.detail;
    detailScreen.style.background = `linear-gradient(135deg, ${color}22, #1a0033, #2d1b4e)`;
}

// 카드 상세 정보 준비
function prepareCardDetails(selectedCards) {
    const detailsContainer = document.getElementById('card-details');
    detailsContainer.innerHTML = '';
    
    selectedCards.forEach((card, index) => {
        const detailItem = document.createElement('div');
        detailItem.className = 'card-detail-item';
        
        detailItem.innerHTML = `
            <div class="card-detail-header">
                <div class="card-detail-color" style="background-color: ${card.color};"></div>
                <h4 class="card-detail-title">${index + 1}. ${card.korean} (${card.name})</h4>
            </div>
            <p class="card-detail-meaning">✨ ${card.meaning}</p>
            <p class="card-detail-description">${card.detail}</p>
        `;
        
        detailsContainer.appendChild(detailItem);
    });
}

// 자세히 보기 화면으로 전환
function showDetailScreen() {
    showScreen('detail');
}

// 결과 화면으로 돌아가기
function backToResult() {
    showScreen('result');
}

// 다시 시작
function resetReading() {
    // 카드 선택 초기화
    cardSpreadManager.reset();
    
    // 메인 화면으로 돌아가기
    showScreen('main');
}

// BGM 제어 함수
function toggleBGM() {
    if (isMusicPlaying) {
        bgm.pause();
        buttons.bgmToggle.querySelector('#bgm-icon').textContent = '🔇';
    } else {
        bgm.play().catch(error => {
            console.log('BGM 재생 실패:', error);
        });
        buttons.bgmToggle.querySelector('#bgm-icon').textContent = '🔊';
    }
    isMusicPlaying = !isMusicPlaying;
}