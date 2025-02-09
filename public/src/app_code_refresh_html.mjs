import { html_pre_text } from "./html_pre_text.mjs";
import { app_code_file_contents } from "./app_code_file_contents.mjs";
import { storage_local_get_context } from "./storage_local_get_context.mjs";
import { app_code_button_html_files } from "./app_code_button_html_files.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_code_screen_set } from "./app_code_screen_set.mjs";
import { html_load } from "./html_load.mjs";
export async function app_code_refresh_html(context) {
  await html_load(async () => {
    let root = app_code_screen_set(context, fn_name("app_code_refresh_htmls"));
    await app_code_button_html_files();
    let html_selected = storage_local_get_context(context, "html_selected");
    let contents = await app_code_file_contents(html_selected);
    html_pre_text(root, contents);
  });
}
