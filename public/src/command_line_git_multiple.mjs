import { command_line_git_multiple_options } from "./command_line_git_multiple_options.mjs";
export async function command_line_git_multiple(commands) {
  let options = {};
  let v = await command_line_git_multiple_options(commands, options);
  return v;
}
