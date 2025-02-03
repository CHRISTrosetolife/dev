import { folder_path_src } from "./folder_path_src.mjs";
import { folder_current_prefix } from "./folder_current_prefix.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { global_files_initialize } from "./global_files_initialize.mjs";
import { app_code_local_functions_path } from "./app_code_local_functions_path.mjs";
import { http_storage_get } from "./http_storage_get.mjs";
import { html_scripts_load } from "./html_scripts_load.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { json_to } from "./json_to.mjs";
import { object_properties } from "./object_properties.mjs";
export async function app_code() {
  let root = html_style_default_initialize();
  await html_scripts_load(root, ["axios", "acorn", "astring"]);
  let files = await http_storage_get(app_code_local_functions_path());
  global_files_initialize(files);
  let file_paths = object_properties(files);
  let prefix = string_combine_multiple([
    folder_current_prefix(),
    folder_path_src(),
  ]);
  html_p_text(root, json_to(file_paths));
}
