import { app_sleep_today_download_parts } from "./app_sleep_today_download_parts.mjs";
import { date_now_parts } from "./date_now_parts.mjs";
export async function app_sleep_today_download() {
  let { year, month_padded, day, now } = date_now_parts();
  return await app_sleep_today_download_parts(year, month_padded, day, now);
}
