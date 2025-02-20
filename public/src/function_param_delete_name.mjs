import { function_param_index } from "./function_param_index.mjs";
import { function_param_delete_index } from "./function_param_delete_index.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export async function function_param_delete_name(
  function_name,
  param_name_to_delete,
) {
  assert_arguments_length(arguments, 2);
  let index = await function_param_index(function_name, param_name_to_delete);
  await function_param_delete_index(function_name, index);
}
