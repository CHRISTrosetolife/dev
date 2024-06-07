import { app_dev_sandbox_function_multiple } from "./app_dev_sandbox_function_multiple.mjs";
import { function_names } from "./function_names.mjs";
export async function app_dev_sandbox_function(
  root,
  function_name,
  try_out_message,
  run_message,
  run_click,
) {
  let function_names = [function_name];
  return await app_dev_sandbox_function_multiple(
    root,
    function_names,
    function_name,
    try_out_message,
    run_message,
    run_click,
  );
}
