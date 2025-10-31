# 자바스크립트 기초 완벽 정리

## 목차
1. [자바스크립트란?](#자바스크립트란)
2. [변수 선언](#변수-선언)
3. [데이터 타입](#데이터-타입)
4. [연산자](#연산자)
5. [조건문](#조건문)
6. [반복문](#반복문)
7. [함수](#함수)
8. [배열](#배열)
9. [객체](#객체)
10. [ES6+ 주요 기능](#es6-주요-기능)

---

## 자바스크립트란?

자바스크립트(JavaScript)는 웹 페이지를 동적으로 만들기 위한 프로그래밍 언어입니다.

**주요 특징**
- 인터프리터 언어 (한 줄씩 실행)
- 동적 타입 언어 (변수의 타입이 실행 시 결정)
- 프로토타입 기반 객체 지향 언어
- 브라우저와 서버(Node.js) 모두에서 실행 가능

**사용 영역**
- 웹 프론트엔드 (React, Vue, Angular)
- 웹 백엔드 (Node.js, Express)
- 모바일 앱 (React Native)
- 데스크톱 앱 (Electron)

---

## 변수 선언

자바스크립트에서는 `var`, `let`, `const` 세 가지 키워드로 변수를 선언할 수 있습니다.

### var (구식, 사용 지양)
```javascript
var name = "홍길동";
var age = 25;

// 문제점
var x = 10;
var x = 20; // 재선언 가능 (혼란 발생)
```

### let (재할당 가능)
```javascript
let age = 25;
age = 26; // 재할당 가능

let count = 0;
count++; // 1
```

### const (상수, 재할당 불가)
```javascript
const PI = 3.14159;
// PI = 3.14; // 오류 발생!

const person = {name: "김철수"};
person.name = "이영희"; // 객체의 속성 변경은 가능
```

**권장 사용법**
- 기본적으로 `const` 사용
- 재할당이 필요한 경우만 `let` 사용
- `var`는 사용하지 않기

---

## 데이터 타입

### 기본 타입 (Primitive Types)

**1. 숫자 (Number)**
```javascript
let integer = 42;
let float = 3.14;
let negative = -10;
let infinity = Infinity;
let notANumber = NaN;
```

**2. 문자열 (String)**
```javascript
let single = '안녕하세요';
let double = "Hello";
let template = `안녕, ${name}님!`;
```

**3. 불린 (Boolean)**
```javascript
let isTrue = true;
let isFalse = false;
```

**4. undefined**
```javascript
let x; // 선언만 하고 값을 할당하지 않음
console.log(x); // undefined
```

**5. null**
```javascript
let empty = null; // 의도적으로 빈 값
```

**6. Symbol (ES6)**
```javascript
let sym = Symbol('description');
```

**7. BigInt (ES11)**
```javascript
let bigNumber = 1234567890123456789012345678901234567890n;
```

### 참조 타입 (Reference Types)

**1. 객체 (Object)**
```javascript
let person = {
    name: "김철수",
    age: 30
};
```

**2. 배열 (Array)**
```javascript
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "hello", true, null];
```

**3. 함수 (Function)**
```javascript
function greet() {
    console.log("안녕하세요!");
}
```

### 타입 확인
```javascript
typeof 42;          // "number"
typeof "hello";     // "string"
typeof true;        // "boolean"
typeof undefined;   // "undefined"
typeof null;        // "object" (자바스크립트의 오래된 버그)
typeof {};          // "object"
typeof [];          // "object"
typeof function(){};// "function"

// 배열 확인
Array.isArray([]);  // true
```

---

## 연산자

### 산술 연산자
```javascript
let a = 10;
let b = 3;

console.log(a + b);  // 13 (덧셈)
console.log(a - b);  // 7  (뺄셈)
console.log(a * b);  // 30 (곱셈)
console.log(a / b);  // 3.333... (나눗셈)
console.log(a % b);  // 1  (나머지)
console.log(a ** b); // 1000 (거듭제곱, ES7)

// 증감 연산자
let count = 0;
count++;  // 1 (후위 증가)
++count;  // 2 (전위 증가)
count--;  // 1 (후위 감소)
--count;  // 0 (전위 감소)
```

### 할당 연산자
```javascript
let x = 10;

x += 5;  // x = x + 5  (15)
x -= 3;  // x = x - 3  (12)
x *= 2;  // x = x * 2  (24)
x /= 4;  // x = x / 4  (6)
x %= 4;  // x = x % 4  (2)
```

### 비교 연산자
```javascript
// 동등 연산자 (타입 변환 후 비교)
10 == "10";   // true
0 == false;   // true

// 일치 연산자 (타입까지 비교) - 권장!
10 === "10";  // false
10 === 10;    // true
0 === false;  // false

// 부등 연산자
10 != "10";   // false
10 !== "10";  // true (권장)

// 크기 비교
10 > 5;       // true
10 >= 10;     // true
5 < 10;       // true
5 <= 5;       // true
```

### 논리 연산자
```javascript
// AND (&&) - 모두 true일 때 true
true && true;    // true
true && false;   // false

// OR (||) - 하나라도 true면 true
true || false;   // true
false || false;  // false

// NOT (!) - 반대값
!true;           // false
!false;          // true

// 단축 평가
let name = userName || "게스트"; // userName이 falsy면 "게스트"
let isAdmin = user && user.isAdmin; // user가 있으면 user.isAdmin
```

### 삼항 연산자
```javascript
let age = 20;
let message = age >= 18 ? "성인" : "미성년자";

// 중첩 가능
let grade = score >= 90 ? "A" : 
            score >= 80 ? "B" : 
            score >= 70 ? "C" : "F";
```

---

## 조건문

### if-else 문
```javascript
let age = 20;

if (age >= 18) {
    console.log("성인입니다");
} else {
    console.log("미성년자입니다");
}

// else if
let score = 85;

if (score >= 90) {
    console.log("A학점");
} else if (score >= 80) {
    console.log("B학점");
} else if (score >= 70) {
    console.log("C학점");
} else {
    console.log("재수강");
}
```

### switch 문
```javascript
let day = 3;

switch (day) {
    case 1:
        console.log("월요일");
        break;
    case 2:
        console.log("화요일");
        break;
    case 3:
        console.log("수요일");
        break;
    case 4:
        console.log("목요일");
        break;
    case 5:
        console.log("금요일");
        break;
    case 6:
    case 7:
        console.log("주말");
        break;
    default:
        console.log("잘못된 입력");
}
```

### Truthy와 Falsy
```javascript
// Falsy 값들 (false로 평가)
false
0
""
null
undefined
NaN

// Truthy 값들 (true로 평가)
true
1, -1, 3.14 (0이 아닌 모든 숫자)
"hello", " " (빈 문자열이 아닌 모든 문자열)
[], {} (빈 배열과 객체도 truthy)

// 활용
if (userName) {
    console.log(`환영합니다, ${userName}님!`);
}
```

---

## 반복문

### for 문
```javascript
// 기본 for문
for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
}

// 역순
for (let i = 5; i > 0; i--) {
    console.log(i); // 5, 4, 3, 2, 1
}

// 2씩 증가
for (let i = 0; i < 10; i += 2) {
    console.log(i); // 0, 2, 4, 6, 8
}
```

### while 문
```javascript
let count = 0;

while (count < 5) {
    console.log(count);
    count++;
}

// 무한 루프 (조건을 잘못 설정하면 발생)
// while (true) {
//     console.log("멈추지 않습니다!");
// }
```

### do-while 문
```javascript
let num = 0;

do {
    console.log(num);
    num++;
} while (num < 5);

// 최소 1번은 실행됨
let x = 10;
do {
    console.log("실행됨!"); // 조건이 false여도 1번 실행
} while (x < 5);
```

### for...of 문 (배열)
```javascript
const fruits = ["사과", "바나나", "오렌지"];

for (const fruit of fruits) {
    console.log(fruit);
}

// 인덱스도 필요한 경우
for (const [index, fruit] of fruits.entries()) {
    console.log(`${index}: ${fruit}`);
}
```

### for...in 문 (객체)
```javascript
const person = {
    name: "홍길동",
    age: 25,
    city: "서울"
};

for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}
// name: 홍길동
// age: 25
// city: 서울
```

### break와 continue
```javascript
// break: 반복문 종료
for (let i = 0; i < 10; i++) {
    if (i === 5) break;
    console.log(i); // 0, 1, 2, 3, 4
}

// continue: 현재 반복 건너뛰기
for (let i = 0; i < 5; i++) {
    if (i === 2) continue;
    console.log(i); // 0, 1, 3, 4 (2는 건너뜀)
}
```

---

## 함수

### 함수 선언식
```javascript
function greet(name) {
    return `안녕하세요, ${name}님!`;
}

console.log(greet("홍길동")); // 안녕하세요, 홍길동님!

// 여러 매개변수
function add(a, b) {
    return a + b;
}

// 기본 매개변수 (ES6)
function greetWithDefault(name = "손님") {
    return `환영합니다, ${name}님!`;
}

console.log(greetWithDefault());        // 환영합니다, 손님님!
console.log(greetWithDefault("김철수")); // 환영합니다, 김철수님!
```

### 함수 표현식
```javascript
const subtract = function(a, b) {
    return a - b;
};

console.log(subtract(10, 3)); // 7

// 익명 함수 (이름 없는 함수)
setTimeout(function() {
    console.log("3초 후 실행");
}, 3000);
```

### 화살표 함수 (Arrow Function, ES6)
```javascript
// 기본 형태
const multiply = (a, b) => {
    return a * b;
};

// 간단한 형태 (중괄호와 return 생략)
const divide = (a, b) => a / b;

// 매개변수가 하나일 때 괄호 생략
const square = x => x * x;

// 매개변수가 없을 때
const sayHello = () => "Hello!";

// 객체 반환 시 괄호 필요
const makePerson = (name, age) => ({name, age});
```

### 나머지 매개변수 (Rest Parameters)
```javascript
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3));        // 6
console.log(sum(1, 2, 3, 4, 5));  // 15
```

### 콜백 함수
```javascript
function processArray(arr, callback) {
    for (let item of arr) {
        callback(item);
    }
}

processArray([1, 2, 3], num => console.log(num * 2));
// 2, 4, 6
```

### 고차 함수
```javascript
// 함수를 반환하는 함수
function makeMultiplier(multiplier) {
    return function(x) {
        return x * multiplier;
    };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log(double(5));  // 10
console.log(triple(5));  // 15
```

---

## 배열

### 배열 생성
```javascript
// 리터럴 방식 (권장)
const fruits = ["사과", "바나나", "오렌지"];

// 생성자 방식
const numbers = new Array(1, 2, 3, 4, 5);

// 빈 배열
const empty = [];
```

### 배열 접근 및 수정
```javascript
const fruits = ["사과", "바나나", "오렌지"];

console.log(fruits[0]);    // "사과"
console.log(fruits.length); // 3

fruits[1] = "딸기";         // 수정
console.log(fruits);        // ["사과", "딸기", "오렌지"]
```

### 배열 메서드 - 추가/삭제

```javascript
const arr = [1, 2, 3];

// push: 끝에 추가
arr.push(4);           // [1, 2, 3, 4]

// pop: 끝에서 제거
arr.pop();             // [1, 2, 3]

// unshift: 앞에 추가
arr.unshift(0);        // [0, 1, 2, 3]

// shift: 앞에서 제거
arr.shift();           // [1, 2, 3]

// splice: 특정 위치에서 추가/삭제
arr.splice(1, 1);      // [1, 3] (인덱스 1에서 1개 제거)
arr.splice(1, 0, 2);   // [1, 2, 3] (인덱스 1에 2 추가)
```

### 배열 메서드 - 검색

```javascript
const numbers = [1, 2, 3, 4, 5];

// indexOf: 요소의 인덱스 찾기
numbers.indexOf(3);        // 2
numbers.indexOf(10);       // -1 (없으면)

// includes: 포함 여부
numbers.includes(3);       // true
numbers.includes(10);      // false

// find: 조건에 맞는 첫 번째 요소
const found = numbers.find(n => n > 3);  // 4

// findIndex: 조건에 맞는 첫 번째 인덱스
const index = numbers.findIndex(n => n > 3);  // 3
```

### 배열 메서드 - 변환

```javascript
const numbers = [1, 2, 3, 4, 5];

// map: 각 요소를 변환
const doubled = numbers.map(n => n * 2);
// [2, 4, 6, 8, 10]

// filter: 조건에 맞는 요소만 선택
const evens = numbers.filter(n => n % 2 === 0);
// [2, 4]

// reduce: 하나의 값으로 축약
const sum = numbers.reduce((acc, n) => acc + n, 0);
// 15

// slice: 배열 일부 추출 (원본 유지)
const sliced = numbers.slice(1, 4);
// [2, 3, 4]

// concat: 배열 합치기
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = arr1.concat(arr2);
// [1, 2, 3, 4]

// join: 문자열로 변환
const joined = numbers.join(", ");
// "1, 2, 3, 4, 5"

// sort: 정렬
const unsorted = [3, 1, 4, 1, 5, 9];
unsorted.sort((a, b) => a - b);  // 오름차순
// [1, 1, 3, 4, 5, 9]

// reverse: 역순
numbers.reverse();
// [5, 4, 3, 2, 1]
```

### 배열 메서드 - 반복

```javascript
const fruits = ["사과", "바나나", "오렌지"];

// forEach: 각 요소에 대해 실행
fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});

// every: 모든 요소가 조건을 만족하는지
const numbers = [2, 4, 6, 8];
const allEven = numbers.every(n => n % 2 === 0);  // true

// some: 하나라도 조건을 만족하는지
const hasOdd = numbers.some(n => n % 2 !== 0);    // false
```

### 스프레드 연산자 (...)

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// 배열 합치기
const combined = [...arr1, ...arr2];
// [1, 2, 3, 4, 5, 6]

// 배열 복사
const copied = [...arr1];
// [1, 2, 3]

// 배열 요소를 함수 인수로
const numbers = [1, 2, 3];
console.log(Math.max(...numbers));  // 3
```

---

## 객체

### 객체 생성

```javascript
// 리터럴 방식 (권장)
const person = {
    name: "홍길동",
    age: 25,
    city: "서울"
};

// 생성자 방식
const car = new Object();
car.brand = "현대";
car.model = "소나타";
```

### 속성 접근 및 수정

```javascript
const person = {
    name: "홍길동",
    age: 25,
    city: "서울"
};

// 점 표기법
console.log(person.name);   // "홍길동"

// 대괄호 표기법
console.log(person["age"]); // 25

// 변수를 키로 사용
const key = "city";
console.log(person[key]);   // "서울"

// 속성 수정
person.age = 26;

// 속성 추가
person.job = "개발자";

// 속성 삭제
delete person.city;
```

### 메서드

```javascript
const person = {
    name: "홍길동",
    age: 25,
    // 메서드 정의
    greet: function() {
        console.log(`안녕하세요, ${this.name}입니다.`);
    },
    // ES6 축약 문법
    introduce() {
        console.log(`제 나이는 ${this.age}살입니다.`);
    }
};

person.greet();      // "안녕하세요, 홍길동입니다."
person.introduce();  // "제 나이는 25살입니다."
```

### this 키워드

```javascript
const person = {
    name: "홍길동",
    greet: function() {
        console.log(this.name);  // this는 person 객체를 가리킴
    }
};

// 화살표 함수에서의 this
const person2 = {
    name: "김철수",
    greet: () => {
        console.log(this.name);  // this는 상위 스코프를 가리킴 (주의!)
    }
};
```

### 객체 순회

```javascript
const person = {
    name: "홍길동",
    age: 25,
    city: "서울"
};

// for...in
for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}

// Object.keys()
Object.keys(person).forEach(key => {
    console.log(`${key}: ${person[key]}`);
});

// Object.values()
Object.values(person).forEach(value => {
    console.log(value);
});

// Object.entries()
Object.entries(person).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});
```

### 객체 복사

```javascript
const original = {name: "홍길동", age: 25};

// 얕은 복사 (Shallow Copy)
const copy1 = {...original};
const copy2 = Object.assign({}, original);

// 중첩 객체의 경우 주의!
const nested = {
    name: "홍길동",
    address: {city: "서울", district: "강남"}
};

const shallowCopy = {...nested};
shallowCopy.address.city = "부산";
console.log(nested.address.city);  // "부산" (원본도 변경됨!)

// 깊은 복사 (Deep Copy)
const deepCopy = JSON.parse(JSON.stringify(nested));
```

---

## ES6+ 주요 기능

### 템플릿 리터럴 (Template Literals)

```javascript
const name = "홍길동";
const age = 25;

// 기존 방식
const message1 = "안녕하세요, " + name + "님! 나이는 " + age + "살이네요.";

// 템플릿 리터럴
const message2 = `안녕하세요, ${name}님! 나이는 ${age}살이네요.`;

// 여러 줄 문자열
const multiLine = `
    첫 번째 줄
    두 번째 줄
    세 번째 줄
`;

// 표현식 사용
const result = `2 + 3 = ${2 + 3}`;  // "2 + 3 = 5"
```

### 구조 분해 할당 (Destructuring)

**배열 구조 분해**
```javascript
const numbers = [1, 2, 3, 4, 5];

// 기존 방식
const first = numbers[0];
const second = numbers[1];

// 구조 분해
const [a, b, c] = numbers;
console.log(a, b, c);  // 1, 2, 3

// 일부만 추출
const [x, , z] = numbers;  // 1, 3

// 나머지 요소
const [head, ...rest] = numbers;
console.log(head);  // 1
console.log(rest);  // [2, 3, 4, 5]
```

**객체 구조 분해**
```javascript
const person = {
    name: "홍길동",
    age: 25,
    city: "서울"
};

// 기존 방식
const name = person.name;
const age = person.age;

// 구조 분해
const {name, age, city} = person;

// 다른 변수명으로
const {name: userName, age: userAge} = person;

// 기본값 설정
const {name, job = "무직"} = person;
console.log(job);  // "무직"

// 나머지 속성
const {name, ...others} = person;
console.log(others);  // {age: 25, city: "서울"}
```

### 스프레드 연산자 (Spread Operator)

```javascript
// 배열
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];  // [1, 2, 3, 4, 5, 6]

// 객체
const person = {name: "홍길동", age: 25};
const job = {company: "ABC", position: "개발자"};
const employee = {...person, ...job};
// {name: "홍길동", age: 25, company: "ABC", position: "개발자"}

// 함수 인수
const numbers = [1, 5, 3, 9, 2];
console.log(Math.max(...numbers));  // 9
```

### Rest 파라미터

```javascript
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3));        // 6
console.log(sum(1, 2, 3, 4, 5));  // 15

// 일반 매개변수와 함께 사용
function introduce(name, age, ...hobbies) {
    console.log(`이름: ${name}`);
    console.log(`나이: ${age}`);
    console.log(`취미: ${hobbies.join(", ")}`);
}

introduce("홍길동", 25, "독서", "운동", "영화");
```

### 단축 속성명 (Property Shorthand)

```javascript
const name = "홍길동";
const age = 25;

// 기존 방식
const person1 = {
    name: name,
    age: age
};

// 단축 문법
const person2 = {name, age};
```

### 계산된 속성명 (Computed Property Names)

```javascript
const key = "name";
const value = "홍길동";

const obj = {
    [key]: value,
    [`${key}Length`]: value.length
};

console.log(obj);  // {name: "홍길동", nameLength: 3}
```

### 선택적 체이닝 (Optional Chaining, ES2020)

```javascript
const user = {
    name: "홍길동",
    address: {
        city: "서울"
    }
};

// 기존 방식
const city = user && user.address && user.address.city;

// 선택적 체이닝
const city2 = user?.address?.city;  // "서울"
const zipCode = user?.address?.zipCode;  // undefined (오류 없음)

// 함수 호출
const result = user.getName?.();  // getName이 없어도 오류 없음

// 배열
const firstItem = arr?.[0];
```

### Nullish 병합 연산자 (Nullish Coalescing, ES2020)

```javascript
// || 연산자의 문제점
const value1 = 0 || "기본값";  // "기본값" (0은 falsy)
const value2 = "" || "기본값";  // "기본값" ("" 는 falsy)

// ?? 연산자 (null이나 undefined만 체크)
const value3 = 0 ?? "기본값";  // 0
const value4 = "" ?? "기본값";  // ""
const value5 = null ?? "기본값";  // "기본값"
const value6 = undefined ?? "기본값";  // "기본값"
```

### Promise와 async/await

**Promise**
```javascript
// Promise 생성
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve("데이터 로드 성공!");
            } else {
                reject("데이터 로드 실패!");
            }
        }, 1000);
    });
};

// Promise 사용
fetchData()
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

**async/await**
```javascript
async function loadData() {
    try {
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

loadData();
```

### 클래스 (Class)

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        console.log(`안녕하세요, ${this.name}입니다.`);
    }
    
    // Getter
    get info() {
        return `${this.name} (${this.age}살)`;
    }
    
    // Setter
    set birthYear(year) {
        this.age = new Date().getFullYear() - year;
    }
    
    // 정적 메서드
    static compare(person1, person2) {
        return person1.age - person2.age;
    }
}

// 인스턴스 생성
const person = new Person("홍길동", 25);
person.greet();

// 상속
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);  // 부모 생성자 호출
        this.grade = grade;
    }
    
    study() {
        console.log(`${this.name}이(가) 공부합니다.`);
    }
}

const student = new Student("김철수", 20, 3);
student.greet();  // 상속받은 메서드
student.study();  // 자신의 메서드
```

### 모듈 (Module)

**내보내기 (Export)**
```javascript
// math.js
export const PI = 3.14159;

export function add(a, b) {
    return a + b;
}

export class Calculator {
    multiply(a, b) {
        return a * b;
    }
}

// 기본 내보내기
export default function subtract(a, b) {
    return a - b;
}
```

**가져오기 (Import)**
```javascript
// main.js
import subtract, {PI, add, Calculator} from './math.js';

console.log(PI);
console.log(add(5, 3));

const calc = new Calculator();
console.log(calc.multiply(4, 5));

console.log(subtract(10, 3));
```

---

## 추가 학습 주제

자바스크립트 기초를 마스터한 후 다음 주제들을 학습하면 좋습니다:

1. **DOM 조작** - 웹 페이지 요소 제어
2. **이벤트 처리** - 클릭, 입력 등의 사용자 동작 처리
3. **비동기 프로그래밍** - Promise, async/await 심화
4. **에러 처리** - try-catch, 에러 객체
5. **정규표현식** - 문자열 패턴 매칭
6. **localStorage & sessionStorage** - 브라우저 저장소
7. **Fetch API** - 서버와 통신
8. **프레임워크/라이브러리** - React, Vue, Angular 등

---

## 마무리

이 문서는 자바스크립트의 핵심 개념들을 다루고 있습니다. 실제 프로젝트를 진행하면서 이 개념들을 적용해보는 것이 가장 좋은 학습 방법입니다. 코딩을 많이 할수록 실력이 향상됩니다!

**추천 학습 자료**
- [MDN Web Docs](https://developer.mozilla.org/ko/docs/Web/JavaScript)
- [JavaScript.info](https://ko.javascript.info/)
- [FreeCodeCamp](https://www.freecodecamp.org/)

**연습 문제 사이트**
- [Programmers](https://programmers.co.kr/)
- [LeetCode](https://leetcode.com/)
- [Codewars](https://www.codewars.com/)

Happy Coding! 🚀

---

# JavaScript 배열 메서드 정리

JavaScript의 주요 배열 메서드들을 예시와 함께 설명합니다.

## 1. forEach()

**배열의 각 요소에 대해 주어진 함수를 실행합니다. 반환값이 없습니다.**

### 형태
```javascript
배열.forEach((요소, 인덱스, 배열) => { })
```

- **요소**: 배열의 각 항목
- **인덱스**: 현재 위치 (생략 가능)
- **배열**: 원본 배열 (생략 가능)
- **반환값**: 없음 (undefined)

### 예시

```javascript
const numbers = [1, 2, 3, 4, 5];

// 각 요소를 출력
numbers.forEach((num) => {
  console.log(num * 2);
});
// 출력: 2, 4, 6, 8, 10

// 인덱스와 배열도 사용 가능
const fruits = ['사과', '바나나', '오렌지'];
fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});
// 출력: 0: 사과, 1: 바나나, 2: 오렌지
```

## 2. map()

**배열의 각 요소를 변환하여 새로운 배열을 반환합니다.**

### 형태
```javascript
const 새배열 = 배열.map((요소, 인덱스, 배열) => { return 변환된값 })
```

- **요소**: 배열의 각 항목
- **인덱스**: 현재 위치 (생략 가능)
- **배열**: 원본 배열 (생략 가능)
- **반환값**: 변환된 값들로 이루어진 새로운 배열

### 예시

```javascript
const numbers = [1, 2, 3, 4, 5];

// 각 요소를 2배로
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// 객체 배열 변환
const users = [
  { name: '김철수', age: 25 },
  { name: '이영희', age: 30 }
];

const names = users.map((user) => user.name);
console.log(names); // ['김철수', '이영희']

// 복잡한 변환
const userInfo = users.map((user) => ({
  ...user,
  isAdult: user.age >= 20
}));
console.log(userInfo);
// [{ name: '김철수', age: 25, isAdult: true }, ...]
```

## 3. filter()

**조건을 만족하는 요소들만 모아 새로운 배열을 반환합니다.**

### 형태
```javascript
const 새배열 = 배열.filter((요소, 인덱스, 배열) => { return 조건 })
```

- **요소**: 배열의 각 항목
- **인덱스**: 현재 위치 (생략 가능)
- **배열**: 원본 배열 (생략 가능)
- **반환값**: 조건이 true인 요소들만 모은 새로운 배열

### 예시

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 짝수만 필터링
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6, 8, 10]

// 객체 배열 필터링
const products = [
  { name: '노트북', price: 1000000 },
  { name: '마우스', price: 30000 },
  { name: '키보드', price: 80000 }
];

const expensive = products.filter((product) => product.price >= 50000);
console.log(expensive);
// [{ name: '노트북', price: 1000000 }, { name: '키보드', price: 80000 }]

// 여러 조건
const users = [
  { name: '김철수', age: 25, active: true },
  { name: '이영희', age: 17, active: true },
  { name: '박민수', age: 30, active: false }
];

const activeAdults = users.filter((user) => user.age >= 18 && user.active);
console.log(activeAdults); // [{ name: '김철수', age: 25, active: true }]
```

## 4. find()

**조건을 만족하는 첫 번째 요소를 반환합니다. 없으면 undefined를 반환합니다.**

### 형태
```javascript
const 찾은요소 = 배열.find((요소, 인덱스, 배열) => { return 조건 })
```

- **요소**: 배열의 각 항목
- **인덱스**: 현재 위치 (생략 가능)
- **배열**: 원본 배열 (생략 가능)
- **반환값**: 조건을 만족하는 첫 번째 요소 (없으면 undefined)

### 예시

```javascript
const numbers = [5, 12, 8, 130, 44];

// 10보다 큰 첫 번째 수
const found = numbers.find((num) => num > 10);
console.log(found); // 12

// 객체 배열에서 찾기
const users = [
  { id: 1, name: '김철수' },
  { id: 2, name: '이영희' },
  { id: 3, name: '박민수' }
];

const user = users.find((user) => user.id === 2);
console.log(user); // { id: 2, name: '이영희' }

// 찾지 못한 경우
const notFound = users.find((user) => user.id === 10);
console.log(notFound); // undefined

// findIndex()와 비교
const index = users.findIndex((user) => user.id === 2);
console.log(index); // 1 (인덱스 반환)
```

## 5. reduce()

**배열의 각 요소에 대해 리듀서 함수를 실행하여 하나의 결과값을 반환합니다.**

### 형태
```javascript
const 결과 = 배열.reduce((누적값, 요소, 인덱스, 배열) => { return 새누적값 }, 초기값)
```

- **누적값**: 이전까지 계산된 값
- **요소**: 배열의 각 항목
- **인덱스**: 현재 위치 (생략 가능)
- **배열**: 원본 배열 (생략 가능)
- **초기값**: 시작할 값 (생략 가능, 생략 시 배열의 첫 요소)
- **반환값**: 모든 요소를 순회하며 누적한 최종 결과값

### 예시

```javascript
const numbers = [1, 2, 3, 4, 5];

// 합계 구하기
const sum = numbers.reduce((accumulator, current) => {
    return accumulator + current;
}, 0); // 0은 초기값
console.log(sum); // 15

// 곱하기
const product = numbers.reduce((acc, cur) => acc * cur, 1);
console.log(product); // 120

// 최댓값 찾기
const max = numbers.reduce((acc, cur) => {
    return cur > acc ? cur : acc;
});
console.log(max); // 5

// 객체로 변환
const fruits = ['사과', '바나나', '사과', '오렌지', '바나나', '사과'];
const count = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});
console.log(count); // { 사과: 3, 바나나: 2, 오렌지: 1 }

// 배열 평탄화
const nested = [[1, 2], [3, 4], [5, 6]];
const flattened = nested.reduce((acc, cur) => acc.concat(cur), []);
console.log(flattened); // [1, 2, 3, 4, 5, 6]

// 복잡한 데이터 가공
const orders = [
    { product: '노트북', quantity: 1, price: 1000000 },
    { product: '마우스', quantity: 2, price: 30000 },
    { product: '키보드', quantity: 1, price: 80000 }
];

const total = orders.reduce((acc, order) => {
    return acc + (order.quantity * order.price);
}, 0);
console.log(total); // 1,140,000
```

## 메서드 조합 사용 예시

```javascript
const students = [
    { name: '김철수', score: 85, class: 'A' },
    { name: '이영희', score: 92, class: 'B' },
    { name: '박민수', score: 78, class: 'A' },
    { name: '최지영', score: 95, class: 'B' }
];

// A반 학생들의 평균 점수
const classAAverage = students
    .filter((student) => student.class === 'A')
    .map((student) => student.score)
    .reduce((acc, score, _, arr) => acc + score / arr.length, 0);

console.log(classAAverage); // 81.5

// 80점 이상 학생 이름 목록
const highScorers = students
    .filter((student) => student.score >= 80)
    .map((student) => student.name);

console.log(highScorers); // ['김철수', '이영희', '최지영']
```

## 주요 차이점 정리

| 메서드 | 반환값 | 원본 배열 변경 | 주요 용도 |
|--------|--------|---------------|-----------|
| forEach | undefined | ❌ | 각 요소에 작업 수행 |
| map | 새 배열 | ❌ | 요소 변환 |
| filter | 새 배열 | ❌ | 조건에 맞는 요소 선택 |
| find | 단일 요소 | ❌ | 조건에 맞는 첫 요소 찾기 |
| reduce | 단일 값 | ❌ | 배열을 하나의 값으로 축약 |

## 핵심 포인트

- **forEach**: 반환값이 없으므로 단순 반복 작업에 사용
- **map**: 변환된 새 배열이 필요할 때 사용
- **filter**: 조건에 맞는 항목만 추출할 때 사용
- **find**: 특정 항목 하나만 찾을 때 사용
- **reduce**: 배열을 단일 값으로 집계할 때 사용

이 메서드들은 모두 함수형 프로그래밍 스타일을 지원하며, 체이닝을 통해 조합하여 사용할 수 있습니다!