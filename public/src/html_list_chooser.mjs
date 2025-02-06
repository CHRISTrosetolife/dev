import { html_button } from "./html_button.mjs";
import { html_button_back } from "./html_button_back.mjs";
import { html_clear_scroll_top } from "./html_clear_scroll_top.mjs";
import { equal } from "./equal.mjs";
import { html_style_success } from "./html_style_success.mjs";
import { html_style_button_default } from "./html_style_button_default.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { list_get } from "./list_get.mjs";
export function html_list_chooser(root, list, value, on_back, on_changed) {
  html_button(root, list_get(list, value), () => {
    html_clear_scroll_top(root);
    html_button_back(root, on_back);
    let buttons = list_map_index(list, (name, index) => {
      let b = html_button(root, name, () => {
        let previous = list_get(buttons, value);
        html_style_button_default(previous);
        value = index;
        on_changed(value);
        html_style_success(b);
      });
      if (equal(index, value)) {
        html_style_success(b);
      }
      return b;
    });
  });
}
