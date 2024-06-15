import { string_split_space } from "./string_split_space.mjs";
import { run_git_ac } from "./run_git_ac.mjs";
import { run_git } from "./run_git.mjs";
import { log } from "./log.mjs";
import readline_sync from "readline-sync";
export async function terminal() {
  let input = readline_sync.question(`> `);
  let tokens = string_split_space(input);
  log(await run_git());
  await run_git_ac();
}
