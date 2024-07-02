import { list_insert } from "./list_insert.mjs";
import { js_param_new_generic } from "./js_param_new_generic.mjs";
export async function js_param_new_at(
  ast,
  function_name,
  param_name,
  default_value_string,
) {
  await js_param_new_generic(
    ast,
    function_name,
    param_name,
    default_value_string,
    (list, item) => list_insert(list, param_index, item),
  );
}
