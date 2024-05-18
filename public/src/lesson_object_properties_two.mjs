import { js_code_statement_assign } from "./js_code_statement_assign.mjs";
import { js_code_dot } from "./js_code_dot.mjs";
import { integer_random_digit_single_positive_multiple_sorted } from "./integer_random_digit_single_positive_multiple_sorted.mjs";
import { app_learn_code_random_identifiers_sorted } from "./app_learn_code_random_identifiers_sorted.mjs";
import { js_code_braces } from "./js_code_braces.mjs";
import { js_code_statement_let_assign } from "./js_code_statement_let_assign.mjs";
import { lesson_simple } from "./lesson_simple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_code_log } from "./app_learn_code_log.mjs";
import { string_combine } from "./string_combine.mjs";
export function lesson_object_properties_two() {
  let description = "object with two properties";
  let example_message = string_combine("with an ", description);
  return lesson_simple(
    function () {
      let [a, b, c] = app_learn_code_random_identifiers_sorted(3);
      let [d, e] = integer_random_digit_single_positive_multiple_sorted(2);
      let lines = [
        js_code_statement_let_assign(a, js_code_braces()),
        js_code_statement_assign(js_code_dot(a, b), d),
        js_code_statement_assign(js_code_dot(a, c), e),
        app_learn_code_log(`${js_code_dot(a, b)} + ' ' + ${js_code_dot(a, c)}`),
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
    "a variable stores one value";
    "an `object` can store more than one value";
    "`{}` creates a new object";
    "here is code to create a new object and assign it to a variable: ";
    "an object can have its own variables called `properties`";
    "a variable has a name and a value";
    "a property has a name and a value";
  }
}
