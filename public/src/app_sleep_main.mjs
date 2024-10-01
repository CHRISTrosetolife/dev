import { html_element } from "./html_element.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { html_inner_set } from "./html_inner_set.mjs";
import { firebase_save } from "./firebase_save.mjs";
import { list_add } from "./list_add.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { app_sleep_today_download } from "./app_sleep_today_download.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { app_sleep_record } from "./app_sleep_record.mjs";
import { html_hr } from "./html_hr.mjs";
import { html_clear_scroll_top_context } from "./html_clear_scroll_top_context.mjs";
export function app_sleep_main(context) {
  let root = html_clear_scroll_top_context(context);
  app_sleep_record(context, "🌅 woke up", "wakeups");
  html_hr(root);
  app_sleep_record(context, "🌙 sleep", "sleeps");
  let result;
  html_button_width_full_text_click(root, button_text, async () => {
    let { today, now, month_path, data } = await app_sleep_today_download();
    let list = object_property_initialize(today, list_name, []);
    list_add(list, now);
    await firebase_save(month_path, data);
    html_inner_set(result, json_format_to(list));
  });
  result = html_element(root, "pre");
}
