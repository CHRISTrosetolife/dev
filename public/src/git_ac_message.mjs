import { list_map_async } from "./list_map_async.mjs";
import { git_ac_message_commit } from "./git_ac_message_commit.mjs";
import { git_ac_message_add } from "./git_ac_message_add.mjs";
import { date_string_iso } from "./date_string_iso.mjs";
import { command_line_git } from "./command_line_git.mjs";
export async function git_ac_message(commit_message) {
  let commands = [
    git_ac_message_add(),
    `${git_ac_message_commit()} "${date_string_iso()} ${commit_message}"`,
  ];
  for (let command of commands) {
    await command_line_git(command);
  }
  await list_map_async();
}
