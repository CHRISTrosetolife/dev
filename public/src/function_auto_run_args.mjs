import { function_run } from "./function_run.mjs";
import { function_auto } from "./function_auto.mjs";
export async function function_auto_run_args(function_name) {
  await function_auto(function_name);
  return await function_run(function_name, []);
}
