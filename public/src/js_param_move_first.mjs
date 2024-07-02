import { list_move_to_beginning } from "./list_move_to_beginning.mjs";
import { js_param_generic } from "./js_param_generic.mjs";
import { assert } from "./assert.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { integer_parse } from "./integer_parse.mjs";
import { number_is } from "./number_is.mjs";
export async function js_param_move_first(ast, function_name, param_index) {
  assert_arguments_length(arguments, 3);
  param_index = integer_parse(param_index);
  assert(number_is, [param_index]);
  js_param_generic(ast, function_name, move, move);
  function move(list) {
    list_move_to_beginning(list, param_index);
  }
}
