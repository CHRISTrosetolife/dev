import { js_code_statement_decrement } from "./js_code_statement_decrement.mjs";
import { js_code_statement_subtract_assign } from "./js_code_statement_subtract_assign.mjs";
import { js_code_statement_let_assign } from "./js_code_statement_let_assign.mjs";
import { app_learn_code_random_identifier } from "./app_learn_code_random_identifier.mjs";
import { app_learn_code_code_part_contrast } from "./app_learn_code_code_part_contrast.mjs";
import { lesson_simple } from "./lesson_simple.mjs";
import { string_combine } from "./string_combine.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_code_log } from "./app_learn_code_log.mjs";
import { integer_random_digit_single_positive } from "./integer_random_digit_single_positive.mjs";
import { html_p_text } from "./html_p_text.mjs";
export function lesson_while_decrement() {
  let description = "decrement ( `--` )";
  let example_message = string_combine("with a ", description);
  return lesson_simple(
    function () {
      let name = app_learn_code_random_identifier();
      let value = integer_random_digit_single_positive();
      let lines = [
        js_code_statement_let_assign(name, value),
        js_code_statement_decrement(name),
        app_learn_code_log(name),
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
    let a = "a";
    app_learn_code_code_part_contrast(
      parent,
      js_code_statement_subtract_assign(a, "1"),
    );
    html_p_text(parent, "that code can be shortened to :");
    app_learn_code_code_part_contrast(parent, js_code_statement_decrement(a));
  }
}
