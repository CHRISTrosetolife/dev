import { folder_current_prefix } from "./folder_current_prefix.mjs";
import { string_combine } from "./string_combine.mjs";
import { function_name_to_file_name } from "./function_name_to_file_name.mjs";
import { object_property_get } from "./object_property_get.mjs";
export async function function_import(function_name) {
  let function_file_name = function_name_to_file_name(function_name);
  let function_file_name_path = string_combine(
    folder_current_prefix(),
    function_file_name,
  );
  let imported = await import(function_file_name_path);
  let imported_function = object_property_get(imported, function_file_name);
  return imported_function;
}
