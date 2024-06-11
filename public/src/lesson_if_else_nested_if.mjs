import { html_cycle_p } from "./html_cycle_p.mjs";
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
export function lesson_if_else_nested_if() {
  let description = "nested `if";
  let example_message = string_combine("with a ", description);
  return lesson_simple(
    function () {
      let a = integer_random_digit_single();
      let lines = [
        app_learn_code_log(a),
        `if (${a} > 0) {`,
        app_learn_code_log_delimit(`positive`),
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
    html_cycle_monospace(parent, "an `if` can be inside another `if`");
    html_cycle_p(
      parent,
      [noop, html_style_bold, html_style_monospace_bold],
      "this is called a `nested `if",
    );
  }
}
