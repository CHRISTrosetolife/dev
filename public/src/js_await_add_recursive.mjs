import { data_functions_async_set } from "./data_functions_async_set.mjs";
import { js_asyncify_recursive } from "./js_asyncify_recursive.mjs";
import { assert } from "./assert.mjs";
import { list_remove_last } from "./list_remove_last.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { log } from "./log.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { undefined_not_is } from "./undefined_not_is.mjs";
import { js_function_types_is } from "./js_function_types_is.mjs";
import { list_before } from "./list_before.mjs";
import { equal } from "./equal.mjs";
import { each_reverse } from "./each_reverse.mjs";
import { js_parent_replace } from "./js_parent_replace.mjs";
import { js_expression_await } from "./js_expression_await.mjs";
import { data_functions_async_is } from "./data_functions_async_is.mjs";
import { js_visit_node } from "./js_visit_node.mjs";
import { js_declaration_single_async_is } from "./js_declaration_single_async_is.mjs";
import { list_add } from "./list_add.mjs";
import { js_declaration_single_name } from "./js_declaration_single_name.mjs";
export async function js_await_add_recursive(ast, stack, functions) {
  let this_name = js_declaration_single_name(ast);
  list_add(stack, this_name);
  let async_before = js_declaration_single_async_is(ast);
  js_visit_node(ast, "CallExpression", function (v) {
    let { node } = v;
    let { callee } = node;
    if (callee.type === "Identifier") {
      let { name } = callee;
      if (data_functions_async_is(functions, name)) {
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
  });
  let async_after = js_declaration_single_async_is(ast);
  if (!async_before && async_after) {
    data_functions_async_set(functions, this_name, true);
    log(string_combine_multiple([this_name, " made async"]));
    await js_asyncify_recursive(this_name, stack, functions);
  }
  let last = list_remove_last(stack);
  assert(equal, [last, this_name]);
}
