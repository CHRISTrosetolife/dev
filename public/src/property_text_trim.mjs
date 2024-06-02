import { object_property_get } from "./object_property_get.mjs";
import { string_trim } from "./string_trim.mjs";
export function property_text_trim(i) {
  return string_trim(object_property_get(i, "text")());
}
