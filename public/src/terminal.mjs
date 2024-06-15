import { run_git_ac } from "./run_git_ac.mjs";
import { run_git } from "./run_git.mjs";
import { log } from "./log.mjs";
import readline_sync from "readline-sync";
export async function terminal() {
  let name = readline_sync.question(`> `);
  log(await run_git());
  await run_git_ac();
}
