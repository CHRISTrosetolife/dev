import { noop } from "./noop.mjs";
import { app_code_refresh_html } from "./app_code_refresh_html.mjs";
import { storage_local_set_context } from "./storage_local_set_context.mjs";
import { html_button } from "./html_button.mjs";
import { each } from "./each.mjs";
import { app_code_button_menu_app } from "./app_code_button_menu_app.mjs";
import { app_code_html_file_paths_get } from "./app_code_html_file_paths_get.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_code_screen_set } from "./app_code_screen_set.mjs";
import { html_load } from "./html_load.mjs";
export async function app_code_refresh_htmls(context) {
  await html_load(async function () {
    let root = app_code_screen_set(context, fn_name("app_code_refresh_htmls"));
    app_code_button_menu_app(context, root, noop);
    let file_paths_html = await app_code_html_file_paths_get();
    each(file_paths_html, function (h) {
      html_button(root, h, async function () {
        storage_local_set_context(context, "html_selected", h);
        await app_code_refresh_html(context);
      });
    });
  });
}
