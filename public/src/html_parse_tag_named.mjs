import { html_parse_tag_is } from "./html_parse_tag_is.mjs";
import { equal } from "./equal.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function html_parse_tag_named(node, tag_name) {
  return (
    html_parse_tag_is(node) &&
    equal(object_property_get(node, "name"), tag_name)
  );
}
