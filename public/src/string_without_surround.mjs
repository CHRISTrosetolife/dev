import { string_suffix_without } from "./string_suffix_without.mjs";
import { string_prefix_without } from "./string_prefix_without.mjs";
export function string_without_surround(function_path, prefix, suffix) {
  function_path = string_prefix_without(function_path, prefix);
  function_path = string_suffix_without(function_path, suffix);
  return function_path;
}
