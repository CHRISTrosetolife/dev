import { string_trim } from "./string_trim.mjs";
import { list_map } from "./list_map.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function html_parse_map_text_trim(list) {
  assert_arguments_length(arguments, 1);
  let mapped = list_map(list, (m) => string_trim(object_property_get(m.data)));
  return mapped;
}
