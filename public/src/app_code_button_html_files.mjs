import { html_button } from "./html_button.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { app_code_html_file_paths_get } from "./app_code_html_file_paths_get.mjs";
export async function app_code_button_html_files() {
  let file_paths_html = await app_code_html_file_paths_get();
  if (list_empty_not_is(file_paths_html)) {
    html_button(parent, "HTML files", () => {});
  }
}
