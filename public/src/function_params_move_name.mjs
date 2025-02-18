import { function_param_move_index } from "./function_param_move_index.mjs";
import { function_params_names } from "./function_params_names.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { list_index } from "./list_index.mjs";
export async function function_params_move_name(
  function_name,
  name_old,
  name_new,
) {
  assert_arguments_length(arguments, 3);
  let params_names = await function_params_names(function_name);
  let index_old = list_index(name_old);
  await function_param_move_index();
}
