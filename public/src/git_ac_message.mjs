import { date_string_iso } from "./date_string_iso.mjs";
import { command_line_git } from "./command_line_git.mjs";
export async function git_ac_message(commit_message) {
  let commands = ["add *", `commit -m "${date_string_iso()}${commit_message}"`];
  for (let command of commands) {
    await command_line_git(command);
  }
}
