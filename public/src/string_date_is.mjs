import { string_digits_is } from "./string_digits_is.mjs";
import { string_split_dash } from "./string_split_dash.mjs";
import { list_size } from "./list_size.mjs";
import { log } from "./log.mjs";
import { list_all } from "./list_all.mjs";
export function string_date_is(trimmed) {
  let split = string_split_dash(trimmed);
  log({
    split,
  });
  if (list_size(split) !== 3) {
    return false;
  }
  return list_all(split, (s) => string_digits_is(s));
}
