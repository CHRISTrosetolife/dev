import { function_run_cache } from "./function_run_cache.mjs";
import { file_delete_if_exists } from "./file_delete_if_exists.mjs";
import { function_cache_delete_generic } from "./function_cache_delete_generic.mjs";
export async function function_cache_refresh_args(function_name, args) {
  await function_cache_delete_generic(
    function_name,
    args,
    file_delete_if_exists,
  );
  return await function_run_cache(function_name, args);
}
