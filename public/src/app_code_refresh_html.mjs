import { storage_local_get_context } from "./storage_local_get_context.mjs";
import { app_code_files_get } from "./app_code_files_get.mjs";
import { app_code_button_html_files } from "./app_code_button_html_files.mjs";
import { storage_local_set_context } from "./storage_local_set_context.mjs";
import { html_button } from "./html_button.mjs";
import { each } from "./each.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_code_screen_set } from "./app_code_screen_set.mjs";
import { html_load } from "./html_load.mjs";
export async function app_code_refresh_html(context) {
  await html_load(async () => {
    let root = app_code_screen_set(context, fn_name("app_code_refresh_htmls"));
    await app_code_button_html_files();
    let files = await app_code_files_get();
    storage_local_set_context(context, "html_selected", h);
    let html_selected = storage_local_get_context(context, "html_selected");
    each(file_paths_html, (h) => {
      html_button(root, h, () => {});
    });
  });
}
