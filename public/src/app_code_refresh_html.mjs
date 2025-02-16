import { app_code_file_get } from "./app_code_file_get.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_style_pre_wrap } from "./html_style_pre_wrap.mjs";
import { string_html_escape } from "./string_html_escape.mjs";
import { storage_local_get_context } from "./storage_local_get_context.mjs";
import { app_code_button_html_files } from "./app_code_button_html_files.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_code_screen_set } from "./app_code_screen_set.mjs";
import { html_load } from "./html_load.mjs";
import { html_style_left } from "./html_style_left.mjs";
import { html_style_monospace } from "./html_style_monospace.mjs";
export async function app_code_refresh_html(context) {
  await html_load(async function () {
    let root = app_code_screen_set(context, fn_name("app_code_refresh_html"));
    await app_code_button_html_files(context);
    let html_selected = storage_local_get_context(context, "html_selected");
    let contents = await app_code_file_get(html_selected);
    let e = string_html_escape(contents);
    let t = html_p_text(root, e);
    html_style_left(t);
    html_style_pre_wrap(t);
    html_style_monospace(t);
  });
}
