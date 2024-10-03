import { app_sleep_sleep } from "./app_sleep_sleep.mjs";
import { app_sleep_woke_up } from "./app_sleep_woke_up.mjs";
import { app_sleep_manual_text } from "./app_sleep_manual_text.mjs";
import { app_sleep_manual } from "./app_sleep_manual.mjs";
import { html_hr } from "./html_hr.mjs";
import { html_element } from "./html_element.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { html_inner_set } from "./html_inner_set.mjs";
import { app_sleep_today_download } from "./app_sleep_today_download.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { app_sleep_record } from "./app_sleep_record.mjs";
import { html_clear_scroll_top_context } from "./html_clear_scroll_top_context.mjs";
export function app_sleep_main(context) {
  let root = html_clear_scroll_top_context(context);
  app_sleep_record(context, app_sleep_woke_up(), "wakeups");
  app_sleep_record(context, app_sleep_sleep(), "sleeps");
  html_button_width_full_text_click(root, app_sleep_manual_text(), () => {
    app_sleep_manual(context);
  });
  html_hr(root);
  let result;
  html_button_width_full_text_click(root, "📃 data this month", async () => {
    let { data } = await app_sleep_today_download();
    html_inner_set(result, json_format_to(data));
  });
  result = html_element(root, "pre");
}
