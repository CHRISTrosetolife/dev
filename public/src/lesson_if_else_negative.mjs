import { html_cycle_code_list } from "./html_cycle_code_list.mjs";
import { html_cycle_bold_list } from "./html_cycle_bold_list.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { app_learn_code_log_delimit } from "./app_learn_code_log_delimit.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { js_code_statement_let_assign } from "./js_code_statement_let_assign.mjs";
import { lesson_simple } from "./lesson_simple.mjs";
import { integer_random } from "./integer_random.mjs";
import { integer_random_digit_single } from "./integer_random_digit_single.mjs";
import { html_hr } from "./html_hr.mjs";
export function lesson_if_else_negative() {
  let category = "negative";
  let description = string_combine_multiple([
    "`if` with `else` about ",
    category,
    " or not",
  ]);
  let example_message = `outputting whether or not a number is ${category}`;
  return lesson_simple(
    function () {
      let a = integer_random_digit_single();
      if (integer_random(1, 3) === 1) {
        a = 0;
      }
      let lines = [
        js_code_statement_let_assign("n", a),
        js_code_statement_let_assign(`is_${category}`, `n < 0`),
        `if (is_${category}) {`,
        app_learn_code_log_delimit(`number is ${category}`),
        `} else {`,
        app_learn_code_log_delimit(`number is not ${category}`),
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
    html_cycle_bold_list(parent, [
      "a number is ",
      "negative",
      " if the number is less than zero",
    ]);
    html_cycle_code_list(parent, [
      "",
      "if",
      " and ",
      "else",
      ` can be used to output whether or not a number is ${category}`,
    ]);
    html_hr(parent);
  }
}
