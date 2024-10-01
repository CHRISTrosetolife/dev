import { firebase_save } from "./firebase_save.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { date_day_get } from "./date_day_get.mjs";
import { firebase_storage_initialize } from "./firebase_storage_initialize.mjs";
import { path_join } from "./path_join.mjs";
import { date_month_get } from "./date_month_get.mjs";
import { date_year_get } from "./date_year_get.mjs";
import { date_now } from "./date_now.mjs";
export async function app_sleep_main(context) {
  let n = date_now();
  let year = date_year_get(n);
  let month = date_month_get(n);
  let month_path = path_join(["sleep", year, month]);
  let data = await firebase_storage_initialize(month_path);
  let day = date_day_get(data);
  let today = object_property_initialize(data, day, {});
  let { root } = context;
  html_button_width_full_text_click(root, "woke up", async () => {
    await firebase_save(index_path, index);
    await app_sleep_main(context);
  });
}
