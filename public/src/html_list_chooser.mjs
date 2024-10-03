import { html_clear_scroll_top } from "./html_clear_scroll_top.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { equal } from "./equal.mjs";
import { html_style_success } from "./html_style_success.mjs";
import { html_style_button_default } from "./html_style_button_default.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { app_sleep_manual } from "./app_sleep_manual.mjs";
import { html_button_width_full_text_click_back } from "./html_button_width_full_text_click_back.mjs";
import { list_get } from "./list_get.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
export function html_list_chooser(root, list, value, on_back) {
  let result = html_button_width_full_text_click(
    root,
    list_get(list, value),
    () => {
      html_clear_scroll_top(root);
      html_button_width_full_text_click_back(root, on_back,
      );
      let buttons = list_map_index(list, (name, index) => {
        let b = html_button_width_full_text_click(root, name, () => {
          let previous = list_get(buttons, value);
          html_style_button_default(previous);
          value = index;
          html_style_success(b);
        });
        if (equal(index, value)) {
          html_style_success(b);
        }
        return b;
      });
    },
  );
  object_property_set(result, "value_get", () => {
    return value;
  });
}
