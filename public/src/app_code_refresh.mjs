import { html_list } from "./html_list.mjs";
import { function_path_to_name } from "./function_path_to_name.mjs";
import { list_map } from "./list_map.mjs";
import { object_properties } from "./object_properties.mjs";
import { global_files_initialize } from "./global_files_initialize.mjs";
import { app_code_local_functions_path } from "./app_code_local_functions_path.mjs";
import { http_storage_get } from "./http_storage_get.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { html_clear_scroll_top_centered } from "./html_clear_scroll_top_centered.mjs";
export function app_code_refresh(root) {
  html_clear_scroll_top_centered();
  html_button_width_full_text_click(root, "Functions", async () => {
    html_clear_scroll_top_centered();
    let files = await http_storage_get(app_code_local_functions_path());
    global_files_initialize(files);
    let file_paths = object_properties(files);
    let mapped2 = list_map(file_paths, function_path_to_name);
    html_list(root, mapped2);
  });
}
