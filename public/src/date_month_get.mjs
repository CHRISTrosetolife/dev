import { number_pad_2 } from "./number_pad_2.mjs";
export function date_month_get(date) {
  let month_index = date.getMonth();
  let n = month_index + 1;
  return number_pad_2(n);
}
