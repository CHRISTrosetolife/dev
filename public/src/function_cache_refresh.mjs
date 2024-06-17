import { function_cache_delete_if_exists } from "./function_cache_delete_if_exists.mjs";
import { function_cache_name } from "./function_cache_name.mjs";
import { function_run } from "./function_run.mjs";
export async function function_cache_refresh(function_name) {
  await function_cache_delete_if_exists(function_name);
  let cache_name = function_cache_name(function_name);
  return await function_run(cache_name, []);
}
