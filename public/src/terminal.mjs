import { log } from "./log.mjs";
import readline_sync from "readline-sync";
export function terminal() {
  let name = readline_sync.question(`> `);
  log(`Hi ${name}!`);
}
