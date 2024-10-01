import { app_sleep_today_download } from "./app_sleep_today_download.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { firebase_save } from "./firebase_save.mjs";
import { list_add } from "./list_add.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { html_inner_set } from "./html_inner_set.mjs";
import { html_element } from "./html_element.mjs";
export function app_sleep_record(context, button_text, list_name) {
  let { root } = context;
  let result;
  html_button_width_full_text_click(root, button_text, async () => {
    let { today, now, month_path, data } = await app_sleep_today_download();
    let list = object_property_initialize(today, list_name, []);
    list_add(list, now);
    await firebase_save(month_path, data);
    html_inner_set(result, json_format_to(list));
  });
  result = html_element(root, "pre");
  html_hr(root);
}
