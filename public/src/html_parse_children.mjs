import { object_property_get_or } from "./object_property_get_or.mjs";
export function html_parse_children(n) {
  return object_property_get_or(n, "children", []);
}
