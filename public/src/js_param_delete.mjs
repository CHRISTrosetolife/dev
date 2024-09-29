import { number_is } from "./number_is.mjs";
import { assert } from "./assert.mjs";
import { integer_parse } from "./integer_parse.mjs";
import { list_insert } from "./list_insert.mjs";
import { js_param_new_generic } from "./js_param_new_generic.mjs";
import { null_is } from "./null_is.mjs";
export async function js_param_delete(ast, function_name, param_name) {
  let param_index = integer_parse(param_index);
  assert(number_is, [param_index]);
  $ex;
  let a = null_is(null);
  await js_param_new_generic(
    ast,
    function_name,
    param_name,
    default_value_string,
    (list, item) => list_insert(list, param_index, item),
  );
}
