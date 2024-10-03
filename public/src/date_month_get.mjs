import { number_pad_2 } from "./number_pad_2.mjs";
export function date_month_get(date) {
  let month_index = date.getMonth();
  let month = month_index + 1;
  let month_padded = number_pad_2(month);
  let month_name = date.toLocaleString("default", {
    month: "long",
  });
  return {
    month_index,
    month,
    month_padded,
    month_name,
  };
}
