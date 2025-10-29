# JavaScript DOM 조작 핵심 정리

## 1. 선택하기
```javascript
// ID로 선택 (가장 많이 씀)
document.getElementById('myId')

// CSS 선택자 (편리함)
document.querySelector('.class')      // 첫 번째 1개
document.querySelectorAll('.class')   // 모두
```

---

## 2. 내용 변경
```javascript
요소.textContent = "텍스트"           // 텍스트만
요소.innerHTML = "<b>HTML</b>"        // HTML 포함
요소.value = "입력값"                 // input 값
```

---

## 3. 스타일 변경
```javascript
요소.style.color = "red"
요소.style.backgroundColor = "blue"
요소.style.display = "none"          // 숨기기
```

---

## 4. 클래스 조작
```javascript
요소.classList.add('active')         // 추가
요소.classList.remove('active')      // 제거
요소.classList.toggle('active')      // 토글
```

---

## 5. 요소 만들기/추가/삭제
```javascript
// 만들기
const 새요소 = document.createElement('div')
새요소.textContent = "내용"

// 추가
부모.appendChild(새요소)

// 삭제
요소.remove()
```

---

## 6. 이벤트
```javascript
요소.addEventListener('click', function() {
  // 클릭 시 실행
})

요소.addEventListener('input', function() {
  // 입력 시 실행
})
```

---

## 7. 자주 쓰는 패턴

### 버튼 클릭
```javascript
const btn = document.getElementById('btn')
btn.addEventListener('click', function() {
  console.log("클릭!")
})
```

### 입력값 가져오기
```javascript
const input = document.getElementById('input')
const value = input.value
```

### 내용 바꾸기
```javascript
const div = document.getElementById('result')
div.textContent = "새 내용"
```

### 보이기/숨기기
```javascript
요소.style.display = "none"    // 숨기기
요소.style.display = "block"   // 보이기
```

---

## 8. 간단 예제
```html
<input id="name" type="text">
<button id="btn">확인</button>
<div id="result"></div>

<script>
  const input = document.getElementById('name')
  const btn = document.getElementById('btn')
  const result = document.getElementById('result')
  
  btn.addEventListener('click', function() {
    result.textContent = "안녕, " + input.value + "!"
  })
</script>
```

---

## 핵심 요약

| 작업 | 코드 |
|------|------|
| **선택** | `document.getElementById('id')` |
| **내용 변경** | `요소.textContent = "텍스트"` |
| **스타일** | `요소.style.color = "red"` |
| **클래스** | `요소.classList.add('active')` |
| **추가** | `부모.appendChild(새요소)` |
| **삭제** | `요소.remove()` |
| **이벤트** | `요소.addEventListener('click', function() {})` |

---

**이것만 알면 기본적인 DOM 조작은 다 할 수 있어요!** ✨