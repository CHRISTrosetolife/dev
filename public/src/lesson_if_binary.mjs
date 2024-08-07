import { html_cycle_code_list } from "./html_cycle_code_list.mjs";
import { app_learn_code_random_boolean_binary } from "./app_learn_code_random_boolean_binary.mjs";
import { list_join } from "./list_join.mjs";
import { lesson_simple } from "./lesson_simple.mjs";
import { string_combine } from "./string_combine.mjs";
import { lesson_console_log_quiz } from "./lesson_console_log_quiz.mjs";
export function lesson_if_binary() {
  let description = "`if` with a process";
  let example_message = string_combine("with an ", description);
  return lesson_simple(
    function () {
      let boolean = app_learn_code_random_boolean_binary();
      let statements = [
        lesson_console_log_quiz(),
        `if (${boolean}) {
${lesson_console_log_quiz()}
}`,
        lesson_console_log_quiz(),
      ];
      return list_join(statements, "\n");
    },
    example_before,
    description,
    example_message,
    [screen2],
  );
  function example_before() {}
  function screen2(parent) {
    html_cycle_code_list(parent, [
      "inside the parenthesis of an ",
      "if",
      " can be more than just ",
      "true",
      " and ",
      "false",
    ]);
    html_cycle_code_list(parent, [
      "remember ",
      "<",
      " , ",
      "<=",
      " , ",
      ">",
      " , ",
      ">=",
      " , ",
      "===",
      " and ",
      "!==",
      " all return ",
      "true",
      " or ",
      "false",
    ]);
    html_cycle_code_list(parent, [
      "therefore inside the parenthesis of an ",
      "if",
      " could be one of those",
    ]);
  }
}
