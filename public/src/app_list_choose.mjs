import { each_index } from "./each_index.mjs";
import { html_style_button_default } from "./html_style_button_default.mjs";
import { html_style_success } from "./html_style_success.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { app_list } from "./app_list.mjs";
import { storage_local_get } from "./storage_local_get.mjs";
import { html_clear_scroll_top_centered } from "./html_clear_scroll_top_centered.mjs";
export function app_list_choose(body) {
  html_clear_scroll_top_centered(body);
  let split = storage_local_get(app_list, "list");
  let chosen = {};
  each_index(split, (line, index) => {
    let toggle = false;
    let b = html_button_width_full_text_click(body, line, () => {
      toggle = !toggle;
      if (toggle) {
        html_style_success(b);
      } else {
        html_style_button_default(b);
      }
    });
  });
}
