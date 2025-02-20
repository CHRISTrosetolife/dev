import { function_params_delete_name } from "./function_params_delete_name.mjs";
import { each_async } from "./each_async.mjs";
export async function functions_params_delete_name(
  function_names,
  param_name_to_delete,
) {
  let split = list_split_comma(function_names);
  await each_async(split, async function (function_name) {
    await function_params_delete_name(function_name, param_name_to_delete);
  });
}
