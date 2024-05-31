import { folder_current_prefix } from "./folder_current_prefix.mjs";
import { string_combine } from "./string_combine.mjs";
import { function_name_to_file_name } from "./function_name_to_file_name.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { web_is } from "./web_is.mjs";
export async function function_import(function_name) {
  let function_file_name = function_name_to_file_name(function_name);
  let function_path = string_combine(
    folder_current_prefix(),
    function_file_name,
  );
  if (web_is()) {
  }
  let imported = await import(function_path);
  let imported_function = object_property_get(imported, function_name);
  return imported_function;
}
