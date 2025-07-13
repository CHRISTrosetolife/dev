import { match_digit } from "./match_digit.mjs";
import { match_once_or_more } from "./match_once_or_more.mjs";
export function match_digits_0_to_999() {
  return match_once_or_more(match_digit(), 3);
}
