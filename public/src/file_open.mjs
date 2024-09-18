import { fn_name } from "./fn_name.mjs";
import { function_run } from "./function_run.mjs";
import { web_is } from "./web_is.mjs";
import { command_line } from "./command_line.mjs";
export async function file_open(file_name) {
  if (web_is()) {
    return;
  }
  await function_run(fn_name("command_line_exec"), [`code ${file_name}`]);
  return;
  await command_line(`start notepad++ ${file_name}`);
}
