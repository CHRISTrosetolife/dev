import { list_map } from "./list_map.mjs";
import { list_map_property_text_trim } from "./list_map_property_text_trim.mjs";
import { html_parse_a_href_starts_with } from "./html_parse_a_href_starts_with.mjs";
export function html_parse_a_href_starts_with_text(parsed, prefix) {
  let filtered = html_parse_a_href_starts_with(parsed, prefix);
  let mapped = list_map(filtered, (f) => parsed(f));
  let mapped3 = list_map_property_text_trim(mapped);
  return mapped3;
}
