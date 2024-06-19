import { function_cache_path } from "./function_cache_path.mjs";
import { string_split_comma } from "./string_split_comma.mjs";
export function function_cache_path_open(fn, args_string) {
  let args = string_split_comma(args_string);
  let p = function_cache_path(fn, args);
}
