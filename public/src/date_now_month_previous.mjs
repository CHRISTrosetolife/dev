import { date_now } from "./date_now.mjs";
export function date_now_month_previous() {
  let d = date_now();
  return d.setMonth(d.getMonth() - 1);
}
