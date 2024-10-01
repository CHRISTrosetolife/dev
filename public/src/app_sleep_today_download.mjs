import { object_property_initialize } from "./object_property_initialize.mjs";
import { date_day_get } from "./date_day_get.mjs";
import { firebase_storage_initialize } from "./firebase_storage_initialize.mjs";
import { path_join } from "./path_join.mjs";
import { file_name_json } from "./file_name_json.mjs";
import { date_month_get } from "./date_month_get.mjs";
import { date_year_get } from "./date_year_get.mjs";
import { date_now } from "./date_now.mjs";
export async function app_sleep_today_download() {
  let now = date_now();
  let year = date_year_get(now);
  let month = date_month_get(now);
  let month_path = file_name_json(path_join(["sleep", year, month]));
  let data = await firebase_storage_initialize(month_path);
  let day = date_day_get(now);
  let today = object_property_initialize(data, day, {});
  return {
    today,
    now,
    month_path,
    data,
  };
}
