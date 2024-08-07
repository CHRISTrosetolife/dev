import { js_code_object_property } from "./js_code_object_property.mjs";
import { app_learn_code_code_part_contrast } from "./app_learn_code_code_part_contrast.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_p_text_multiple } from "./html_p_text_multiple.mjs";
import { integer_random_digit_single_positive } from "./integer_random_digit_single_positive.mjs";
import { js_code_statement_assign } from "./js_code_statement_assign.mjs";
import { js_code_dot } from "./js_code_dot.mjs";
import { app_learn_code_random_identifiers_sorted } from "./app_learn_code_random_identifiers_sorted.mjs";
import { js_code_braces } from "./js_code_braces.mjs";
import { js_code_statement_let_assign } from "./js_code_statement_let_assign.mjs";
import { lesson_simple } from "./lesson_simple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_code_log } from "./app_learn_code_log.mjs";
import { string_combine } from "./string_combine.mjs";
export function lesson_object_property_shorthand() {
  let description = "object with one property shorthand";
  let example_message = string_combine("with an ", description);
  return lesson_simple(
    function () {
      let [a, b] = app_learn_code_random_identifiers_sorted(2);
      let c = integer_random_digit_single_positive();
      let lines = [
        js_code_statement_let_assign(a, js_code_object_property(b, c)),
        app_learn_code_log(js_code_dot(a, b)),
      ];
      return list_join_newline(lines);
    },
    example_before,
    description,
    example_message,
    [screen1, screen2],
  );
  function example_before(parent) {}
  function screen1(parent) {
    let [a, b] = app_learn_code_random_identifiers_sorted(2);
    let c = integer_random_digit_single_positive();
    html_p_text(parent, "here is some code :");
    let lines = [
      js_code_statement_let_assign(a, js_code_braces()),
      js_code_statement_assign(js_code_dot(a, b), c),
    ];
    app_learn_code_code_part_contrast(parent, list_join_newline(lines));
    html_p_text(parent, "that code can be shortened to :");
    app_learn_code_code_part_contrast(
      parent,
      js_code_statement_let_assign(a, js_code_object_property(b, c)),
    );
  }
  function screen2(parent) {
    html_p_text_multiple(parent, [
      "in this lesson , variable names will appear alphabetically",
      "for example , this is allowed :",
    ]);
    app_learn_code_code_part_contrast(
      parent,
      js_code_statement_let_assign("a", js_code_object_property("b", 1)),
    );
    html_p_text(parent, ["however , this is not allowed :"]);
    app_learn_code_code_part_contrast(
      parent,
      js_code_statement_let_assign("b", js_code_object_property("a", 1)),
    );
  }
}
