import { function_run } from "./function_run.mjs";
import { command_line_exec } from "./command_line_exec.mjs";
import { web_is } from "./web_is.mjs";
import { command_line } from "./command_line.mjs";
export async function file_open(file_name) {
  if (web_is()) {
    return;
  }
  function_run;
  await command_line_exec(`code ${file_name}`);
  return;
  await command_line(`start notepad++ ${file_name}`);
}
