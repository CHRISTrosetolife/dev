import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { js_code_statement_let_assign } from "./js_code_statement_let_assign.mjs";
import { app_learn_code_log_delimit } from "./app_learn_code_log_delimit.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { html_style_alternate_bold } from "./html_style_alternate_bold.mjs";
import { html_style_alternate_monospace } from "./html_style_alternate_monospace.mjs";
import { lesson_simple } from "./lesson_simple.mjs";
import { integer_random } from "./integer_random.mjs";
import { integer_random_digit_single } from "./integer_random_digit_single.mjs";
import { html_hr } from "./html_hr.mjs";
export function lesson_if_else_positive() {
  let category = "positive";
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
        js_code_statement_let_assign("is_positive", `${a} > 0`),
        `if (is_positive) {`,
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
    html_style_alternate_bold(parent, [
      "a number is ",
      "positive",
      " if the number is greater than zero",
    ]);
    ("a number is negative if the number is less than zero");
    ("if a number is neither positive nor negative , the number must be 0");
    html_style_alternate_monospace(parent, [
      "",
      "if",
      " and ",
      "else",
      ` can be used to output whether or not a number is ${category}`,
    ]);
    html_hr(parent);
  }
}
