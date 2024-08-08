import { string_empty_is } from "./string_empty_is.mjs";
import { file_open } from "./file_open.mjs";
import { function_cache_path } from "./function_cache_path.mjs";
import { string_split_comma } from "./string_split_comma.mjs";
export async function function_cache_path_open_args(fn, args_string) {
  let args = string_empty_is(args_string)
    ? []
    : string_split_comma(args_string);
  let p = function_cache_path(fn, args);
  await file_open(p);
}
