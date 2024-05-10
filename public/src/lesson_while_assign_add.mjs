import { app_learn_code_code_part_contrast } from "./app_learn_code_code_part_contrast.mjs";
import { js_code_statement_add_assign } from "./js_code_statement_add_assign.mjs";
import { js_code_ternary } from "./js_code_ternary.mjs";
import { app_learn_code_log_join_plus } from "./app_learn_code_log_join_plus.mjs";
import { lesson_simple } from "./lesson_simple.mjs";
import { string_combine } from "./string_combine.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { js_code_statement_let_assign } from "./js_code_statement_let_assign.mjs";
import { string_delimit } from "./string_delimit.mjs";
import { integer_random_digit_single } from "./integer_random_digit_single.mjs";
import { app_learn_code_log } from "./app_learn_code_log.mjs";
import { js_code_statement_assign } from "./js_code_statement_assign.mjs";
export function lesson_while_assign_add() {
  let description = "assign add shorthand ( += )";
  let example_message = string_combine("with an ", description);
  return lesson_simple(
    function () {
      let n = integer_random_digit_single();
      let lines = [
        app_learn_code_log(n),
        js_code_statement_let_assign(
          "positive",
          js_code_ternary(
            `${n} <= 0`,
            string_delimit("not "),
            string_delimit(""),
          ),
        ),
        app_learn_code_log_join_plus(["positive", string_delimit("positive")]),
        js_code_statement_let_assign(
          "even",
          js_code_ternary(
            `${n} % 2 === 0`,
            string_delimit("even"),
            string_delimit("odd"),
          ),
        ),
        app_learn_code_log("even"),
      ];
      return list_join_newline(lines);
    },
    example_before,
    description,
    example_message,
    [],
  );
  function example_before(parent) {}
  function screen1(parent) {
    "here is some code";
    js_code_statement_assign("a", "a + b");
    ("that code can be shortened to :");
    let a = "a";
    let b = "b";
    app_learn_code_code_part_contrast, js_code_statement_add_assign(a, b);
  }
}
