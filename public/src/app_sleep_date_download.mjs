import { app_sleep_today_download_parts } from "./app_sleep_today_download_parts.mjs";
import { date_parts } from "./date_parts.mjs";
export async function app_sleep_date_download(now) {
  let { year, month_padded, day } = date_parts(now);
  return await app_sleep_today_download_parts(year, month_padded, day, now);
}
