import { function_data } from "./function_data.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
import { file_js_identifier_rename } from "./file_js_identifier_rename.mjs";
export async function function_copy_generic(
  file_lambda,
  fn_name_from,
  fn_name_to,
) {
  let fn_path_from = function_name_to_path(fn_name_from);
  let fn_path_to = function_name_to_path(fn_name_to);
  await file_lambda(fn_path_from, fn_path_to);
  await file_js_identifier_rename(fn_path_to, fn_name_from, fn_name_to);
  await function_data(fn_path_to);
}
