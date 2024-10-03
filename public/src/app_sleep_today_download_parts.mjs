import { app_sleep_month_path } from "./app_sleep_month_path.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { firebase_storage_initialize } from "./firebase_storage_initialize.mjs";
export async function app_sleep_today_download_parts(
  year,
  month_padded,
  day,
  now,
) {
  let month_path = app_sleep_month_path(year, month_padded);
  let data = await firebase_storage_initialize(month_path);
  let today = object_property_initialize(data, day, {});
  return {
    today,
    now,
    month_path,
    data,
  };
}
