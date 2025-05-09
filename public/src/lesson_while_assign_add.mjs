import { list_sort_map } from "./list_sort_map.mjs";
import { list_sort_string_map } from "./list_sort_string_map.mjs";
import { lesson_screen_variables_numbers_sorted } from "./lesson_screen_variables_numbers_sorted.mjs";
import { app_learn_code_random_identifiers } from "./app_learn_code_random_identifiers.mjs";
import { app_learn_code_code_part_contrast } from "./app_learn_code_code_part_contrast.mjs";
import { js_code_statement_add_assign } from "./js_code_statement_add_assign.mjs";
import { lesson_simple } from "./lesson_simple.mjs";
import { string_combine } from "./string_combine.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_code_log } from "./app_learn_code_log.mjs";
import { js_code_statement_assign } from "./js_code_statement_assign.mjs";
import { integer_random_digit_single_positive } from "./integer_random_digit_single_positive.mjs";
import { call_multiple } from "./call_multiple.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { identity } from "./identity.mjs";
import { js_code_statement_let_assign_multiple } from "./js_code_statement_let_assign_multiple.mjs";
export function lesson_while_assign_add() {
  let description = "assign add shorthand ( `+=` )";
  let example_message = string_combine("with an ", description);
  return lesson_simple(
    function () {
      let names = app_learn_code_random_identifiers(2);
      list_sort_string_map(names, identity);
      let [a, b] = names;
      let values = call_multiple(integer_random_digit_single_positive, 2);
      list_sort_map(values, identity);
      let lines = [
        js_code_statement_let_assign_multiple(names, values),
        js_code_statement_add_assign(a, b),
        app_learn_code_log(a),
      ];
      return list_join_newline(lines);
    },
    example_before,
    description,
    example_message,
    [screen1, lesson_screen_variables_numbers_sorted],
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
}
