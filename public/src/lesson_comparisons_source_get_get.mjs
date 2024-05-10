import { integer_random } from "./integer_random.mjs";
import { equal } from "./equal.mjs";
import { integer_random_digit_single_positive } from "./integer_random_digit_single_positive.mjs";
export function lesson_comparisons_source_get_get(sign) {
  return function source_get() {
    let a = integer_random_digit_single_positive();
    let b;
    if (equal(integer_random(1, 3), 1)) {
      b = a;
    } else {
      b = integer_random_digit_single_positive();
    }
    return `console.log(${a} ${sign} ${b});`;
  };
}
