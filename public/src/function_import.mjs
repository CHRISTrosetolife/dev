import { path_join } from "./path_join.mjs";
import { folder_current } from "./folder_current.mjs";
import { function_extension } from "./function_extension.mjs";
import { folder_current_prefix } from "./folder_current_prefix.mjs";
export async function function_import(function_name) {
  let extension = function_extension();
  let extension_marker = ".";
  let folder_current = ".";
  let first_with_extension = [function_name, extension_marker, extension].join(
    "",
  );
  let function_path_second = path_join([folder_current, first_with_extension]);
  let function_path = folder_current_prefix + function_path_second;
  let imported = await import(function_path);
  let imported_function = imported[function_name];
  return imported_function;
}
