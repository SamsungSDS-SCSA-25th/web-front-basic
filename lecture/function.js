/**
 * 함수 선언하는 방법
 */
// 방법1
function hello1() {
  console.log("Hello World!");
}
hello1();

// 방법2
const hello2 = () => {
  console.log("Hello World!");
};
hello2();

/**
 * 인자 여러개 받기
 * @param args
 * @returns {*}
 */
const multiplyAll = (...args) => {
  return Object.values(args).reduce((a, b) => a * b, 1);
};
console.log(multiplyAll(1, 2, 3));
