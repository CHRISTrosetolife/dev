import { function_param_move_first_index } from "./function_param_move_first_index.mjs";
import { function_param_index } from "./function_param_index.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export async function function_param_move_first_name(
  function_name,
  param_name_to_move,
) {
  assert_arguments_length(arguments, 2);
  let index = await function_param_index(function_name, param_name_to_move);
  await function_param_move_first_index(function_name, index);
}
