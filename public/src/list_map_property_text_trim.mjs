import { string_trim } from "./string_trim.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_map } from "./list_map.mjs";
export function list_map_property_text_trim(filtered) {
  let mapped = list_map(filtered, (i) => object_property_get(i, "text"));
  let mapped3 = list_map(mapped, (i) => string_trim(i));
  return mapped3;
}
