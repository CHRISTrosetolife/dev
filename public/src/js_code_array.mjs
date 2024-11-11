import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
export function js_code_array(contents_list) {
  return string_combine_multiple([
    "[",
    list_join_comma_space(contents_list, ", "),
    "]",
  ]);
}
