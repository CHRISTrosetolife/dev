import { integer_random_digit_single_positive_multiple } from "./integer_random_digit_single_positive_multiple.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { app_learn_code_code_part_contrast } from "./app_learn_code_code_part_contrast.mjs";
import { html_p_text_multiple } from "./html_p_text_multiple.mjs";
import { js_code_statement_assign } from "./js_code_statement_assign.mjs";
import { js_code_dot } from "./js_code_dot.mjs";
import { app_learn_code_random_identifiers_sorted } from "./app_learn_code_random_identifiers_sorted.mjs";
import { js_code_braces } from "./js_code_braces.mjs";
import { js_code_statement_let_assign } from "./js_code_statement_let_assign.mjs";
import { lesson_simple } from "./lesson_simple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_code_log } from "./app_learn_code_log.mjs";
import { string_combine } from "./string_combine.mjs";
export function lesson_object_properties_three() {
  let description = "object with three properties";
  let example_message = string_combine("with an ", description);
  return lesson_simple(
    function () {
      let [a, b, c, d] = app_learn_code_random_identifiers_sorted(4);
      let [e, f, g] = integer_random_digit_single_positive_multiple(3);
      let lines = [
        js_code_statement_let_assign(a, js_code_braces()),
        js_code_statement_assign(js_code_dot(a, b), e),
        js_code_statement_assign(js_code_dot(a, c), f),
        js_code_statement_assign(js_code_dot(a, d), g),
        app_learn_code_log(
          `${js_code_dot(a, b)} + ' ' + ${js_code_dot(a, c)} + ' ' + ${js_code_dot(a, d)}`,
        ),
      ];
      return list_join_newline(lines);
    },
    example_before,
    description,
    example_message,
    [screen1, screen2],
  );
  function example_before(parent) {
    html_p_text(parent, "an object can have three properties");
  }
  function screen1(parent) {
    html_p_text_multiple(parent, [
      "in this lesson , variable names will appear alphabetically",
      "for example , this is allowed :",
    ]);
    app_learn_code_code_part_contrast(
      parent,
      list_join_newline([
        js_code_statement_let_assign("a", js_code_braces()),
        js_code_statement_assign(js_code_dot("a", "b"), 1),
        js_code_statement_assign(js_code_dot("a", "c"), 2),
        js_code_statement_assign(js_code_dot("a", "d"), 3),
      ]),
    );
    html_p_text(parent, ["however , this is not allowed :"]);
    app_learn_code_code_part_contrast(
      parent,
      list_join_newline([
        js_code_statement_let_assign("d", js_code_braces()),
        js_code_statement_assign(js_code_dot("d", "c"), 1),
        js_code_statement_assign(js_code_dot("d", "b"), 2),
        js_code_statement_assign(js_code_dot("d", "a"), 3),
      ]),
    );
  }
  function screen2(parent) {
    html_p_text_multiple(parent, [
      "in this lesson , numbers will appear from smallest to largest",
      "for example , this is allowed :",
    ]);
    app_learn_code_code_part_contrast(
      parent,
      list_join_newline([
        js_code_statement_let_assign("a", js_code_braces()),
        js_code_statement_assign(js_code_dot("a", "b"), 1),
        js_code_statement_assign(js_code_dot("a", "c"), 2),
        js_code_statement_assign(js_code_dot("a", "d"), 3),
      ]),
    );
    html_p_text(parent, ["however , this is not allowed :"]);
    app_learn_code_code_part_contrast(
      parent,
      list_join_newline([
        js_code_statement_let_assign("a", js_code_braces()),
        js_code_statement_assign(js_code_dot("a", "b"), 3),
        js_code_statement_assign(js_code_dot("a", "c"), 2),
        js_code_statement_assign(js_code_dot("a", "d"), 1),
      ]),
    );
  }
}
