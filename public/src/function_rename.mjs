import { function_name_to_path } from "./function_name_to_path.mjs";
import { file_rename } from "./file_rename.mjs";
import { function_copy_generic } from "./function_copy_generic.mjs";
export async function function_rename(fn_name_from, fn_name_to) {
  let fn_path_from = function_name_to_path(fn_name_from);
  let fn_path_to = function_name_to_path(fn_name_to);
  let lambda = file_rename;
  await function_copy_generic(lambda, fn_name_from, fn_name_to);
}
