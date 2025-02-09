import { app_code_button_menu_app } from "./app_code_button_menu_app.mjs";
import { app_code_html_file_paths_get } from "./app_code_html_file_paths_get.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_code_screen_set } from "./app_code_screen_set.mjs";
import { html_load } from "./html_load.mjs";
export async function app_code_refresh_htmls(context) {
  await html_load(async () => {
    let root = app_code_screen_set(context, fn_name("app_code_refresh_htmls"));
    let file_paths_html = await app_code_html_file_paths_get();
    app_code_button_menu_app(context);
  });
}
