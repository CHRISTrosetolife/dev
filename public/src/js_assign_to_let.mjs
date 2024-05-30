import { object_replace } from "./object_replace.mjs";
import { js_code_declare_assign } from "./js_code_declare_assign.mjs";
import { log } from "./log.mjs";
import { js_visit_node } from "./js_visit_node.mjs";
import { list_single } from "./list_single.mjs";
export function js_assign_to_let(ast) {
  js_visit_node(ast, "ExpressionStatement", (v) => {
    let { node } = v;
    let { expression } = node;
    let { type } = expression;
    if (type === "AssignmentExpression") {
      let { left } = expression;
      if (left.type === "Identifier") {
        let { name } = left;
        let parsed = js_code_declare_assign(name);
        let { declarations } = parsed;
        let d = list_single(declarations);
        let { right } = expression;
        d.init = right;
        object_replace(node, d);
        log({
          right,
          d,
        });
      }
    }
  });
  if (0) {
    a = 1;
  }
}
