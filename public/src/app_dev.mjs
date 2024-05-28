import { log } from "./log.mjs";
import { list_length } from "./list_length.mjs";
import { html_buttons_next_previous } from "./html_buttons_next_previous.mjs";
import { html_clear_scroll_top } from "./html_clear_scroll_top.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { app_dev_screens } from "./app_dev_screens.mjs";
import { each_index } from "./each_index.mjs";
import { list_get } from "./list_get.mjs";
export function app_dev() {
  let root = html_style_default_initialize();
  let screens = app_dev_screens();
  each_index(screens, (s, index) => {
    let b = html_button_width_full_text_click(root, "", () => screen(index));
    s.name(b);
  });
  function screen(index) {
    html_clear_scroll_top(root);
    let s = list_get(screens, index);
    s.screen(root);
    log({
      index,
    });
    html_buttons_next_previous(root, screen, index, list_length(screens));
  }
}
