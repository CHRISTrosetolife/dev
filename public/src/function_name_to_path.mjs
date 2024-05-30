import { function_path_suffix } from "./function_path_suffix.mjs";
import { function_path_prefix } from "./function_path_prefix.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function function_name_to_path(function_name) {
  let result = string_combine_multiple([
    function_path_prefix(),
    function_name,
    function_path_suffix(),
  ]);
  return result;
}
