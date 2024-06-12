import { function_cache_path } from "./function_cache_path.mjs";
import { file_delete } from "./file_delete.mjs";
import { string_split_comma } from "./string_split_comma.mjs";
export async function function_cache_delete_args(function_name, args_string) {
  let args = string_split_comma(args_string);
  await function_cache_delete_generic(function_name, args);
}
async function function_cache_delete_generic(function_name, args) {
    let file_path = function_cache_path(function_name, args);
    await file_delete(file_path);
}

