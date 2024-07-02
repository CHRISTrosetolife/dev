import { js_param_actual } from "./js_param_actual.mjs";
import { js_param_existing_each } from "./js_param_existing_each.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { list_add } from "./list_add.mjs";
import { js_imports_add } from "./js_imports_add.mjs";
import { assert } from "./assert.mjs";
import { string_is } from "./string_is.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export async function js_param_new(
  ast,
  function_name,
  param_name,
  default_value_string,
) {
  assert_arguments_length(arguments, 4);
  assert(string_is, [param_name]);
  assert(string_is, [default_value_string]);
  let needs_imports_add = false;
  js_param_existing_each(ast, function_name, function lambda(args) {
    let default_value = js_parse_expression(default_value_string);
    list_add(args, default_value);
    needs_imports_add = true;
  });
  if (needs_imports_add) {
    await js_imports_add(ast);
  }
  let params = js_param_actual(ast, function_name);
  let param_new = js_parse_expression(param_name);
  list_add(params, param_new);
}
