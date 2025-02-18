import { js_param_generic } from "./js_param_generic.mjs";
import { data_identifiers_each_transform } from "./data_identifiers_each_transform.mjs";
export async function data_identifiers_each_transform_params(
  function_name,
  on_define,
  on_call,
) {
  await data_identifiers_each_transform(
    function_name,
    function js_params_objectify(ast) {
      js_param_generic(ast, function_name, on_call, on_define);
    },
  );
}
