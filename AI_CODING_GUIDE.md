# AI_CODING_GUIDE.md

## 1. 문서 목적

이 문서는 `minjoon117/first-Class` GitHub 저장소의 버거킹 UI 프로젝트와 사용자가 직접 작성한 버거킹 로그인 HTML 구조를 기준으로, **기존 코드의 구조와 스타일을 유지하면서 새로운 UI 화면을 제작하기 위한 AI 코딩 가이드**다.

새로운 화면을 만들 때는 기존 프로젝트의 코딩 방식과 HTML 의미 구조를 우선적으로 유지한다.

> 핵심 원칙: 기존 코드를 새롭게 재설계하지 말고, 기존 코드의 규칙을 분석한 뒤 같은 방식으로 확장한다.

---

## 2. 기준 소스

현재 확인된 기준 소스는 다음과 같다.

### GitHub 저장소

- Repository: `minjoon117/first-Class`
- Branch: `main`
- 프로젝트 영역: `BurgerKing/`
- 공통 CSS: `font/css/default.css`

### 버거킹 로그인 HTML

사용자가 직접 작성하여 공유한 `login.html`을 HTML 구조의 기준으로 사용한다.

주요 구조:

```html
<div id="wrap">
    <header>
        <h1>로그인</h1>
        <button class="prev_btn"><span>이전버튼</span></button>
    </header>

    <main>
        <h2 class="table">
            <span>안녕하세요:)</span>
            <span>버거킹입니다.</span>
        </h2>

        <form action="">
            <fieldset>
                <legend>이메일 로그인</legend>

                <div class="input_box">
                    <input type="email" name="email" placeholder="아이디(이메일)을 입력해 주세요">
                </div>

                <div class="input_box">
                    <input type="password" name="password" placeholder="비밀번호를 입력해 주세요">
                    <button type="button" class="pw_btn">
                        <span>비밀번호 보기</span>
                    </button>
                </div>
            </fieldset>
        </form>
    </main>
</div>
```

GitHub 저장소에는 현재 `BurgerKing/login.html` 파일이 확인되지 않으므로, 위 HTML은 사용자가 공유한 실제 로그인 코드에 근거한다.

---

# 3. 가장 중요한 코딩 원칙

## 3-1. 기존 구조를 먼저 분석한다

새 화면을 만들기 전에 다음 순서로 판단한다.

1. 화면의 전체 영역
2. `header`, `main`, `footer` 등 페이지 영역
3. 제목과 정보의 계층
4. 반복되는 콘텐츠
5. 사용자 입력 영역
6. 버튼과 링크의 기능
7. 이미지와 아이콘
8. CSS 클래스 구조
9. 기존 프로젝트에서 재사용할 수 있는 스타일

시각적으로 비슷하게 만드는 것보다 **기존 프로젝트의 HTML 의미 구조와 작성 방식을 유지하는 것**을 우선한다.

---

## 3-2. 의미에 맞는 HTML 요소를 사용한다

HTML 요소는 단순히 디자인 박스를 만들기 위해 선택하지 않는다.

### 주요 기준

- 페이지 상단 영역 → `header`
- 주요 콘텐츠 → `main`
- 페이지 하단 영역 → `footer`
- 제목 → `h1`, `h2`, `h3` 등
- 입력을 포함하는 영역 → `form`
- 관련 입력 항목의 그룹 → `fieldset`
- 입력 그룹의 설명 → `legend`
- 텍스트 입력 → `input`
- 동작을 실행하는 요소 → `button`
- 다른 페이지나 위치로 이동 → `a`
- 반복되는 목록 → `ul`, `ol`, `li`
- 주요 탐색 영역 → `nav`
- 독립적인 콘텐츠 → 필요할 경우 `article`
- 의미 있는 콘텐츠 영역 → 필요할 경우 `section`
- 단순한 스타일/레이아웃 묶음 → `div`

### 주의

`div`를 먼저 만들고 나중에 의미를 붙이지 않는다.

먼저 콘텐츠의 의미를 판단한 다음 적절한 HTML 요소를 선택한다.

---

# 4. 기존 버거킹 로그인 구조에서 유지할 것

## 4-1. 페이지 기본 구조

버거킹 로그인 화면은 다음과 같은 흐름을 사용한다.

```text
#wrap
 ├─ header
 │   ├─ h1
 │   └─ 이전 버튼
 │
 └─ main
     ├─ 화면 안내 제목
     └─ form
         └─ fieldset
             ├─ legend
             ├─ 입력 영역
             └─ 입력 영역
```

새로운 화면도 화면의 성격이 달라지지 않는 한 이와 같은 **큰 구조를 우선적으로 유지한다.**

---

## 4-2. 제목 계층을 유지한다

기존 로그인 화면에서는 페이지 제목을 `h1`으로 두고, 주요 콘텐츠 제목을 `h2`로 구성한다.

예:

```html
<header>
    <h1>로그인</h1>
</header>

<main>
    <h2>안녕하세요:)</h2>
</main>
```

새 화면에서도 글자의 크기만 보고 제목 태그를 선택하지 않는다.

**정보의 계층을 기준으로 heading level을 결정한다.**

---

# 5. Form 작성 규칙

로그인처럼 사용자의 입력을 받는 화면에서는 기존의 `form` 구조를 유지한다.

```html
<form action="">
    <fieldset>
        <legend>이메일 로그인</legend>
        ...
    </fieldset>
</form>
```

## 입력 요소

입력 목적에 맞는 `type`을 사용한다.

```html
<input type="email">
<input type="password">
<input type="text">
```

가능하면 입력의 목적을 알 수 있도록 `name`도 지정한다.

```html
<input type="email" name="email">
<input type="password" name="password">
```

---

## 버튼과 링크 구분

### `button`

현재 화면에서 기능이나 상태를 변경할 때 사용한다.

예:

```html
<button type="button">
    <span>비밀번호 보기</span>
</button>
```

### `a`

다른 페이지나 위치로 이동할 때 사용한다.

예:

```html
<a href="#">회원가입</a>
```

단순히 모양이 버튼처럼 보인다는 이유로 `button`을 사용하지 않는다.

---

# 6. 기존 CSS Reset과 충돌하지 않도록 한다

GitHub의 `font/css/default.css`에는 프로젝트 공통 초기화가 이미 작성되어 있다.

주요 특징:

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
}
```

그리고 다음 요소들의 기본 스타일을 초기화한다.

- `ul`
- `ol`
- `a`
- `img`
- `button`
- `input`
- `textarea`
- `select`
- `fieldset`
- `legend`

따라서 새로운 페이지에서 같은 초기화 코드를 중복해서 작성하지 않는다.

---

# 7. 접근성 관련 기존 규칙을 유지한다

기존 `default.css`에는 접근성을 고려한 규칙이 포함되어 있다.

## focus-visible

```css
:focus {
  outline: none;
}

:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 2px;
}
```

새 화면을 만들 때 포커스 표시를 임의로 제거하지 않는다.

---

## sr-only

스크린리더용 텍스트가 필요한 경우 기존 `.sr-only`를 우선 활용한다.

```html
<span class="sr-only">비밀번호 보기</span>
```

단, 기존 UI에서 이미 `span`을 사용하여 버튼의 의미를 표현하고 있다면 프로젝트의 기존 작성 방식을 우선 검토한다.

---

# 8. 이미지와 아이콘

현재 버거킹 프로젝트의 이미지 자산은 `BurgerKing/img/`에 위치한다.

확인된 자산 예:

```text
apple_logo_icon.svg
back_icon.svg
cancle_icon.svg
checkBox_active.svg
checkBox_disabled.svg
check_large_inactive.svg
check_large_on.svg
check_small_icon.svg
close_icon.svg
eye_icon.svg
illust_bg.png
kakao_logo_icon.svg
naver_logo_icon.svg
right_icon.svg
samsung_logo_icon.svg
```

새 화면을 만들 때:

1. 기존 이미지가 같은 용도로 존재하는지 먼저 확인한다.
2. 기존 아이콘을 재사용할 수 있으면 재사용한다.
3. 같은 기능의 아이콘을 새로 만들지 않는다.
4. 실제 파일명과 경로를 확인한 후 연결한다.
5. 존재하지 않는 이미지 경로나 파일명을 임의로 만들지 않는다.

---

# 9. 폰트

현재 프로젝트에는 다음과 같은 폰트 자산이 있다.

```text
BKBulMatPro-Bold.woff
PretendardVariable.woff2
SDGothicNeoRound-eMd.woff
SDGothicNeoRound-gBd.otf
SDGothicNeoRound-hEb.otf
```

기존 코드에서 사용한 폰트 변수:

```css
body {
    --font: "Sandoll GothicNeoRound", sans-serif;
    --font-pre: "pretendard variable", sans-serif;
    --font-BKR: "BKR", sans-serif;
}
```

새 화면을 만들 때 새로운 웹폰트를 임의로 추가하지 않는다.

기존 프로젝트에서 사용 중인 폰트를 우선 확인하고 동일한 폰트 체계를 유지한다.

---

# 10. CSS 작성 원칙

## 기존 CSS를 우선 활용한다

새 화면을 만들 때 기존 CSS와 동일한 역할을 하는 스타일을 다시 만들지 않는다.

먼저 확인:

- 공통 reset
- 폰트
- 버튼 기본 스타일
- 입력 요소 기본 스타일
- 이미지 기본 스타일
- 공통 레이아웃
- 기존 클래스

그 다음 새 화면에 필요한 스타일만 추가한다.

---

## 클래스 이름

클래스 이름은 HTML 요소의 역할과 UI의 의미를 알 수 있도록 작성한다.

기존 코드의 예:

```html
<button class="prev_btn">
<div class="input_box">
<button class="pw_btn">
```

따라서 새로운 클래스도 무작위 이름보다 **기능 중심의 이름**을 사용한다.

예:

```text
login_btn
search_box
profile_area
menu_btn
close_btn
```

프로젝트 전체에서 동일한 기능에는 동일한 이름을 유지한다.

---

# 11. 인라인 스타일을 남발하지 않는다

새 화면을 만들면서 다음과 같은 코드를 반복하지 않는다.

```html
<div style="margin-top: 20px;">
```

가능하면 CSS 클래스에서 관리한다.

```html
<div class="content_area">
```

```css
.content_area {
    margin-top: 20px;
}
```

---

# 12. 기존 코드의 표현 방식을 존중한다

AI가 새로운 화면을 제작할 때 다음과 같은 이유로 기존 코드를 임의로 바꾸지 않는다.

- 최신 문법이라는 이유
- 더 짧은 코드라는 이유
- 개인적으로 선호하는 구조라는 이유
- 다른 프로젝트에서 많이 사용하는 방식이라는 이유

기존 프로젝트와 새 화면의 **일관성**이 우선이다.

단, 기존 구조에 명백한 접근성 또는 HTML 의미 구조상의 문제가 발견되면 변경 전에 사용자에게 이유를 설명한다.

---

# 13. 새로운 브랜드 UI를 제작할 때

버거킹 로그인 UI를 기준으로 다른 브랜드의 로그인 화면을 만들 경우 다음 순서로 작업한다.

```text
① 새로운 브랜드의 Figma/UI 확인
        ↓
② 화면의 정보 구조 분석
        ↓
③ 버거킹 로그인 HTML 구조와 비교
        ↓
④ 공통 구조는 유지
        ↓
⑤ 브랜드에 따라 필요한 구조만 변경
        ↓
⑥ 기존 CSS / 폰트 / reset 확인
        ↓
⑦ 새로운 브랜드의 스타일 적용
        ↓
⑧ HTML 의미 구조 검토
        ↓
⑨ CSS 중복 및 불필요한 코드 검토
```

### 중요한 원칙

**버거킹의 디자인을 복사하는 것이 아니라 버거킹에서 사용한 코딩 구조와 작성 원칙을 기준으로 새로운 브랜드의 UI를 구현한다.**

---

# 14. AI가 새 화면을 작성할 때 하지 말아야 할 것

다음 행동은 하지 않는다.

### 1. 존재하지 않는 파일 생성 가정

```html
<link rel="stylesheet" href="css/common.css">
```

실제로 파일이 존재하는지 확인하지 않고 임의의 경로를 만들지 않는다.

### 2. 존재하지 않는 이미지 사용

```html
<img src="img/logo.png">
```

실제 파일이 확인되지 않았다면 임의의 이미지 경로를 만들지 않는다.

### 3. 디자인만 보고 의미 없는 `div` 구조 생성

```html
<div>
    <div>
        <div>
            ...
        </div>
    </div>
</div>
```

시각적 박스와 HTML 의미 구조를 동일하게 생각하지 않는다.

### 4. heading level을 디자인 크기로 결정

큰 글자라고 무조건 `h1`을 사용하지 않는다.

### 5. 링크와 버튼을 임의로 변경

이동이면 `a`, 동작이면 `button`이라는 원칙을 유지한다.

### 6. 기존 CSS를 무시하고 전부 새로 작성

기존 프로젝트와 동일한 역할을 하는 CSS를 중복 작성하지 않는다.

### 7. 사용자가 제공하지 않은 내용을 임의로 추가

Figma 또는 이미지에서 확인되지 않는 메뉴, 문구, 기능 등을 만들어내지 않는다.

---

# 15. 코드 작성 후 검토 기준

새 HTML을 작성한 뒤 다음 항목을 확인한다.

## HTML

- [ ] `header`, `main`, `footer`가 필요한 위치에 사용되었는가?
- [ ] 페이지 제목이 적절한 heading으로 구성되었는가?
- [ ] heading 순서가 자연스러운가?
- [ ] form 요소가 필요한 경우 `form`을 사용했는가?
- [ ] 관련 입력이 `fieldset`으로 묶여야 하는가?
- [ ] `legend`가 필요한가?
- [ ] 버튼과 링크의 의미가 올바른가?
- [ ] 반복 콘텐츠를 목록으로 표현해야 하는가?
- [ ] 의미 없는 `div`가 과도하게 사용되지 않았는가?

## CSS

- [ ] 기존 `default.css`와 중복되는 코드가 없는가?
- [ ] 기존 프로젝트의 폰트를 사용하고 있는가?
- [ ] 기존 클래스와 충돌하지 않는가?
- [ ] 불필요한 인라인 스타일이 없는가?
- [ ] 같은 역할의 스타일을 중복 작성하지 않았는가?

## 자산

- [ ] 실제 존재하는 이미지 경로인가?
- [ ] 기존 아이콘을 재사용할 수 있는가?
- [ ] 존재하지 않는 파일명을 임의로 만들지 않았는가?

## 접근성

- [ ] 키보드 포커스가 사라지지 않았는가?
- [ ] 버튼의 기능을 알 수 있는 텍스트가 있는가?
- [ ] 이미지에 필요한 대체 텍스트가 있는가?
- [ ] 입력 요소의 목적을 알 수 있는가?

---

# 16. AI의 답변 방식

새로운 화면의 HTML/CSS를 요청받으면 다음 순서로 답한다.

### 1. 기존 코드와의 공통점

어떤 기존 구조를 유지했는지 간단하게 설명한다.

### 2. 변경한 부분

새 브랜드 또는 새 화면 때문에 변경한 부분만 설명한다.

### 3. HTML

완성된 HTML 코드를 제공한다.

### 4. CSS

완성된 CSS 코드를 제공한다.

### 5. 검토

기존 버거킹 UI의 구조와 스타일을 기준으로 문제가 없는지 확인한다.

불확실한 내용은 임의로 결정하지 말고 사용자에게 확인한다.

---

# 17. 최종 기준

새 화면을 만들 때 가장 중요한 기준은 다음과 같다.

> **기존 버거킹 UI의 코드를 복사하는 것이 아니라, 기존 코드에서 사용한 HTML 의미 구조, CSS 작성 방식, 폰트 체계, 자산 관리 방식, 접근성 기준을 유지하면서 새로운 화면의 요구사항만 추가한다.**

새로운 브랜드의 UI가 버거킹과 시각적으로 다르더라도 괜찮다.

하지만 다음은 프로젝트 전체에서 일관되게 유지한다.

```text
HTML 의미 구조
    ↓
기존 CSS/reset 체계
    ↓
기존 폰트 체계
    ↓
기존 자산 관리 방식
    ↓
기존 클래스 작성 방식
    ↓
접근성 기준
    ↓
새 브랜드의 디자인과 콘텐츠 적용
```

이 문서는 이후 AI에게 새로운 UI 화면을 요청할 때 함께 제공하여, 기존 버거킹 프로젝트의 코딩 스타일과 구조를 유지하기 위한 기준 문서로 사용한다.
