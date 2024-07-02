import { js_param_generic } from "./js_param_generic.mjs";
import { list_add } from "./list_add.mjs";
import { assert } from "./assert.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { integer_parse } from "./integer_parse.mjs";
import { number_is } from "./number_is.mjs";
import { list_remove_at } from "./list_remove_at.mjs";
export async function js_param_move_first(ast, function_name, param_index) {
  assert_arguments_length(arguments, 3);
  param_index = integer_parse(param_index);
  assert(number_is, [param_index]);
  js_param_generic(
    ast,
    function_name,
    function each_caller(args) {
      list_remove_at(args, param_index);
      list_add(args, default_value);
    },
    (params) => {
      list_add(params, param_new);
    },
  );
}
