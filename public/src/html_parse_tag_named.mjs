import { html_parse_tag_is } from "./html_parse_tag_is.mjs";
import { equal } from "./equal.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function html_parse_tag_named(parent, tag_name) {
  return (
    html_parse_tag_is(parent) &&
    equal(object_property_get(parent, "name"), tag_name)
  );
}
