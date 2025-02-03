import { string_digit_is } from "./string_digit_is.mjs";
import { string_split_dash } from "./string_split_dash.mjs";
import { list_size } from "./list_size.mjs";
import { list_all } from "./list_all.mjs";
export function string_date_is(trimmed) {
  let split = string_split_dash(trimmed);
  if (list_size(split) !== 3) {
    return false;
  }
  return list_all(split, (s) => string_digit_is(s));
}
