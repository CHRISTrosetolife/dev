import { js_visit_node } from "./js_visit_node.mjs";
export function js_assign_to_let(ast) {
  js_visit_node(ast, "ExpressionStatement", (v) => {
    let { node } = v;log({node})//
  });
  if (0) a = 1;
}
