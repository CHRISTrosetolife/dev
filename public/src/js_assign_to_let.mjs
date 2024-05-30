import { list_includes_not } from "./list_includes_not.mjs";
import { equal } from "./equal.mjs";
import { assert } from "./assert.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_adder } from "./list_adder.mjs";
import { js_unparse } from "./js_unparse.mjs";
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
        let names = list_adder((la) => {
          let { stack } = v;
          each(stack, (s) => {
            log({
              s,
            });
            let { type: s_type } = s;
            if (s_type === "BlockStatement") {
              let list = list_after(stack, s);
              let item = list_after_or(stack, list, node);
              let index = list_index(list, item);
              let taken = list_take(list, index);
              let filtered = list_filter_property(
                taken,
                "type",
                "VariableDeclaration",
              );
              each(filtered, (f) => {
                let { declarations } = f;
                let mapped = list_map_property(declarations, "id");
                each(mapped, (m) => {
                  let { type: m_type } = m;
                  assert(equal, [m_type, "Identifier"]);
                  let { name: m_name } = m;
                  la(m_name);
                });
              });
            } else if (s_type === "FunctionDeclaration") {
            }
          });
        });
        if (list_includes_not(names, name)) {
          let parsed = js_code_declare_assign(name);
          let { declarations } = parsed;
          let d = list_single(declarations);
          let { right } = expression;
          d.init = right;
          log(js_unparse(parsed));
          if (0) object_replace(node, parsed);
        }
      }
    }
  });
  let b;
  if (0) {
    let c;
    a = 1;
  }
}
