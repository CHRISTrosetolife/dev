import { html_textarea_width_full } from "./html_textarea_width_full.mjs";
import { app_list_choose } from "./app_list_choose.mjs";
import { app_list } from "./app_list.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { string_split_newline } from "./string_split_newline.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { html_button_width_full_text_click_next } from "./html_button_width_full_text_click_next.mjs";
import { html_clear_scroll_top_centered } from "./html_clear_scroll_top_centered.mjs";
export function app_list_root(body) {
  html_clear_scroll_top_centered(body);
  let t = html_textarea_width_full(body);
  html_button_width_full_text_click_next(body, () => {
    let value = html_value_get(t);
    let split = string_split_newline(value);
    storage_local_set(app_list, "list", split);
    app_list_choose(body);
  });
}
