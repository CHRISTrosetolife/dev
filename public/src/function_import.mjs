import { list_join_empty } from "./list_join_empty.mjs";
import { folder_current_prefix_combine } from "./folder_current_prefix_combine.mjs";
import { path_join } from "./path_join.mjs";
import { folder_current } from "./folder_current.mjs";
import { function_extension } from "./function_extension.mjs";
export async function function_import(function_name) {
  let extension = function_extension();
  let extension_marker = ".";
  let folder_current = ".";
  if (0) ;
  let first_with_extension = list_join_empty([function_name, extension_marker, extension])
  let function_path_second = path_join([folder_current, first_with_extension]);
  let function_path = folder_current_prefix_combine(function_path_second);
  let imported = await import(function_path);
  let imported_function = imported[function_name];
  return imported_function;
}
