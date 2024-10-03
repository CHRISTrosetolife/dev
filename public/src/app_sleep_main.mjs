import { date_now } from "./date_now.mjs";
import { emoji_add } from "./emoji_add.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_element } from "./html_element.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { html_inner_set } from "./html_inner_set.mjs";
import { app_sleep_today_download } from "./app_sleep_today_download.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { app_sleep_record } from "./app_sleep_record.mjs";
import { html_clear_scroll_top_context } from "./html_clear_scroll_top_context.mjs";
export function app_sleep_main(context) {
  let root = html_clear_scroll_top_context(context);
  app_sleep_record(context, "🌅 woke up", "wakeups");
  app_sleep_record(context, "🌙 sleep", "sleeps");
  html_button_width_full_text_click(
    string_combine_multiple([emoji_add(), " add manual"]),
    () => {
      html_clear_scroll_top_context(context);
      let n = date_now();
      html_button_width_full_text_click(root);
    },
  );
  let result;
  html_button_width_full_text_click(root, "📃 data this month", async () => {
    let { data } = await app_sleep_today_download();
    html_inner_set(result, json_format_to(data));
  });
  result = html_element(root, "pre");
}
