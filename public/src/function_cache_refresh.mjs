import { function_run_cache } from "./function_run_cache.mjs";
import { function_cache_delete_if_exists } from "./function_cache_delete_if_exists.mjs";
export async function function_cache_refresh(function_name) {
  await function_cache_delete_if_exists(function_name);
  return await function_run_cache(function_name, []);
}
