import { object_property_get } from "./object_property_get.mjs";
export function html_element_get(parent) {
  return object_property_get(parent, "element");
}
