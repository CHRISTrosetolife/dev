import { web_is } from "./web_is.mjs";
import { command_line } from "./command_line.mjs";
export async function file_open(file_name) {
  if (web_is()) return;
  await command_line(`code ${file_name}`);
}
