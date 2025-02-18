import { data_identifiers_each_lock } from "./data_identifiers_each_lock.mjs";
import { js_param_move_first } from "./js_param_move_first.mjs";
import { function_transform_args_split_lambda } from "./function_transform_args_split_lambda.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export async function function_param_move_first(function_name, param_index) {
  assert_arguments_length(arguments, 2);
  await data_identifiers_each_lock(function_name, lambda);
  async function lambda(fn_name) {
    await function_transform_args_split_lambda(
      fn_name,
      [js_param_move_first],
      [function_name, param_index],
    );
  }
}
