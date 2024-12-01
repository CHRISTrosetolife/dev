import { function_name_combine } from "./function_name_combine.mjs";
import { function_run } from "./function_run.mjs";
export async function function_run_plugin_string(prefix, plugin_suffix) {
  let function_name = function_name_combine(prefix, plugin_suffix);
  return await function_run(function_name, []);
}
