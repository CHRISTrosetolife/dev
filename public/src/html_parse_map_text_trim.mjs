import { html_parse_text } from "./html_parse_text.mjs";
import { list_map } from "./list_map.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export function html_parse_map_text_trim(list) {
  assert_arguments_length(arguments, 1);
  let mapped = list_map(list, (m) => {
    return html_parse_text(m);
  });
  return mapped;
}
