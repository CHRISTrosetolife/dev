import { js_node_type_visitor } from "./js_node_type_visitor.mjs";
import { each } from "./each.mjs";
import { object_replace } from "./object_replace.mjs";
import { js_code_declare_assign } from "./js_code_declare_assign.mjs";
import { log } from "./log.mjs";
import { list_single } from "./list_single.mjs";
import { js_unparse } from "./js_unparse.mjs";
export function js_assign_to_let(ast) {
  let ess = js_node_type_visitor(ast, "ExpressionStatement");
  each(ess, (v) => {
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
        let { stack } = v;
        each(stack, (s) => {
          let { type: s_type } = s;
          if (0) {
          }
        });
        log({
          stack,
        });
        log(js_unparse(parsed));
        if (0) object_replace(node, parsed);
      }
    }
  });
  if (0) {
    a = 1;
  }
}
