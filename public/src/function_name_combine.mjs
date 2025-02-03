import { function_name_separator } from "./function_name_separator.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function function_name_combine(left, right) {
  return string_combine_multiple([left, function_name_separator(), right]);
}
