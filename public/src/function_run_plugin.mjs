import { function_run } from "./function_run.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export async function function_run_plugin(fn, plugin_suffix) {
  let function_name = string_combine_multiple([fn.name, "_", plugin_suffix]);
  return await function_run(function_name, []);
}
