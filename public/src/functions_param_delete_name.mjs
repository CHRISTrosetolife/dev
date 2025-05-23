import { function_param_delete_name } from "./function_param_delete_name.mjs";
import { string_split_comma } from "./string_split_comma.mjs";
import { each_async } from "./each_async.mjs";
export async function functions_param_delete_name(
  function_names,
  param_name_to_delete,
) {
  let split = string_split_comma(function_names);
  await each_async(split, async function (function_name) {
    await function_param_delete_name(function_name, param_name_to_delete);
  });
}
