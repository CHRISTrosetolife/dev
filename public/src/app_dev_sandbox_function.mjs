import { app_dev_sandbox_function_multiple } from "./app_dev_sandbox_function_multiple.mjs";
export async function app_dev_sandbox_function(
  root,
  function_name,
  try_out_message,
  run_message,
  run_click,
) {
  return await app_dev_sandbox_function_multiple(
    root,
    false,
    function_name,
    try_out_message,
    (fn_name) => run_message,
    run_click,
  );
}
