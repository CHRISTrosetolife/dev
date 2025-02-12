import { object_property_get } from "./object_property_get.mjs";
export function js_node_type_get(node) {
  return object_property_get(node, "type");
}
