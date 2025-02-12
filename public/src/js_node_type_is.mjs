import { js_node_type_get } from "./js_node_type_get.mjs";
import { js_node_is } from "./js_node_is.mjs";
export function js_node_type_is(node, type) {
  if (!js_node_is(node)) {
    return false;
  }
  let result = js_node_type_get(node) === type;
  return result;
}
