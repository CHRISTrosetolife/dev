import { object_property_get } from "./object_property_get.mjs";
export function html_parse_parent(parent) {
  return object_property_get(parent, "parent");
}
