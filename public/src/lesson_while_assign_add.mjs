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
export function lesson_while_assign_add() {
  let description = "two ternaries";
  let example_message = string_combine("with ", description);
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
}
