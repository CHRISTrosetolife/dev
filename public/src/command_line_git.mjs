import { command_line_exec_generic } from "./command_line_exec_generic.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export async function command_line_git(args) {
  let command = string_combine_multiple(["git ", args]);
  let v = await command_line_exec_generic(command, {});
  return v;
}
