import { function_name_to_file_name } from "./function_name_to_file_name.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
import { folder_current_prefix_combine } from "./folder_current_prefix_combine.mjs";
import { path_join } from "./path_join.mjs";
import { folder_current } from "./folder_current.mjs";
import { function_extension } from "./function_extension.mjs";
export async function function_import(function_name) {
  let extension = function_extension();
  let extension_marker = ".";
  let first_with_extension = list_join_empty([
    function_name,
    extension_marker,
    extension,
  ]);
  let function_path_second = path_join([
    folder_current(),
    first_with_extension,
  ]);
  let function_path = folder_current_prefix_combine(function_path_second);
  function_name_to_file_name(function_name);
  let imported = await import(function_path);
  let imported_function = object_property_get(imported, function_name);
  return imported_function;
}
