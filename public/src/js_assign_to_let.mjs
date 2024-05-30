import { log } from "./log.mjs";
import { js_visit_node } from "./js_visit_node.mjs";
import { js_parse } from "./js_parse.mjs";
export function js_assign_to_let(ast) {
  js_visit_node(ast, "ExpressionStatement", (v) => {
    let { node } = v;
    let { expression } = node;
    let { type, left } = expression;
    if (type === "AssignmentExpression") {if (left.type==='Identifier'){}
      log({
        left,
      });
    }
  });
  if (0) a = 1;
}
