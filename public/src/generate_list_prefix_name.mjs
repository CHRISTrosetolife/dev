import { generate_list_prefix_suffix } from "./generate_list_prefix_suffix.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function generate_list_prefix_name(prefix) {
  return string_combine_multiple([prefix, generate_list_prefix_suffix()]);
}
