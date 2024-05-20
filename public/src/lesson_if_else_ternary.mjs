import { js_code_ternary } from "./js_code_ternary.mjs";
import { app_learn_code_log_join_plus } from "./app_learn_code_log_join_plus.mjs";
import { lesson_simple } from "./lesson_simple.mjs";
import { string_combine } from "./string_combine.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { js_code_statement_let_assign } from "./js_code_statement_let_assign.mjs";
import { string_delimit } from "./string_delimit.mjs";
import { integer_random_digit_single } from "./integer_random_digit_single.mjs";
import { js_code_statement_assign } from "./js_code_statement_assign.mjs";
import { app_learn_code_log } from "./app_learn_code_log.mjs";
import { js_code_statement_let } from "./js_code_statement_let.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { app_learn_code_code_part_contrast } from "./app_learn_code_code_part_contrast.mjs";
export function lesson_if_else_ternary() {
  let description = "ternary ( `a ? b : c` )";
  let example_message = string_combine("with a ", description);
  return lesson_simple(
    function () {
      let n = integer_random_digit_single();
      let lines = [
        app_learn_code_log(n),
        js_code_statement_let_assign(
          "before",
          js_code_ternary(
            `${n} <= 0`,
            string_delimit("not "),
            string_delimit(""),
          ),
        ),
        app_learn_code_log_join_plus(["before", string_delimit("positive")]),
      ];
      return list_join_newline(lines);
    },
    example_before,
    description,
    example_message,
    [screen1],
  );
  function example_before(parent) {}
  function screen1(parent) {
    html_p_text(parent, "here is some code :");
    let lines = [
      js_code_statement_let("a"),
      `if (b) {`,
      js_code_statement_assign("a", "c"),
      `} else {`,
      js_code_statement_assign("a", "d"),
      `}`,
    ];
    app_learn_code_code_part_contrast(parent, list_join_newline(lines));
    html_p_text(parent, "that code can be shortened to :");
    app_learn_code_code_part_contrast(
      parent,
      js_code_statement_let_assign("a", js_code_ternary("b", "c", "d")),
    );
  }
}
