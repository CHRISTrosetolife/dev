import { date_month_previous } from "./date_month_previous.mjs";
import { date_now } from "./date_now.mjs";
export function date_now_month_previous() {
  let d = date_now();
  return date_month_previous(d);
}
