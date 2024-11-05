import { date_now } from "./date_now.mjs";
export function date_now_month_previous() {
  let d = date_now();
  let month = d.getMonth();
  d.setMonth(d.getMonth() - 1);
  while (d.getMonth() === month) {
    d.setDate(d.getDate() - 1);
  }
}
