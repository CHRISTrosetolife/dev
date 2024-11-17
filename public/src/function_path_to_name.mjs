import { function_path_prefix } from "./function_path_prefix.mjs";
import { function_path_suffix } from "./function_path_suffix.mjs";
import { string_prefix_without } from "./string_prefix_without.mjs";
import { string_suffix_without } from "./string_suffix_without.mjs";
export function function_path_to_name(function_path) {
  let prefix = function_path_prefix();
  function_path = string_prefix_without(function_path, prefix);
  let suffix = function_path_suffix();
  function_path = string_suffix_without(function_path, suffix);
  return function_path;
}
