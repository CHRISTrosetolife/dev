import { folder_path_src_prefixed } from "./folder_path_src_prefixed.mjs";
import { function_path_suffix } from "./function_path_suffix.mjs";
import { list_map_prefix_suffix_without } from "./list_map_prefix_suffix_without.mjs";
import { html_list } from "./html_list.mjs";
import { global_files_initialize } from "./global_files_initialize.mjs";
import { app_code_local_functions_path } from "./app_code_local_functions_path.mjs";
import { http_storage_get } from "./http_storage_get.mjs";
import { html_scripts_load } from "./html_scripts_load.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { object_properties } from "./object_properties.mjs";
export async function app_code() {
  let root = html_style_default_initialize();
  await html_scripts_load(root, ["axios", "acorn", "astring"]);
  let files = await http_storage_get(app_code_local_functions_path());
  global_files_initialize(files);
  let file_paths = object_properties(files);
  let prefix = folder_path_src_prefixed();
  let suffix = function_path_suffix();
  let mapped2 = list_map_prefix_suffix_without(file_paths, prefix, suffix);
  html_list(root, mapped2);
}
