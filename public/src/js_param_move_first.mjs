import { js_param_actual } from "./js_param_actual.mjs";
import { js_param_existing_each } from "./js_param_existing_each.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { list_add } from "./list_add.mjs";
import { assert } from "./assert.mjs";
import { string_is } from "./string_is.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export async function js_param_move_first(ast, function_name, param_name) {
  assert_arguments_length(arguments, 3);
  assert(string_is, [param_name]);
  js_param_existing_each(ast, function_name, function lambda(args) {
    let default_value = js_parse_expression(default_value_string);
    list_add(args, default_value);
    let needs_imports_add = true;
  });
  js_param_actual(ast, function_name, (params) => {
    let param_new = js_parse_expression(param_name);
    list_add(params, param_new);
  });
}
