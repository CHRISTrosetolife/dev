import { list_map_index } from "./list_map_index.mjs";
import { html_style_button_default } from "./html_style_button_default.mjs";
import { html_style_success } from "./html_style_success.mjs";
import { equal } from "./equal.mjs";
import { list_get } from "./list_get.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { date_month_names } from "./date_month_names.mjs";
import { date_now_parts } from "./date_now_parts.mjs";
import { app_sleep_main } from "./app_sleep_main.mjs";
import { html_button_width_full_text_click_back } from "./html_button_width_full_text_click_back.mjs";
import { html_clear_scroll_top_context } from "./html_clear_scroll_top_context.mjs";
export function app_sleep_manual(context) {
  let { root } = context;
  html_clear_scroll_top_context(context);
  html_button_width_full_text_click_back(root, () => app_sleep_main(context));
  let { year, month_index, month, month_padded, month_name, day, now } =
    date_now_parts();
  let names = date_month_names();
  html_button_width_full_text_click(root, list_get(names, month_index), () => {
    html_clear_scroll_top_context(context);
    html_button_width_full_text_click_back(root, () =>
      app_sleep_manual(context),
    );
    let buttons = list_map_index(names, (name, index) => {
      let b = html_button_width_full_text_click(root, name, () => {
        let previous = list_get(buttons, month_index);
        html_style_button_default(previous);
        month_index = index;
        html_style_success(b);
      });
      if (equal(index, month_index)) {
        html_style_success(b);
      }
    });
  });
}
