import { date_day_get } from "./date_day_get.mjs";
import { date_month_get } from "./date_month_get.mjs";
import { date_year_get } from "./date_year_get.mjs";
import { date_now } from "./date_now.mjs";
export function date_now_parts() {
  let now = date_now();
  let year = date_year_get(now);
  let { month_index, month, month_padded, month_name } = date_month_get(now);
  let day = date_day_get(now);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  return {
    year,
    month_index,
    month,
    month_padded,
    month_name,
    day,
    hours,
    minutes,
    now,
  };
}
