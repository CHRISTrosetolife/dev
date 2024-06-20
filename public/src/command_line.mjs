import { command_line_generic } from "./command_line_generic.mjs";
export async function command_line(command) {
  let silent = false;
  return await command_line_generic(command, silent);
}
