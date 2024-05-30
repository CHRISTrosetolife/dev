import { list_filter_property } from "./list_filter_property.mjs";
import { list_take } from "./list_take.mjs";
import { list_after_or } from "./list_after_or.mjs";
import { js_node_type_visitor } from "./js_node_type_visitor.mjs";
import { each } from "./each.mjs";
import { object_replace } from "./object_replace.mjs";
import { js_code_declare_assign } from "./js_code_declare_assign.mjs";
import { log } from "./log.mjs";
import { list_single } from "./list_single.mjs";
import { list_after } from "./list_after.mjs";
import { list_index } from "./list_index.mjs";
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
          if (s_type === "BlockStatement") {
            let list = list_after(stack, s);
            let item = list_after_or(stack, list, node);
            let index = list_index(list, item);
            let taken = list_take(list, index);
            log({
              taken,
            });
            let filtered = list_filter_property(
              taken,
              "type",
              "VariableDeclaration",
            );
            log({
              filtered,
            });
          }
        });
        if (0) object_replace(node, parsed);
      }
    }
  });
  let b;
  if (0) {
    a = 1;
  }
}
