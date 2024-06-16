import { function_unalias } from "./function_unalias.mjs";
import { function_name_to_file_name } from "./function_name_to_file_name.mjs";
import { function_path_prefix } from "./function_path_prefix.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function function_name_to_path(function_name) {
  function_name = function_unalias(function_name);
  let file_name = function_name_to_file_name(function_name);
  let result = string_combine_multiple([function_path_prefix(), file_name]);
  return result;
}
