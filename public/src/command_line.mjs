import { command_line_generic } from "./command_line_generic.mjs";
export async function command_line(command) {
  let options = {};
  return await command_line_generic(command, options);
}
