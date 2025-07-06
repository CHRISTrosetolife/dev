
import readline from "readline";export function line_read() {
  let result = new Promise(function (resolve) {
    let rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question("", function (answer) {
      rl.close();
      resolve(answer);
    });
  });
  return result;
}
