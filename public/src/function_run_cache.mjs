import { function_run } from "./function_run.mjs";
import { function_cache_name } from "./function_cache_name.mjs";
export async function function_run_cache(function_name, args) {
  let cache_name = function_cache_name(function_name);
  return await function_run(cache_name, args);
}
