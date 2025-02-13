import { object_property_get } from "./object_property_get.mjs";
export function html_child_nodes(parent) {
  let v = object_property_get(parent, "childNodes");
  return v;
}
