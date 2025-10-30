/**
 * 객체
 * const로 선언 해도, 그 안에 속성과 메서드는 변경가능하다.
 */

// key : value pair
const yujin = {
  // 속성
  name: "안유진",
  group: "아이브",

  // 메서드
  dance: function () {
    return `${this.name}이 춤을 춥니다.`;
  },
};

console.log(yujin);
console.log(yujin.name);
console.log(yujin["name"]);
console.log(yujin.dance());

yujin["englishName"] = "An Yoo Jin";
console.log(yujin);
delete yujin["englishName"];
console.log(yujin);

// 모든 key값 가져오기
console.log(Object.keys(yujin));

// 모든 value값 가져오기
console.log(Object.values(yujin));
