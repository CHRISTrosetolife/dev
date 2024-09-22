import { object_property_get } from "./object_property_get.mjs";
export function js_node_type_is(node, type) {
  let result = object_property_get(node, "type") === type;
  return result;
}
