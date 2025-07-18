import { command_line_git_multiple_options } from "./command_line_git_multiple_options.mjs";
import { date_string_iso } from "./date_string_iso.mjs";
import { git_ac_message_commit } from "./git_ac_message_commit.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { git_ac_message_add } from "./git_ac_message_add.mjs";
export async function git_ac_message_options(commit_message, options) {
  let commands = [
    git_ac_message_add(),
    string_combine_multiple([
      git_ac_message_commit(),
      ' "',
      date_string_iso(),
      " ",
      commit_message,
      '"',
    ]),
  ];
  let v = await command_line_git_multiple_options(commands, options);
  return v;
}
