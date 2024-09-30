import { js_param_generic } from "./js_param_generic.mjs";
import { number_is } from "./number_is.mjs";
import { assert } from "./assert.mjs";
import { integer_parse } from "./integer_parse.mjs";
import { list_remove_at } from "./list_remove_at.mjs";
export async function js_param_delete(ast, function_name, param_index) {
  param_index = integer_parse(param_index);
  assert(number_is, [param_index]);
  js_param_generic(
    ast,
    function_name,
    function lambda(args) {
      list_remove_at(args, param_index);
    },
    (params) => {
      list_remove_at(params, param_index);
    },
  );
}
