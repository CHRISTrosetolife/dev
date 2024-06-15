import { run_git_ac } from "./run_git_ac.mjs";
import { run } from "./run.mjs";
export async function run_git() {
  let result = await run();
  await run_git_ac();
  return result;
}
