import { command_line_git_multiple } from "./command_line_git_multiple.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export async function git_fix() {
  let commands = string_combine_multiple([
    "checkout master",
    "fetch",
    "rebase origin/master",
    "push origin master:master",
  ]);
  return await command_line_git_multiple(commands);
}
