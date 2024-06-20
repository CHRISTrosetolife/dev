import { command_line_exec } from "./command_line_exec.mjs";
import { web_is } from "./web_is.mjs";
import { command_line } from "./command_line.mjs";
export async function file_open(file_name) {
  if (web_is()) {
    return;
  }
  let command = `code ${file_name}`;
  await command_line_exec(command);
  return;
  await command_line(`start notepad++ ${file_name}`);
}
