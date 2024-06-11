import { html_cycle_monospace_list } from "./html_cycle_monospace_list.mjs";
import { app_learn_code_random_boolean_binary } from "./app_learn_code_random_boolean_binary.mjs";
import { list_join } from "./list_join.mjs";
import { js_code_statement_let_assign } from "./js_code_statement_let_assign.mjs";
import { app_learn_code_random_identifier } from "./app_learn_code_random_identifier.mjs";
import { lesson_simple } from "./lesson_simple.mjs";
import { lesson_console_log_quiz } from "./lesson_console_log_quiz.mjs";
export function lesson_if_variable() {
  let description = "`if` with a variable";
  let example_message = description;
  return lesson_simple(
    function () {
      let boolean = app_learn_code_random_boolean_binary();
      let name = app_learn_code_random_identifier();
      let statements = [
        js_code_statement_let_assign(name, boolean),
        lesson_console_log_quiz(),
        `if (${name}) {
${lesson_console_log_quiz()}
}`,
        lesson_console_log_quiz(),
      ];
      return list_join(statements, "\n");
    },
    example_before,
    description,
    example_message,
    [],
  );
  function example_before(parent) {
    html_cycle_monospace_list(parent, [
      "inside the parenthesis of an ",
      "if",
      " could also be a variable",
    ]);
  }
}
