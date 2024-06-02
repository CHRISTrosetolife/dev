import { string_trim } from "./string_trim.mjs";
import { list_map } from "./list_map.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export function html_parse_map_text_trim(list) {
  assert_arguments_length(1);
  let mapped = list_map(list, (l) => parsed(l));
  let mapped2 = list_map(mapped, (m) => string_trim(m.text()));
  return mapped2;
}
