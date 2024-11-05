import { date_parts } from "./date_parts.mjs";
import { date_now } from "./date_now.mjs";
import { app_sleep_today_download_parts } from "./app_sleep_today_download_parts.mjs";
export async function app_sleep_today_download() {
  let now = date_now();
  let { year, month_padded, day } = date_parts(now);
  return await app_sleep_today_download_parts(year, month_padded, day, now);
}
