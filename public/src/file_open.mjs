import { command_line_generic } from "./command_line_generic.mjs";
import { web_is } from "./web_is.mjs";
import { command_line } from "./command_line.mjs";
export async function file_open(file_name) {
  if (web_is()) {
    return;
  }
  await command_line_generic(`code ${file_name}`, {});
  return;
  await command_line(`start notepad++ ${file_name}`);
}
