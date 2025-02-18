import { function_calls_params_size_assert_list } from "./function_calls_params_size_assert_list.mjs";
import { function_params_names } from "./function_params_names.mjs";
export async function function_params_names_assert_calls_params_size(
  function_name,
) {
  let params_names = await function_params_names(function_name);
  await function_calls_params_size_assert_list(function_name, params_names);
  return params_names;
}
