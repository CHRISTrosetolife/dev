import { html_clear_scroll_top_centered } from "./html_clear_scroll_top_centered.mjs";
import { app_list_choose } from "./app_list_choose.mjs";
import { storage_local_exists } from "./storage_local_exists.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { string_split_newline } from "./string_split_newline.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { html_button_width_full_text_click_next } from "./html_button_width_full_text_click_next.mjs";
import { html_style_width_full } from "./html_style_width_full.mjs";
import { html_textarea } from "./html_textarea.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export function app_list() {
  let body = html_style_default_initialize();
  html_clear_scroll_top_centered(body);
  let t = html_textarea(body);
  html_style_width_full(t);
  html_button_width_full_text_click_next(body, () => {
    let value = html_value_get(t);
    let split = string_split_newline(value);
    storage_local_set(app_list, "list", split);
    app_list_choose(body);
  });
  if (storage_local_exists(app_list, "list")) {
    app_list_choose(body);
  }
}
