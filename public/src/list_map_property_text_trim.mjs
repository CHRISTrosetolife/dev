import { string_trim } from "./string_trim.mjs";
import { list_map } from "./list_map.mjs";
export function list_map_property_text_trim(filtered) {
  let mapped = list_map(filtered, (i) => string_trim(i.text()));
  return mapped;
}
