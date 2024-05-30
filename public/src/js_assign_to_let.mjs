import { js_code_declare_assign } from "./js_code_declare_assign.mjs";
import { log } from "./log.mjs";
import { js_visit_node } from "./js_visit_node.mjs";
import { list_single } from "./list_single.mjs";
export function js_assign_to_let(ast) {
  js_visit_node(ast, "ExpressionStatement", (v) => {
    let { node } = v;
    let { expression } = node;
    let { type, left } = expression;
    if (type === "AssignmentExpression") {
      if (left.type === "Identifier") {
        let { name } = left;
        let parsed = js_code_declare_assign(name);
        let { declarations } = parsed;
        let d = list_single(declarations);
        log({
          d,
        });
      }
    }
  });
  if (0) a = 1;
}
