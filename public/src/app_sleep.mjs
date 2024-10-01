import { date_month_get } from "./date_month_get.mjs";
import { date_year_get } from "./date_year_get.mjs";
import { date_now } from "./date_now.mjs";
import { firebase_storage_initialize } from "./firebase_storage_initialize.mjs";
import { app_firebase } from "./app_firebase.mjs";
export async function app_sleep() {
  await app_firebase({
    on_logged_in: async (context) => {
      let n = date_now();
      date_year_get(n);
      date_month_get(n);
      return;
      let index = await firebase_storage_initialize("sleep/");
    },
  });
}
