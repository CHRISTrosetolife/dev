import { command_line_git_options } from "./command_line_git_options.mjs";
export async function command_line_git(args) {
  let options = {};
  let v = await command_line_git_options(args, options);
  return v;
}
