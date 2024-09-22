import { js_node_is } from "./js_node_is.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function js_node_type_is(node, type) {
  if (!js_node_is(node)) {
    return;
  }
  let result = object_property_get(node, "type") === type;
  return result;
}
