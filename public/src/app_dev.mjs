import { list_length } from "./list_length.mjs";
import { list_index_last } from "./list_index_last.mjs";
import { greater_than } from "./greater_than.mjs";
import { html_buttons_next_previous } from "./html_buttons_next_previous.mjs";
import { html_clear_scroll_top } from "./html_clear_scroll_top.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { app_dev_screens } from "./app_dev_screens.mjs";
import { each } from "./each.mjs";
export function app_dev() {
  let root = html_style_default_initialize();
  let screens = app_dev_screens();
  each(screens, (s) => {
    let b = html_button_width_full_text_click(root, "", () => {
      html_clear_scroll_top(root);
      s.screen(root);
      html_buttons_next_previous(
        root,
        (pair_index) => {
          if (greater_than(pair_index, list_index_last(concat))) {
            refresh_node();
          } else {
            refresh_pair(pair_index);
          }
        },
        pair_index,
        list_length(concat),
      );
    });
    s.name(b);
  });
}
