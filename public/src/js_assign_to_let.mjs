import { js_identifiers_scoped } from "./js_identifiers_scoped.mjs";
import { js_code_declare_assign_0 } from "./js_code_declare_assign_0.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { js_node_type_visitor } from "./js_node_type_visitor.mjs";
import { each } from "./each.mjs";
import { object_replace } from "./object_replace.mjs";
import { list_single } from "./list_single.mjs";
export function js_assign_to_let(ast) {
  let ess = js_node_type_visitor(ast, "ExpressionStatement");
  each(ess, function (v) {
    let { node } = v;
    let { expression } = node;
    let { type } = expression;
    if (type === "AssignmentExpression") {
      let { left } = expression;
      if (left.type === "Identifier") {
        let { name } = left;
        let names = js_identifiers_scoped(v);
        if (list_includes_not(names, name)) {
          let parsed = js_code_declare_assign_0(name);
          let { declarations } = parsed;
          let d = list_single(declarations);
          let { right } = expression;
          d.init = right;
          object_replace(node, parsed);
        }
      }
    }
  });
}
