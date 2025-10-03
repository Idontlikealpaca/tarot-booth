# 🔮 타로 운세 웹앱

학교 부스에서 태블릿으로 즐기는 타로 카드 운세 웹 애플리케이션

[![Demo](https://img.shields.io/badge/Demo-Live-brightgreen)](https://your-demo-url.com)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

![타로 운세 미리보기](https://via.placeholder.com/800x400?text=Tarot+Reading+Preview)

## ✨ 주요 기능

- 🎴 **22장 메이저 아르카나** 부채꼴 펼치기 애니메이션
- 🌟 **카드 3장 선택** 시스템 - 호버 효과 및 선택 애니메이션
- 🔮 **캐릭터 운세 해설** - 말풍선으로 간단 요약
- 🎨 **행운의 컬러** - 선택한 카드 기반 컬러 적용
- 📖 **자세히 보기** - 각 카드의 상세 해설
- 🎵 **BGM 컨트롤** - 배경음악 on/off
- 📱 **반응형 디자인** - 태블릿/모바일 최적화
- ⭐ **우주 테마** - 신비로운 별자리 배경

## 🚀 빠른 시작

### 방법 1: 직접 실행 (가장 간단)

```bash
# 1. 저장소 클론
git clone https://github.com/your-username/tarot-reading.git

# 2. 폴더로 이동
cd tarot-reading

# 3. index.html을 브라우저로 열기
# 더블클릭하거나 브라우저로 드래그하세요!
```

### 방법 2: 로컬 서버로 실행 (권장)

```bash
# Python 3 사용
python -m http.server 8000

# 또는 Node.js 사용
npx http-server

# 브라우저에서 http://localhost:8000 접속
```

### 방법 3: VS Code Live Server

1. VS Code에서 프로젝트 열기
2. Live Server 확장 프로그램 설치
3. `index.html` 우클릭 → "Open with Live Server"

## 📁 프로젝트 구조

```
tarot-app/
│
├── index.html              # 메인 HTML 파일
│
├── css/
│   ├── style.css          # 메인 스타일시트
│   └── animations.css     # 애니메이션 스타일
│
├── js/
│   ├── tarot-data.js      # 타로 카드 데이터 (22장)
│   ├── card-spread.js     # 카드 펼치기 애니메이션 로직
│   └── main.js            # 메인 애플리케이션 로직
│
└── README.md              # 프로젝트 문서
```

## 🎯 사용 방법

1. **메인 화면**: "운세 보러가기" 버튼 클릭
2. **카드 선택**: 마음이 가는 카드 3장을 차례대로 선택
3. **결과 확인**: 
   - 캐릭터의 간단한 운세 요약 확인
   - "자세히 보기"로 각 카드의 상세 해설 보기
4. **다시 하기**: "다시 시작" 버튼으로 새로운 운세

## 🎨 커스터마이징

### 1. 타로 카드 데이터 수정

`js/tarot-data.js` 파일에서 카드 정보를 변경할 수 있습니다:

```javascript
{
    id: 0,
    name: "The Fool",
    korean: "광대",
    color: "#FFD700",        // 행운의 컬러
    meaning: "새로운 시작",   // 간단한 의미
    detail: "상세 해설..."    // 자세한 해설
}
```

### 2. 색상 테마 변경

`css/style.css`에서 그라데이션 색상을 조정하세요:

```css
background: linear-gradient(135deg, #1a0033 0%, #3d0066 50%, #660066 100%);
```

### 3. 애니메이션 속도 조정

`css/animations.css`에서 애니메이션 duration을 변경하세요:

```css
animation: cardSpread 0.5s ease-out; /* 속도 조절 */
```

## 🎵 BGM 추가하기

1. `assets/sounds/` 폴더 생성 후 BGM 파일 추가
2. `index.html`에 오디오 태그 추가:

```html
<audio id="bgm-audio" loop>
    <source src="assets/sounds/bgm.mp3" type="audio/mpeg">
</audio>
```

3. `js/main.js`의 `toggleBGM()` 함수 수정:

```javascript
function toggleBGM() {
    const audio = document.getElementById('bgm-audio');
    isMusicPlaying = !isMusicPlaying;
    const icon = document.getElementById('bgm-icon');
    
    if (isMusicPlaying) {
        icon.textContent = '🔊';
        audio.play();
    } else {
        icon.textContent = '🔇';
        audio.pause();
    }
}
```

## 📱 배포하기

### Netlify (무료, 가장 쉬움)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

1. [Netlify](https://netlify.com) 회원가입
2. "New site from Git" 또는 드래그 앤 드롭으로 업로드
3. 자동으로 URL 생성됨!

### GitHub Pages (무료)

1. GitHub 저장소의 Settings → Pages
2. Source: `main` 브랜치 선택
3. `https://your-username.github.io/tarot-reading` 에서 확인

### Vercel (무료)

```bash
npm i -g vercel
vercel
```

## 🔧 고급 기능 추가

### QR 코드 공유

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>
```

### 결과 이미지 저장

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
```

### PWA로 변환

Service Worker를 추가하여 오프라인에서도 작동하도록 만들 수 있습니다.

## 🐛 트러블슈팅

### 카드가 제대로 펼쳐지지 않아요
- 브라우저 캐시 삭제 (Ctrl+Shift+R)
- 개발자 도구(F12)에서 콘솔 오류 확인
- 파일 경로가 정확한지 확인

### 모바일에서 레이아웃이 깨져요
- viewport meta 태그 확인
- CSS 미디어 쿼리 적용 확인

### 스크롤이 안돼요
- `css/style.css`의 `.screen` 클래스에 `overflow-y: auto` 확인

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

MIT License - 자유롭게 사용, 수정, 배포 가능합니다.

## 🙏 크레딧

- **타로 카드 의미**: 전통적인 라이더-웨이트 타로 해석
- **디자인**: 현대적인 우주/별자리 테마
- **기술 스택**: Vanilla JavaScript, CSS3 Animations

## 📧 문의

- 이슈: [GitHub Issues](https://github.com/your-username/tarot-reading/issues)
- 이메일: your-email@example.com

---

**즐거운 타로 카드 운세 체험 되세요!** 🔮✨

Made with ❤️ for school festival booth