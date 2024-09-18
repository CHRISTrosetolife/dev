import { fn_name } from "./fn_name.mjs";
import { function_run } from "./function_run.mjs";
import { web_is } from "./web_is.mjs";
export async function file_open(file_name) {
  if (web_is()) {
    return;
  }
  let command = `code ${file_name}`;
  await function_run(fn_name("command_line_exec"), [command]);
  return;
  await function_run(fn_name("command_line_exec"), [
    `start notepad++ ${file_name}`,
  ]);
}
