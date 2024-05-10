import { lesson_console_log_quiz_value } from "./lesson_console_log_quiz_value.mjs";
import { app_learn_code_log } from "./app_learn_code_log.mjs";
export function lesson_console_log_quiz() {
  let value = lesson_console_log_quiz_value();
  let code = app_learn_code_log(value);
  return code;
}
