import { data_identifiers_each } from "./data_identifiers_each.mjs";
import { js_param_new } from "./js_param_new.mjs";
import { function_transform_args_split_lambda } from "./function_transform_args_split_lambda.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export async function function_param_move_first(
  function_name,
  param_name,
  default_value_string,
) {
  assert_arguments_length(arguments, 3);
  await data_identifiers_each(function_name, lambda);
  async function lambda(fn_name) {
    await function_transform_args_split_lambda(
      fn_name,
      [js_param_new],
      [function_name, param_name, default_value_string],
    );
  }
}
