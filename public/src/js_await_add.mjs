import { log } from "./log.mjs";
import { js_function_types_is } from "./js_function_types_is.mjs";
import { js_parent_replace } from "./js_parent_replace.mjs";
import { data_functions } from "./data_functions.mjs";
import { list_before } from "./list_before.mjs";
import { each_reverse } from "./each_reverse.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { js_visit_node } from "./js_visit_node.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { equal } from "./equal.mjs";
export async function js_await_add(ast) {
  let functions = await data_functions();
  js_visit_node(ast, "CallExpression", (v) => {
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
            let parsed = js_parse_expression("await 0");
            parsed.argument = node;
            js_parent_replace(v, node, parsed);
            let { stack } = v;
            let found = false;
            log({
              stack,
            });
            each_reverse(stack, (s) => {
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
              if (defined_is(asyncable)) {
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
