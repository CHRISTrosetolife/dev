import { html_list_chooser } from "./html_list_chooser.mjs";
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
  html_list_chooser(
    root,
    names,
    month_index,
    () => app_sleep_manual(context),
    (value) => {
      month_index = alue;
    },
  );
}
