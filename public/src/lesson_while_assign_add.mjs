import { lesson_screen_variables_alphabetical } from "./lesson_screen_variables_alphabetical.mjs";
import { app_learn_code_code_part_contrast } from "./app_learn_code_code_part_contrast.mjs";
import { js_code_statement_add_assign } from "./js_code_statement_add_assign.mjs";
import { lesson_simple } from "./lesson_simple.mjs";
import { string_combine } from "./string_combine.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { js_code_statement_let_assign } from "./js_code_statement_let_assign.mjs";
import { app_learn_code_log } from "./app_learn_code_log.mjs";
import { js_code_statement_assign } from "./js_code_statement_assign.mjs";
import { app_learn_code_random_identifier } from "./app_learn_code_random_identifier.mjs";
import { integer_random_digit_single_positive } from "./integer_random_digit_single_positive.mjs";
import { call_multiple } from "./call_multiple.mjs";
import { html_p_text } from "./html_p_text.mjs";
export function lesson_while_assign_add() {
  let description = "assign add shorthand ( `+=` )";
  let example_message = string_combine("with an ", description);
  return lesson_simple(
    function () {
      let n = app_learn_code_random_identifier();
      let [a, b] = call_multiple(integer_random_digit_single_positive, 2);
      let lines = [
        js_code_statement_let_assign(n, b),
        js_code_statement_add_assign(n, a),
        app_learn_code_log(n),
      ];
      return list_join_newline(lines);
    },
    example_before,
    description,
    example_message,
    [screen1, lesson_screen_variables_alphabetical],
  );
  function example_before(parent) {}
  function screen1(parent) {
    html_p_text(parent, "here is some code :");
    app_learn_code_code_part_contrast(
      parent,
      js_code_statement_assign("a", "a + b"),
    );
    html_p_text(parent, "that code can be shortened to :");
    let a = "a";
    let b = "b";
    app_learn_code_code_part_contrast(
      parent,
      js_code_statement_add_assign(a, b),
    );
  }
  function screen3(parent) {
    html_p_text(parent, "here is some code :");
    app_learn_code_code_part_contrast(
      parent,
      js_code_statement_assign("a", "a + b"),
    );
    html_p_text(parent, "that code can be shortened to :");
    let a = "a";
    let b = "b";
    app_learn_code_code_part_contrast(
      parent,
      js_code_statement_add_assign(a, b),
    );
  }
}
