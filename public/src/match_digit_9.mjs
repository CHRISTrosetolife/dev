import { digits_9 } from "./digits_9.mjs";
import { match_choice } from "./match_choice.mjs";
export function match_digit_9() {
  let v = match_choice(digits_9());
  return v;
}
