import { property_text_trim } from "./property_text_trim.mjs";
import { list_map } from "./list_map.mjs";
export function list_map_property_text_trim(filtered) {
  let mapped = list_map(filtered, property_text_trim);
  return mapped;
}
