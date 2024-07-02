import { js_param_new_generic } from "./js_param_new_generic.mjs";
import { list_add } from "./list_add.mjs";
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
    list_add,
  );
}
