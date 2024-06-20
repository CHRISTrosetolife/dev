import { command_line_generic } from "./command_line_generic.mjs";
export async function command_line_silent(command) {
  return await command_line_generic(command, true);
}
