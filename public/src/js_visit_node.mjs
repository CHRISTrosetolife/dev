import { js_visit } from "./js_visit.mjs";
export function js_visit_node(ast, type, lambda) {
  js_visit(ast, lambda_outer);
  function lambda_outer(v) {
    let { node } = v;
    if (node.type !== type) {
      return;
    }
    lambda(v);
  }
}
