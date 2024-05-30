import { each } from "./each.mjs";
import { js_node_type } from "./js_node_type.mjs";
import { object_replace } from "./object_replace.mjs";
import { js_code_declare_assign } from "./js_code_declare_assign.mjs";
import { log } from "./log.mjs";
import { list_single } from "./list_single.mjs";
import { js_unparse } from "./js_unparse.mjs";
export function js_assign_to_let(ast) {
  let ess = js_node_type(ast, "ExpressionStatement");
  each(ess, (node) => {
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
        log(js_unparse(parsed));
        object_replace(node, parsed);
      }
    }
  });
  if (0) {
    a = 1;
  }
}
