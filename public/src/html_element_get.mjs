import { object_property_get } from "./object_property_get.mjs";
export function html_element_get(parent) {
  let v = object_property_get(parent, "element");
  return v;
}
