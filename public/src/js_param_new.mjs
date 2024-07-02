import { js_param_new_generic } from "./js_param_new_generic.mjs";
import { list_add } from "./list_add.mjs";
export async function js_param_new(
  ast,
  default_value_string,
  function_name,
  param_name,
) {
  await js_param_new_generic(
    ast,
    param_name,
    default_value_string,
    function_name,
    list_add,
  );
}
