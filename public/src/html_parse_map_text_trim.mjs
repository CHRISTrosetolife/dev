import { string_trim } from "./string_trim.mjs";
import { html_parse_text } from "./html_parse_text.mjs";
import { list_map } from "./list_map.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export function html_parse_map_text_trim(list) {
  assert_arguments_length(arguments, 1);
  let m = list_map(list, html_parse_text);
  let m2 = list_map(m, string_trim);
  return m2;
}
