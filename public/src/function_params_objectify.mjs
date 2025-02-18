import { js_param_generic } from "./js_param_generic.mjs";
import { js_params_objectify } from "./js_params_objectify.mjs";
import { fn_name } from "./fn_name.mjs";
import { data_identifiers_each } from "./data_identifiers_each.mjs";
import { function_transform_args_split_lambda } from "./function_transform_args_split_lambda.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export async function function_params_objectify(
  function_name,
  param_index,
  param_index_new,
) {
  assert_arguments_length(arguments, 3);
  await data_identifiers_each(function_name, async function lambda(fn_name) {
    await function_transform_args_split_lambda(
      fn_name,
      [
        function js_params_objectify(ast) {
          js_param_generic();
        },
      ],
      [function_name, param_index, param_index_new],
    );
  });
}
