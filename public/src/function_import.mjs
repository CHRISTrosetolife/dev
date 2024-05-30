import { function_name_to_file_name } from "./function_name_to_file_name.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { function_extension } from "./function_extension.mjs";
export async function function_import(function_name) {
  let extension = function_extension();
  let extension_marker = ".";
  let function_path = function_name_to_file_name(function_name);
  let imported = await import(function_path);
  let imported_function = object_property_get(imported, function_name);
  return imported_function;
}
