import { function_cache_refresh_args_generic } from "./function_cache_refresh_args_generic.mjs";
import { string_split_comma } from "./string_split_comma.mjs";
export async function function_cache_refresh_args_command_line(
  function_name,
  args_list,
) {
  let args = string_split_comma(args_list);
  let v = await function_cache_refresh_args_generic(function_name, args);
  return v;
}
