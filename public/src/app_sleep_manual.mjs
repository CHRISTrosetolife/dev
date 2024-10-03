import { html_p_text } from "./html_p_text.mjs";
import { html_button_previous_text } from "./html_button_previous_text.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_list_chooser } from "./html_list_chooser.mjs";
import { date_month_names } from "./date_month_names.mjs";
import { date_now_parts } from "./date_now_parts.mjs";
import { app_sleep_main } from "./app_sleep_main.mjs";
import { html_button_width_full_text_click_back } from "./html_button_width_full_text_click_back.mjs";
import { html_clear_scroll_top_context } from "./html_clear_scroll_top_context.mjs";
import { html_button_width_full_text } from "./html_button_width_full_text.mjs";
import { list_index } from "./list_index.mjs";
export function app_sleep_manual(context) {
  let { root } = context;
  html_clear_scroll_top_context(context);
  html_button_width_full_text_click_back(root, () => app_sleep_main(context));
  let { year, month_index, day, hours, minutes, now } = date_now_parts();
  let pm = "pm";
  let am = "am";
  let ampms = [am, pm];
  let ampm = hours >= 12 ? pm : am;
  let ampm_index = list_index(ampms, ampm);
  let names = date_month_names();
  html_p_text(root, year);
  html_list_chooser(root, names, month_index, refresh, (value) => {
    month_index = value;
  });
  html_p_text(root, day);
  html_button_width_full_text(
    root,
    string_combine_multiple([html_button_previous_text(), " day"]),
    () => {
      day = day - 1;
    },
  );
  html_list_chooser(root, names, month_index, refresh, (value) => {
    month_index = value;
  });
  html_list_chooser(root, ampms, ampm_index, refresh, (value) => {
    ampm_index = value;
  });
  function refresh() {
    app_sleep_manual(context);
  }
}
