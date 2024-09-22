import { object_property_get } from "./object_property_get.mjs";
export function js_node_type_is(node, type) {
  let type_equal_is = object_property_get(node, "type") === type;
  return type_equal_is;
}
