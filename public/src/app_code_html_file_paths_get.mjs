import { app_extension_html } from "./app_extension_html.mjs";
import { list_filter_ends_with } from "./list_filter_ends_with.mjs";
import { object_properties } from "./object_properties.mjs";
import { app_code_files_get } from "./app_code_files_get.mjs";
export async function app_code_html_file_paths_get() {
  let files = await app_code_files_get();
  let file_paths = object_properties(files);
  let file_paths_html = list_filter_ends_with(file_paths, app_extension_html());
  return file_paths_html;
}
