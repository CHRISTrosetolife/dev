import { app_learn_code_log_add } from "./app_learn_code_log_add.mjs";
import { integer_random_digit_single_positive } from "./integer_random_digit_single_positive.mjs";
export function lesson_add_quiz() {
  let a = integer_random_digit_single_positive();
  let b = integer_random_digit_single_positive();
  return app_learn_code_log_add(a, b);
}
