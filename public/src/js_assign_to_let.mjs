import { js_visit_node } from "./js_visit_node.mjs";
export function js_assign_to_let(ast) {
  a = 1;
  js_visit_node(ast, "ExpressionStatement", (v) => {
    let { node } = v;
  });
}
