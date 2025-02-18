import { function_params_names_assert_calls_params_size } from "./function_params_names_assert_calls_params_size.mjs";
import { fn_name } from "./fn_name.mjs";
import { data_identifiers_each_lock } from "./data_identifiers_each_lock.mjs";
import { js_param_new } from "./js_param_new.mjs";
import { function_transform_args_split_lambda } from "./function_transform_args_split_lambda.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export async function function_param_new(
  function_name,
  param_name,
  default_value_string,
) {
  assert_arguments_length(arguments, 3);
  await function_params_names_assert_calls_params_size(function_name);
  await data_identifiers_each_lock(function_name, lambda);
  async function lambda(fn_name) {
    await function_transform_args_split_lambda(
      fn_name,
      [js_param_new],
      [function_name, param_name, default_value_string],
    );
  }
}
