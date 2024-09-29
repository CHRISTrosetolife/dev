import { js_parse_expression } from "./js_parse_expression.mjs";
import { js_param_generic } from "./js_param_generic.mjs";
import { string_is } from "./string_is.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { number_is } from "./number_is.mjs";
import { assert } from "./assert.mjs";
import { integer_parse } from "./integer_parse.mjs";
import { list_insert } from "./list_insert.mjs";
export async function js_param_delete(ast, function_name, param_name) {
  let param_index = integer_parse(param_index);
  assert(number_is, [param_index]);
  let lambda_add = (list, item) => list_insert(list, param_index, item);
  assert_arguments_length(arguments, 5);
  assert2(string_is, [param_name]);
  assert2(string_is, [default_value_string]);
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
}
