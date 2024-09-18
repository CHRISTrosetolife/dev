import { command_line_exec_run } from "./command_line_exec_run.mjs";
import { web_is } from "./web_is.mjs";
export async function file_open(file_name) {
  if (web_is()) {
    return;
  }
  await command_line_exec_run(`code ${file_name}`);
  return;
  await command_line_exec_run(`start notepad++ ${file_name}`);
}
