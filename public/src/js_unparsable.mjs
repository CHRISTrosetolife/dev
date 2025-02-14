import { js_node_type_not_is } from "./js_node_type_not_is.mjs";
import { js_node_is } from "./js_node_is.mjs";
export function js_unparsable(node) {
  return js_node_is(node) && js_node_type_not_is(node, "ImportSpecifier");
}
