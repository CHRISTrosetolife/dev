import { lesson_log_number_quiz } from "./lesson_log_number_quiz.mjs";
import { lesson_simple } from "./lesson_simple.mjs";
import { lesson_log_number_explain } from "./lesson_log_number_explain.mjs";
export function lesson_log_number() {
  let example_message = "outputting a number to the console";
  let description = example_message;
  return lesson_simple(
    lesson_log_number_quiz,
    example_before,
    description,
    example_message,
    [lesson_log_number_explain],
  );
  function example_before(parent) {}
}
