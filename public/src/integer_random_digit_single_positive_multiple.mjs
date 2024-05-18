import { integer_random_digit_single_positive } from "./integer_random_digit_single_positive.mjs";
import { call_multiple } from "./call_multiple.mjs";
export function integer_random_digit_single_positive_multiple(count) {
  return call_multiple(integer_random_digit_single_positive, count);
}
