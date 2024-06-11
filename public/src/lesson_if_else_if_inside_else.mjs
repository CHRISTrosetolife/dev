import { html_cycle_code } from "./html_cycle_code.mjs";
import { integer_random_digit_single } from "./integer_random_digit_single.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { lesson_simple } from "./lesson_simple.mjs";
import { js_code_statement_let_assign } from "./js_code_statement_let_assign.mjs";
import { app_learn_code_log_delimit } from "./app_learn_code_log_delimit.mjs";
import { app_learn_code_log } from "./app_learn_code_log.mjs";
import { string_combine } from "./string_combine.mjs";
import { noop } from "./noop.mjs";
import { html_style_bold } from "./html_style_bold.mjs";
export function lesson_if_else_if_inside_else() {
  let description = "`if` inside of an `else";
  let example_message = string_combine("with an ", description);
  return lesson_simple(
    function () {
      let a = integer_random_digit_single();
      let lines = [
        `if (${a} <= 0) {`,
        app_learn_code_log_delimit(`zero or negative`),
        `} else {`,
        app_learn_code_log_delimit("positive"),
        `if (${a} % 2 === 0) {`,
        app_learn_code_log_delimit("positive and even"),
        `}`,
        `}`,
      ];
      return list_join_newline(lines);
    },
    example_before,
    description,
    example_message,
    [],
  );
  function example_before(parent) {
    html_cycle_code(parent, "an `if` can be inside an `else`");
  }
}
