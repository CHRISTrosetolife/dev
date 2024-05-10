import { app_learn_code_log_join_plus } from "./app_learn_code_log_join_plus.mjs";
import { lesson_if_else_string_concat_quiz_parts } from "./lesson_if_else_string_concat_quiz_parts.mjs";
export function lesson_if_else_string_concat_quiz(concat_count) {
  let mapped = lesson_if_else_string_concat_quiz_parts(concat_count);
  return app_learn_code_log_join_plus(mapped);
}
