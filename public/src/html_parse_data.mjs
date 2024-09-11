import { object_property_get } from "./object_property_get.mjs";
export function html_parse_data(node) {
  let { type } = node;
  if (type === "text") {
    let d = object_property_get(node, "data");
    return d;
  }
  return null;
}
