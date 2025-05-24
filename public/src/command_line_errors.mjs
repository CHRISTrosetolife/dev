import { command_line } from "./command_line.mjs";
export async function command_line_errors(command) {
  let v;
  try {
    await command_line(command);
  } catch (e) {
    v = true;
  }
  v = false;
  return v;
}
