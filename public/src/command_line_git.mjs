import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { command_line_exec } from "./command_line_exec.mjs";
export async function command_line_git(args) {
  let command = string_combine_multiple(["git ", args]);
  let v = await command_line_exec(command);
  return v;
}
