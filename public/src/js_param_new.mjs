import { js_param_new_generic } from "./js_param_new_generic.mjs";
import { list_add } from "./list_add.mjs";
export async function js_param_new(
  ast,
  function_name,
  param_name,
  default_value_string,
) {
  let lambda_add = list_add;
  await js_param_new_generic(
    param_name,
    default_value_string,
    ast,
    function_name,
    lambda_add,
  );
}
