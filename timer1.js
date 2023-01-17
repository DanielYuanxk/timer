const args = process.argv.slice(2);
let timer = 0;

const timer1 = (alarms) => {
  for (x of alarms) {
    timer = x * 1000;
    if (x > 0 && typeof x !== NaN) {
      setTimeout(() => {
        process.stdout.write("\x07");
      }, timer);
    }
  }
};

timer1(args);
