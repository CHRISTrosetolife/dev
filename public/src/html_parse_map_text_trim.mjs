import { list_map_property_text_trim } from "./list_map_property_text_trim.mjs";
import { list_map } from "./list_map.mjs";
export function html_parse_map_text_trim(parsed, filtered) {
  let mapped = list_map(filtered, (f) => parsed(f));
  let mapped3 = list_map_property_text_trim(mapped);
  return mapped3;
}
