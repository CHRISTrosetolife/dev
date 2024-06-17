import { lesson_console_log_quiz_value } from "./lesson_console_log_quiz_value.mjs";
import { random_50_50 } from "./random_50_50.mjs";
import { equal } from "./equal.mjs";
import { integer_random } from "./integer_random.mjs";
import { integer_random_digit_single_positive } from "./integer_random_digit_single_positive.mjs";
export function app_learn_code_random_value() {
  let value;
  let r = integer_random(1, 3);
  if (equal(r, 1)) {
    value = integer_random_digit_single_positive();
  } else if (equal(r, 2)) {
    value = random_50_50();
  } else {
    value = lesson_console_log_quiz_value();
  }
  return value;
}
