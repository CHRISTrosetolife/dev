import { function_run_plugin_string } from "./function_run_plugin_string.mjs";
export async function function_run_plugin(fn, plugin_suffix) {
  let prefix = fn.name;
  return function_run_plugin_string(prefix, plugin_suffix);  
