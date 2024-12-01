import { function_name_separator } from "./function_name_separator.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function function_name_combine(function_name_base, j) {
  return string_combine_multiple([
    function_name_base,
    function_name_separator(),
    j,
  ]);
}
