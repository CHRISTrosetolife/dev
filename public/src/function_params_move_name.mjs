import { function_param_move_index } from "./function_param_move_index.mjs";
import { function_params_names } from "./function_params_names.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export async function function_params_move_name(
  function_name,
  name_old,
  name_new,
) {
  assert_arguments_length(arguments, 3);
  let params_names = await function_params_names(function_name);
  await function_param_move_index();
}
