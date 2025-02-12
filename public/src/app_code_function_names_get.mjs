import { list_filter_starts_with } from "./list_filter_starts_with.mjs";
import { function_path_prefix } from "./function_path_prefix.mjs";
import { function_path_to_name } from "./function_path_to_name.mjs";
import { list_map } from "./list_map.mjs";
import { object_properties } from "./object_properties.mjs";
import { app_code_files_get } from "./app_code_files_get.mjs";
export async function app_code_function_names_get() {
  let files = await app_code_files_get();
  let file_paths = object_properties(files);
  let prefix = function_path_prefix();
  let filtered = list_filter_starts_with(file_paths, prefix);
  let mapped2 = list_map(file_paths, function_path_to_name);
  return mapped2;
}
