// 카드 펼치기 애니메이션 관리
class CardSpread {
    constructor(containerElement) {
        this.container = containerElement;
        this.cards = [];
        this.selectedCards = [];
    }

    // 카드를 부채꼴로 펼치기
    spreadCards(cardsData) {
        this.container.innerHTML = ''; // 기존 카드 제거
        this.cards = [];
        
        const totalCards = cardsData.length;
        const containerWidth = this.container.offsetWidth;
        const containerHeight = this.container.offsetHeight;
        
        // 부채꼴의 중심점 (하단 중앙)
        const centerX = containerWidth / 2;
        const centerY = containerHeight - 50;
        
        // 부채꼴 펼침 각도 (라디안)
        const spreadAngle = Math.PI * 0.8; // 약 144도
        const startAngle = -spreadAngle / 2;
        
        // 반지름 (카드들이 배치될 원의 반지름)
        const radius = Math.min(containerWidth * 0.45, 400);
        
        cardsData.forEach((card, index) => {
            const cardElement = this.createCardElement(card, index);
            
            // 각 카드의 각도 계산
            const angle = startAngle + (spreadAngle * index / (totalCards - 1));
            
            // 카드 위치 계산 (극좌표 -> 직교좌표)
            const x = centerX + radius * Math.sin(angle);
            const y = centerY - radius * Math.cos(angle);
            
            // 카드 회전 각도 (부채꼴 모양을 만들기 위해)
            const rotationDegree = (angle * 180 / Math.PI);
            
            // 카드 스타일 적용
            cardElement.style.left = `${x - 40}px`; // 카드 너비의 절반만큼 빼기
            cardElement.style.top = `${y - 60}px`; // 카드 높이의 절반만큼 빼기
            cardElement.style.transform = `rotate(${rotationDegree}deg)`;
            cardElement.style.zIndex = index;
            
            // 순차적으로 나타나는 애니메이션
            cardElement.style.animation = `cardSpread 0.5s ease-out ${index * 0.03}s forwards`;
            cardElement.style.opacity = '0';
            
            this.container.appendChild(cardElement);
            this.cards.push({
                element: cardElement,
                data: card,
                angle: angle,
                x: x,
                y: y,
                rotation: rotationDegree
            });
        });
    }

    // 카드 엘리먼트 생성
    createCardElement(cardData, index) {
        const card = document.createElement('div');
        card.className = 'tarot-card';
        card.dataset.cardId = cardData.id;
        card.dataset.index = index;
        
        const cardBack = document.createElement('div');
        cardBack.className = 'card-back';
        cardBack.innerHTML = '🎴';
        
        card.appendChild(cardBack);
        
        // 카드 클릭 이벤트
        card.addEventListener('click', () => this.onCardClick(card, cardData));
        
        return card;
    }

    // 카드 클릭 핸들러
    onCardClick(cardElement, cardData) {
        if (this.selectedCards.length >= 3) {
            // 이미 3장을 선택했다면 무시
            const alreadySelected = this.selectedCards.find(c => c.id === cardData.id);
            if (!alreadySelected) {
                return;
            }
        }

        // 이미 선택된 카드인지 확인
        const selectedIndex = this.selectedCards.findIndex(c => c.id === cardData.id);
        
        if (selectedIndex !== -1) {
            // 선택 취소
            this.selectedCards.splice(selectedIndex, 1);
            cardElement.classList.remove('selected');
            
            // 카드 내용을 다시 뒷면으로
            const cardBack = cardElement.querySelector('.card-back');
            if (!cardBack) {
                cardElement.innerHTML = '<div class="card-back">🎴</div>';
            }
        } else {
            // 새로 선택
            this.selectedCards.push(cardData);
            cardElement.classList.add('selected');
            cardElement.classList.add('selecting');
            
            // 점프 애니메이션 후 제거
            setTimeout(() => {
                cardElement.classList.remove('selecting');
            }, 500);
            
            // 카드를 앞면으로 변경 (선택 표시)
            cardElement.innerHTML = `
                <div class="card-selected-mark" style="background: linear-gradient(135deg, ${cardData.color}, #FFD700);">
                    ✨
                </div>
            `;
        }

        // 다른 카드들 비활성화/활성화
        this.updateCardStates();
        
        // 선택 카운트 업데이트
        this.updateSelectionCount();
        
        // 3장 선택 완료 시 콜백 호출
        if (this.selectedCards.length === 3 && this.onComplete) {
            setTimeout(() => {
                this.onComplete(this.selectedCards);
            }, 500);
        }
    }

    // 카드 상태 업데이트 (선택 완료 시 다른 카드 비활성화)
    updateCardStates() {
        if (this.selectedCards.length >= 3) {
            this.cards.forEach(card => {
                const isSelected = this.selectedCards.find(c => c.id === card.data.id);
                if (!isSelected) {
                    card.element.classList.add('disabled');
                }
            });
        } else {
            this.cards.forEach(card => {
                card.element.classList.remove('disabled');
            });
        }
    }

    // 선택 카운트 업데이트
    updateSelectionCount() {
        const countElement = document.getElementById('selected-count');
        if (countElement) {
            countElement.textContent = this.selectedCards.length;
            
            // 3장 선택 완료 시 강조
            if (this.selectedCards.length === 3) {
                countElement.style.color = '#FFD700';
                countElement.style.fontSize = '24px';
                countElement.style.fontWeight = 'bold';
            } else {
                countElement.style.color = '#FFD700';
                countElement.style.fontSize = '20px';
                countElement.style.fontWeight = 'normal';
            }
        }
    }

    // 선택 완료 콜백 설정
    setOnComplete(callback) {
        this.onComplete = callback;
    }

    // 선택 초기화
    reset() {
        this.selectedCards = [];
        this.cards = [];
        this.container.innerHTML = '';
    }

    // 선택된 카드 가져오기
    getSelectedCards() {
        return this.selectedCards;
    }
}