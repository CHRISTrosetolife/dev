import { function_cache_refresh_args } from "./function_cache_refresh_args.mjs";
import { string_split_comma } from "./string_split_comma.mjs";
export async function function_cache_refresh_args_command_line(
  function_name,
  args_list,
) {
  let args = string_split_comma(args_list);
  let v = await function_cache_refresh_args(function_name, args);
  return v;
}
