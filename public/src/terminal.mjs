import { log } from "./log.mjs";
import readline from "readline";
export function terminal() {
  let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question(`What's your name?`, (name) => {
    log(`Hi ${name}!`);
    rl.close();
  });
}
