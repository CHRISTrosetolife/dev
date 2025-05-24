import { command_line } from "./command_line.mjs";
export async function command_line_errors(command) {
  let v = false;
  try {
    await command_line(command);
  } catch (e) {
    v = true;
  }
  return v;
}
