import { js_param_move } from "./js_param_move.mjs";
import { data_identifiers_each } from "./data_identifiers_each.mjs";
import { function_transform_args_split_lambda } from "./function_transform_args_split_lambda.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export async function function_params_objectify(
  function_name,
  param_index,
  param_index_new,
) {
  assert_arguments_length(arguments, 3);
  await data_identifiers_each(function_name, lambda);
  async function lambda(fn_name) {
    await function_transform_args_split_lambda(
      fn_name,
      [js_param_move],
      [function_name, param_index, param_index_new],
    );
  }
}
