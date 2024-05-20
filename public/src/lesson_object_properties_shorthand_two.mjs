import { js_code_object_properties } from "./js_code_object_properties.mjs";
import { integer_random_digit_single_positive_multiple } from "./integer_random_digit_single_positive_multiple.mjs";
import { app_learn_code_code_part_contrast } from "./app_learn_code_code_part_contrast.mjs";
import { html_p_text } from "./html_p_text.mjs";
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
import { list_skip } from "./list_skip.mjs";
import { list_join } from "./list_join.mjs";
import { list_map } from "./list_map.mjs";
export function lesson_object_properties_shorthand_two() {
  let description = "object with two properties shorthand";
  let example_message = string_combine("with an ", description);
  return lesson_simple(
    function () {
      let identifiers = app_learn_code_random_identifiers_sorted(3);
      let [a] = identifiers;
      let names = list_skip(identifiers, 1);
      let values = integer_random_digit_single_positive_multiple(2);
      let outputs = list_map(names, (name) => js_code_dot(a, name));
      let lines = [
        js_code_statement_let_assign(
          a,
          js_code_object_properties(names, values),
        ),
        app_learn_code_log(list_join(outputs, " + ' ' + ")),
      ];
      let result = list_join_newline(lines);
      return result;
    },
    example_before,
    description,
    example_message,
    [screen1, screen2],
  );
  function example_before(parent) {}
  function screen1(parent) {
    let identifiers = app_learn_code_random_identifiers_sorted(3);
    let [a, b, c] = identifiers;
    let names = list_skip(identifiers, 1);
    let values = integer_random_digit_single_positive_multiple(2);
    let [d, e] = values;
    html_p_text(parent, "here is some code :");
    let lines = [
      js_code_statement_let_assign(a, js_code_braces()),
      js_code_statement_assign(js_code_dot(a, b), d),
      js_code_statement_assign(js_code_dot(a, c), e),
    ];
    app_learn_code_code_part_contrast(parent, list_join_newline(lines));
    html_p_text(parent, "that code can be shortened to :");
    app_learn_code_code_part_contrast(
      parent,
      js_code_statement_let_assign(a, js_code_object_properties(names, values)),
    );
  }
  function screen2(parent) {
    html_p_text_multiple(parent, [
      "in this lesson , variable names will appear alphabetically",
      "for example , this is allowed :",
    ]);
    app_learn_code_code_part_contrast(
      parent,
      js_code_statement_let_assign(
        "a",
        js_code_object_properties(["b", "c"], [1, 2]),
      ),
    );
    html_p_text(parent, ["however , this is not allowed :"]);
    app_learn_code_code_part_contrast(
      parent,
      js_code_statement_let_assign(
        "c",
        js_code_object_properties(["b", "a"], [1, 2]),
      ),
    );
  }
}
