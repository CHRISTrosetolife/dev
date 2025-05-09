import { date_day_get } from "./date_day_get.mjs";
import { date_month_get } from "./date_month_get.mjs";
import { date_year_get } from "./date_year_get.mjs";
export function date_parts(now) {
  let year = date_year_get(now);
  let { month_index, month, month_padded, month_name } = date_month_get(now);
  let day = date_day_get(now);
  let hours = now.getHours();
  let minutes = now.getMinutes();
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
