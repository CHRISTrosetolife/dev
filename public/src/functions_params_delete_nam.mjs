import { function_params_delete_name } from "./function_params_delete_name.mjs";
import { each_async } from "./each_async.mjs";
export async function functions_params_delete_nam(function_names) {
  await each_async(function_names, async function (function_name) {
    await function_params_delete_name();
  });
}
