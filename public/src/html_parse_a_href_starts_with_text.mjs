import { html_parse_a_href_starts_with } from "./html_parse_a_href_starts_with.mjs";
import { string_trim } from "./string_trim.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_map } from "./list_map.mjs";
export function html_parse_a_href_starts_with_text(parsed, prefix) {
  let filtered = html_parse_a_href_starts_with(parsed, prefix);
  let mapped = list_map(filtered, (i) => object_property_get(i, "text"));
  let mapped3 = list_map(mapped, (i) => string_trim(i));
  return mapped3;
}
