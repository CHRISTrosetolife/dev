import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { each } from "./each.mjs";
import { app_list } from "./app_list.mjs";
import { storage_local_get } from "./storage_local_get.mjs";
import { html_clear_scroll_top_centered } from "./html_clear_scroll_top_centered.mjs";
export function app_list_choose(body) {
  html_clear_scroll_top_centered(body);
  let split = storage_local_get(app_list, "list");
  each(split, (line) => {
    html_button_width_full_text_click(body, line);
  });
}
