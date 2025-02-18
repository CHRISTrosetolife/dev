import { list_add_first } from "./list_add_first.mjs";
import { git_ac_message } from "./git_ac_message.mjs";
import { process_argv_remaining } from "./process_argv_remaining.mjs";
export async function run_git_ac() {
  let remaining = process_argv_remaining();
  list_add_first(remaining, " ");
  let commit_message = remaining.join(" ");
  await git_ac_message(commit_message);
}
