import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_visit } from "./js_visit.mjs";
export function js_visit_node(ast, type, lambda) {
  js_visit(ast, lambda_outer);
  function lambda_outer(v) {
    let { node } = v;
    if (js_node_type_is(node, type)) {
      lambda(v);
    }
  }
}
