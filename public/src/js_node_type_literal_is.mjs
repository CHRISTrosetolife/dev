import { js_node_type_is } from "./js_node_type_is.mjs";
export function js_node_type_literal_is(arg) {
  return js_node_type_is(arg, "Literal");
}
