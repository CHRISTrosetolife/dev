import { date_day_get } from "./date_day_get.mjs";
import { path_join } from "./path_join.mjs";
import { date_month_get } from "./date_month_get.mjs";
import { date_year_get } from "./date_year_get.mjs";
import { date_now } from "./date_now.mjs";
import { firebase_storage_initialize } from "./firebase_storage_initialize.mjs";
import { app_firebase } from "./app_firebase.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
export async function app_sleep() {
  await app_firebase({
    on_logged_in: async (context) => {
      let n = date_now();
      let year = date_year_get(n);
      let month = date_month_get(n);
      let month_path = path_join(["sleep", year, month]);
      let data = await firebase_storage_initialize(month_path);
      let day = date_day_get(data);
      object_property_initialize(data, day, {});
    },
  });
}
