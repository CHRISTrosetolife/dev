import { command_line_generic } from "./command_line_generic.mjs";
export async function dir(command) {
  let silent = false;
  return await command_line_generic(command, silent);
}
