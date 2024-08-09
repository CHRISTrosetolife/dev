import { command_line_exec_generic } from "./command_line_exec_generic.mjs";
export async function command_line_exec(command) {
  return await command_line_exec_generic(command, {});
}
