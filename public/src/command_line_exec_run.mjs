import { fn_name } from "./fn_name.mjs";
import { function_run } from "./function_run.mjs";
export async function command_line_exec_run(command) {
  return await function_run(fn_name("command_line_exec"), [command]);
}
