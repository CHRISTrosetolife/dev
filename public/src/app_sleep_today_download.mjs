import { app_sleep_date_download } from "./app_sleep_date_download.mjs";
import { date_now } from "./date_now.mjs";
export async function app_sleep_today_download() {
  let now = date_now();
  return await app_sleep_date_download(now);
}
