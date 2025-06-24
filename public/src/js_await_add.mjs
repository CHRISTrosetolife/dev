import { js_declaration_single } from "./js_declaration_single.mjs";
import { js_expression_await } from "./js_expression_await.mjs";
import { undefined_not_is } from "./undefined_not_is.mjs";
import { js_function_types_is } from "./js_function_types_is.mjs";
import { js_parent_replace } from "./js_parent_replace.mjs";
import { data_functions } from "./data_functions.mjs";
import { list_before } from "./list_before.mjs";
import { each_reverse } from "./each_reverse.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { js_visit_node } from "./js_visit_node.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { equal } from "./equal.mjs";
export async function js_await_add(ast) {
  let functions = await data_functions();
  let d = js_declaration_single(ast);
  js_visit_node(ast, "CallExpression", function (v) {
    let { node } = v;
    let { callee } = node;
    if (callee.type === "Identifier") {
      let { name } = callee;
      if (object_property_exists(functions, name)) {
        let f = object_property_get(functions, name);
        let { async } = f;
        if (async) {
          let { parent } = v;
          let { type: parent_type } = parent;
          if (parent_type !== "AwaitExpression") {
            let a = js_expression_await(node);
            js_parent_replace(v, node, a);
            let { stack } = v;
            let found = false;
            each_reverse(stack, function (s) {
              if (found) {
                return;
              }
              let { type } = s;
              let asyncable;
              if (equal(type, "BlockStatement")) {
                let after = list_before(stack, s);
                let { type: after_type } = after;
                if (js_function_types_is(after_type)) {
                  asyncable = after;
                }
              }
              if (type === "ArrowFunctionExpression") {
                asyncable = s;
              }
              if (undefined_not_is(asyncable)) {
                object_property_set(asyncable, "async", true);
                found = true;
              }
            });
          }
        }
      }
    }
  });
}
