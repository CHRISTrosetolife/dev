import { js_imports_add } from "./js_imports_add.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { js_param_generic } from "./js_param_generic.mjs";
import { string_is } from "./string_is.mjs";
import { assert } from "./assert.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export async function js_param_new_generic(
  param_name,
  default_value_string,
  ast,
  function_name,
  lambda_add,
) {
  assert_arguments_length(arguments, 5);
  assert(string_is, [param_name]);
  assert(string_is, [default_value_string]);
  let needs_imports_add = false;
  js_param_generic(
    ast,
    function_name,
    function lambda(args) {
      let default_value = js_parse_expression(default_value_string);
      lambda_add(args, default_value);
      needs_imports_add = true;
    },
    (params) => {
      let param_new = js_parse_expression(param_name);
      lambda_add(params, param_new);
    },
  );
  if (needs_imports_add) {
    await js_imports_add(ast);
  }
}
