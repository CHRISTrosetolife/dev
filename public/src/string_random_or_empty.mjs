import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { random_50_50 } from "./random_50_50.mjs";
export function string_random_or_empty(s) {
  assert_arguments_length(arguments, 1);
  return random_50_50() ? "" : s;
}
