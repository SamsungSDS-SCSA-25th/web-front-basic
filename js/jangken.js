const readline = require("readline");

console.log("Happy developing ✨");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let r = parseInt(Math.random() * 3 + 1);

rl.question("가위-1, 바위-2, 보-3: ", (answer) => {
  let u = parseInt(answer);

  if (r === u) {
    console.log("Draw");
  } else if (
    (u === 1 && r === 3) ||
    (u === 2 && r === 1) ||
    (u === 3 && r === 2)
  ) {
    console.log("You Win");
  } else {
    console.log("You Lose");
  }

  console.log(`Computer: ${r}, User: ${u}`);

  rl.close();
});
