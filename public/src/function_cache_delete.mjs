import { function_cache_path } from "./function_cache_path.mjs";
import { file_delete } from "./file_delete.mjs";
import { string_split_comma } from "./string_split_comma.mjs";
export async function function_cache_delete(function_name, args_string) {
  let args = string_split_comma(args_string);
  let file_path = function_cache_path(function_name, args);
  await file_delete(file_path);
}
