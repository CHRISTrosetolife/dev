import { folder_name_src } from "./folder_name_src.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function app_html_generate_import_path(folder) {
  return string_combine_multiple([folder, "/", folder_name_src(), "/"]);
}
