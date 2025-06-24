import { data_functions_async_is } from "./data_functions_async_is.mjs";
import { data_importing } from "./data_importing.mjs";
import { functions_data_get_list } from "./functions_data_get_list.mjs";
import { js_imports_existing_names } from "./js_imports_existing_names.mjs";
import { list_remove_last } from "./list_remove_last.mjs";
import { js_declaration_single_name } from "./js_declaration_single_name.mjs";
import { js_declaration_single_async_is } from "./js_declaration_single_async_is.mjs";
import { js_expression_await } from "./js_expression_await.mjs";
import { undefined_not_is } from "./undefined_not_is.mjs";
import { js_function_types_is } from "./js_function_types_is.mjs";
import { js_parent_replace } from "./js_parent_replace.mjs";
import { data_functions } from "./data_functions.mjs";
import { list_before } from "./list_before.mjs";
import { each_reverse } from "./each_reverse.mjs";
import { js_visit_node } from "./js_visit_node.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { assert } from "./assert.mjs";
export async function js_await_add(ast) {
  let functions = await data_functions();
  let name = "te";
  let stack = [];
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
    let importing = await functions_data_get_list(data_importing, this_name);
    let imports = js_imports_existing_names(ast);
  }
  let last = list_remove_last(stack);
  assert(equal, [last, this_name]);
}
