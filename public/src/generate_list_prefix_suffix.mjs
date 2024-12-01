import { function_name_separator } from "./function_name_separator.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function generate_list_prefix_suffix() {
  return string_combine_multiple([function_name_separator(), "list"]);
}
