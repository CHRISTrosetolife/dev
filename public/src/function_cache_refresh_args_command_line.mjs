import { string_split_comma } from "./string_split_comma.mjs";
import { function_run_cache } from "./function_run_cache.mjs";
import { file_delete_if_exists } from "./file_delete_if_exists.mjs";
import { function_cache_delete_generic } from "./function_cache_delete_generic.mjs";
export async function function_cache_refresh_args_command_line(
  function_name,
  args_list,
) {
  let args = string_split_comma(args_list);
  await function_cache_delete_generic(
    function_name,
    args,
    file_delete_if_exists,
  );
  return await function_run_cache(function_name, args);
}
