/**
 * 배열 함수
 */

let iveMembers = ["안유진", "가을", "레이", "장원영", "리즈", "이서"];

console.log(iveMembers);

/**
 * 기존 객체의 값을 바꿈
 */

// 마지막
// push() - 마지막에 원소 추가 및 길이 반환
iveMembers.push("코드팩토리");
console.log(iveMembers);

// pop() - 마지막 원소 삭제 및 반환
iveMembers.pop();
console.log(iveMembers);

// 첫번째
// unshift() - 첫번째 원소 추가 및 길이 반환
iveMembers.unshift("Eric");
console.log(iveMembers);

// shift() - 첫번째 원소 삭제 및 반환
iveMembers.shift();
console.log(iveMembers);

// splice(0, 2) - 0번째 인덱스부터 2개 pop
iveMembers.splice(0, 2);
console.log(iveMembers);

console.log("----------------------------");

/**
 * 불변 프로그래밍에서 많이 쓰이는 메서드
 * "새로운 객체"를 만들어서 반환해줌
 */

iveMembers = ["안유진", "가을", "레이", "장원영", "리즈", "이서"];

// push -> concat
const _2xiveMembers = iveMembers.concat(iveMembers);
console.log(_2xiveMembers);

// splice -> slice
console.log(iveMembers.slice(0, 3));
console.log(iveMembers); // 기존 값 불변

// spread operator -> 객체 깊은 복사
let iveMembers2 = [...iveMembers];
console.log(iveMembers2);

/**
 * 실무에서 많이 쓰는 메서드 소개
 */

// join() : array -> string
console.log(iveMembers.join(", "));

// 정렬 메서드 -> 기존 객체 바뀜
iveMembers.sort();
console.log(iveMembers);
iveMembers.reverse();
console.log(iveMembers);

// map() - 배열 순회하며 map 로직 적용
// 원래 객체를 바꾸지 않는다.
console.log(iveMembers.map((x) => `아이브: ${x}`));

console.log(
  iveMembers.map((x) => {
    if (x === "장원영") {
      return `아이브: ${x}`;
    } else {
      return x;
    }
  }),
);

numbers = [1, 8, 7, 6, 3];

// filter() - 조건에 맞춰 필터링
// 원래 객체를 바꾸지 않는다.
console.log(numbers.filter((x) => x % 2 == 0));

// find() - filter와 다르게 첫번째 값만 반환
console.log(numbers.find((x) => x % 2 == 0));
console.log(numbers.findIndex((x) => x % 2 == 0));

// reduce() - 계산
// p: 누적값, n: 대상, 0: 초기값
console.log(numbers.reduce((p, n) => p + n, 0));
