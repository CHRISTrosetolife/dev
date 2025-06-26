import { object_property_get } from "./object_property_get.mjs";
export function html_parse_tag_name(node) {
  let v = object_property_get(node, "name");
  return v;
}
