import { number_pad_2 } from "./number_pad_2.mjs";
export function date_month_get(date) {
  let n = date.getMonth() + 1;
  return number_pad_2(n);
}
