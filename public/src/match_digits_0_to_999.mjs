import { match_digit_9 } from "./match_digit_9.mjs";
import { match_digit_10 } from "./match_digit_10.mjs";
import { match_optional } from "./match_optional.mjs";
import { match_repeat } from "./match_repeat.mjs";
import { match_sequence } from "./match_sequence.mjs";
export function match_digits_0_to_999() {
  let v = match_sequence([
    match_digit_9(),
    match_repeat(2, match_optional(match_digit_10())),
  ]);
  return v;
}
