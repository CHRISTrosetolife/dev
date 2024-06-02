import { object_property_get } from "./object_property_get.mjs";
import { equal_not } from "./equal_not.mjs";
export function html_parse_tag_not(parent, tag_name) {
  return equal_not(object_property_get(parent, "name"), tag_name);
}
