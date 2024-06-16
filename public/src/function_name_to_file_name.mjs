import { function_path_suffix } from "./function_path_suffix.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function function_name_to_file_name(function_name) {
  return string_combine_multiple([function_name, function_path_suffix()]);
}
