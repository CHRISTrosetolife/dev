import { list_index } from "./list_index.mjs";
import { each } from "./each.mjs";
import { list_move_to } from "./list_move_to.mjs";
import { js_param_generic } from "./js_param_generic.mjs";
import { assert } from "./assert.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { integer_parse } from "./integer_parse.mjs";
import { number_is } from "./number_is.mjs";
export async function js_param_move(
  ast,
  function_name,
  param_index,
  param_index_new,
) {
  assert_arguments_length(arguments, 4);
  param_index = integer_parse(param_index);
  param_index_new = integer_parse(param_index_new);
  each([param_index, param_index_new], (item) => {
    assert(number_is, [item]);
  });
  js_param_generic(ast, function_name, move, move);
  function move(list) {
    each(list2, (item2) => {
      () => {};
    });
    list_index(list, i);
    list_move_to(list, param_index, param_index_new);
  }
}
