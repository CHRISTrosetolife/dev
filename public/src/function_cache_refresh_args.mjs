import { file_delete_if_exists } from "./file_delete_if_exists.mjs";
import { function_cache_delete_generic } from "./function_cache_delete_generic.mjs";
import { function_cache_name } from "./function_cache_name.mjs";
import { function_run } from "./function_run.mjs";
export async function function_cache_refresh_args(function_name, args_list) {
  let args = list_split_comma(args_list);
  await function_cache_delete_generic(function_name, [], file_delete_if_exists);
  let cache_name = function_cache_name(function_name);
  return await function_run(cache_name, args);
}
