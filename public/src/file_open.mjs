import { command_line_generic } from "./command_line_generic.mjs";
import { web_is } from "./web_is.mjs";
import { command_line } from "./command_line.mjs";
export async function file_open(file_name) {
  if (web_is()) {
    return;
  }
  let command = `code ${file_name}`;
  await command_line_generic(command, {});
  return;
  await command_line(`start notepad++ ${file_name}`);
}
