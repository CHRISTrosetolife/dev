import { digits_10 } from "./digits_10.mjs";
import { match_choice } from "./match_choice.mjs";
export function match_digit() {
  return match_choice(digits_10());
}
