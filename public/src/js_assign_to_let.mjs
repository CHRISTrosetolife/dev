import { log } from "./log.mjs";
import { js_visit_node } from "./js_visit_node.mjs";
export function js_assign_to_let(ast) {
  js_visit_node(ast, "ExpressionStatement", (v) => {
    let { node } = v;
    let { expression } = node;
    log({
      node,
    });
    if (expression === "AssignmentExpression") {
    }
  });
  if (0) a = 1;
}
