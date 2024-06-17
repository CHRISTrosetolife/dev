import { file_delete } from "./file_delete.mjs";
import { function_cache_delete_generic } from "./function_cache_delete_generic.mjs";
import { string_split_comma } from "./string_split_comma.mjs";
export async function function_cache_delete_args(function_name, args_string) {
  let args = string_split_comma(args_string);
  await function_cache_delete_generic(function_name, args, file_delete);
}
