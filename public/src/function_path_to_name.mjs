import { string_without_surround } from "./string_without_surround.mjs";
import { function_path_prefix } from "./function_path_prefix.mjs";
import { function_path_suffix } from "./function_path_suffix.mjs";
export function function_path_to_name(function_path) {
  let prefix = function_path_prefix();
  let suffix = function_path_suffix();
  return string_without_surround(function_path, prefix, suffix);
}
