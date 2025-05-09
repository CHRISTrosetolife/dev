import { function_calls_params_size_assert } from "./function_calls_params_size_assert.mjs";
import { list_size } from "./list_size.mjs";
export async function function_calls_params_size_assert_list(
  function_name,
  params_names,
) {
  let expected = list_size(params_names);
  await function_calls_params_size_assert(function_name, expected);
}
