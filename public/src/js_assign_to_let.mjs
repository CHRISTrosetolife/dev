import { js_code_declare_assign } from "./js_code_declare_assign.mjs";
import { log } from "./log.mjs";
import { js_visit_node } from "./js_visit_node.mjs";
export function js_assign_to_let(ast) {
  js_visit_node(ast, "ExpressionStatement", (v) => {
    let { node } = v;
    let { expression } = node;
    let { type, left } = expression;
    if (type === "AssignmentExpression") {
      if (left.type === "Identifier") {
        let { name } = left;
        log({
          left,
        });
        if (0) {
          let parsed = js_code_declare_assign();
        }
      }
    }
  });
  if (0) a = 1;
}
