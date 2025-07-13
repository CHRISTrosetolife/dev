import { match_digit } from "./match_digit.mjs";
import { match_once_or_more } from "./match_once_or_more.mjs";
export function match_digits_0_to_999() {
  let times = 3;
  let item = match_digit();
  let v = match_once_or_more(item, times);
  return v;
}
