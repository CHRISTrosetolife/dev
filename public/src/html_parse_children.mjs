import { object_property_get_or } from "./object_property_get_or.mjs";
export function html_parse_children(node) {
  let v = object_property_get_or(node, "children", []);
  return v;
}
