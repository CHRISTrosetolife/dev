import { function_name_to_file_name } from "./function_name_to_file_name.mjs";
import { object_property_get } from "./object_property_get.mjs";
export async function function_import(function_name) {
  let function_file_name = function_name_to_file_name(function_name);
  let function_path = function_file_name;
  let imported = await import(function_path);
  let imported_function = object_property_get(imported, function_name);
  return imported_function;
}
