import { function_param_delete_index } from "./function_param_delete_index.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { list_index } from "./list_index.mjs";
import { function_params_names } from "./function_params_names.mjs";
export async function function_params_delete_name(
  function_name,
  param_name_to_delete,
) {
  assert_arguments_length(arguments, 2);
  let params_names = await function_params_names(function_name);
  let index = list_index(params_names, param_name_to_delete);
  await function_param_delete_index(function_name, index);
}
