import { equal } from "./equal.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function html_parse_tag(parent, tag_name) {
  return equal(object_property_get(parent, "name"), tag_name);
}
