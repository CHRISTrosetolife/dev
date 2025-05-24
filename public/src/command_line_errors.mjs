import { dir } from "./dir.mjs";
export async function command_line_errors(command) {
  let v;
  try {
    await dir(command);
  } catch (e) {
    v = true;
  }
  v = false;
  return v;
}
