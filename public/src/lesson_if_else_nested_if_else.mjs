import { html_cycle_monospace } from "./html_cycle_monospace.mjs";
import { html_style_monospace_bold } from "./html_style_monospace_bold.mjs";
import { integer_random_digit_single } from "./integer_random_digit_single.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { lesson_simple } from "./lesson_simple.mjs";
import { js_code_statement_let_assign } from "./js_code_statement_let_assign.mjs";
import { app_learn_code_log_delimit } from "./app_learn_code_log_delimit.mjs";
import { app_learn_code_log } from "./app_learn_code_log.mjs";
import { string_combine } from "./string_combine.mjs";
import { noop } from "./noop.mjs";
import { html_style_bold } from "./html_style_bold.mjs";
export function lesson_if_else_nested_if_else() {
  let description = "`if` `else` nested inside of an `if";
  let example_message = string_combine("with an ", description);
  return lesson_simple(
    function () {
      let a = integer_random_digit_single();
      let lines = [
        app_learn_code_log(a),
        `if (${a} < 0) {`,
        `if (${a} % 2 === 0) {`,
        app_learn_code_log_delimit("negative and even"),
        `} else {`,
        app_learn_code_log_delimit(`negative and odd`),
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
    html_cycle_monospace(parent, "an `if` `else` can be inside of an `if`");
  }
}
