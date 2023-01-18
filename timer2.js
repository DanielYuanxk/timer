// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
const timer1 = (alarm) => {
  timer = alarm * 1000;

  setTimeout(() => {
    process.stdout.write("\x07");
  }, timer);
};
const handleUserInput = function (data) {
  if (data === "b") {
    console.log("\x07");
  }
  if (data > 0 && data < 10) {
    console.log(`setting timer for ${data} seconds... `);
    timer1(data);
  }
  if (data === "\u0003") {
    console.log("Thanks for using me, ciao! ");
    process.exit();
  }
};

const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding("utf8");

stdin.on("data", handleUserInput);

// rl.question("", (answer) => {
//   if (answer === "b") {
//     console.log("\x07");
//   }
//   rl.close();
// });

// const timer1 = (alarms) => {
//   for (x of alarms) {
//     timer = x * 1000;
//     if (x > 0 && typeof x !== NaN) {
//       setTimeout(() => {
//         process.stdout.write("\x07");
//       }, timer);
//     }
//   }
// };
