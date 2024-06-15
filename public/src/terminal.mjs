import { log } from "./log.mjs";
import readline_sync from "readline-sync";
export function terminal() {
  let name = readline_sync.question(`What's your name?`);
  log(`Hi ${name}!`);
}
