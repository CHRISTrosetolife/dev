import { function_cache_path } from "./function_cache_path.mjs";
export async function function_cache_delete_generic(
  function_name,
  args,
  file_delete_lambda,
) {
  let file_path = function_cache_path(function_name, args);
  await file_delete_lambda(file_path);
}
