import { html_hr } from "./html_hr.mjs";
import { html_clear_scroll_top_context } from "./html_clear_scroll_top_context.mjs";
import { firebase_save } from "./firebase_save.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { date_day_get } from "./date_day_get.mjs";
import { firebase_storage_initialize } from "./firebase_storage_initialize.mjs";
import { path_join } from "./path_join.mjs";
import { date_month_get } from "./date_month_get.mjs";
import { date_year_get } from "./date_year_get.mjs";
import { date_now } from "./date_now.mjs";
import { list_add } from "./list_add.mjs";
export function app_sleep_main(context) {
  let root = html_clear_scroll_top_context(context);
  let list_name = "wakeups";
  let button_text = "woke up";
  html_button_width_full_text_click(root, button_text, async () => {
    let n = date_now();
    let year = date_year_get(n);
    let month = date_month_get(n);
    let month_path = path_join(["sleep", year, month]);
    let data = await firebase_storage_initialize(month_path);
    let day = date_day_get(data);
    let today = object_property_initialize(data, day, {});
    let wakeups = object_property_initialize(today, list_name, []);
    list_add(wakeups, n);
    await firebase_save(index_path, index);
    await app_sleep_main(context);
  });
  html_hr(root);
}
