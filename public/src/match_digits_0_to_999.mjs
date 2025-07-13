import { match_digit_10 } from "./match_digit_10.mjs";
import { match_optional } from "./match_optional.mjs";
import { match_repeat } from "./match_repeat.mjs";
import { match_sequence } from "./match_sequence.mjs";
export function match_digits_0_to_999() {
  let times = 3;
  let item = match_digit_10();
  let v = match_sequence([item, match_repeat(times - 1, match_optional(item))]);
  return v;
}
