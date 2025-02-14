import { js_node_type_is } from "./js_node_type_is.mjs";
export function js_node_type_not_is(node, type) {
  let v = !js_node_type_is(node, type);
  return v;
}
