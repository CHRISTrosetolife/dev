import { log } from "./log.mjs";
let readline = require("node:readline");
export function terminal() {
  let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question(`What's your name?`, (name) => {
    console.log(`Hi ${name}!`);
    rl.close();
  });
}
