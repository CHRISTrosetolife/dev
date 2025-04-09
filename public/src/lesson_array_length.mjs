import { js_code_length } from "./js_code_length.mjs";
import { js_code_dot } from "./js_code_dot.mjs";
import { app_learn_code_log } from "./app_learn_code_log.mjs";
import { lesson_array_source_get_generic } from "./lesson_array_source_get_generic.mjs";
import { lesson_array_sorted } from "./lesson_array_sorted.mjs";
import { lesson_array_two_indices } from "./lesson_array_two_indices.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_cycle_code_multiple } from "./html_cycle_code_multiple.mjs";
import { html_cycle_bold_multiple } from "./html_cycle_bold_multiple.mjs";
import { js_code_array_get } from "./js_code_array_get.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { js_code_statement_let_assign } from "./js_code_statement_let_assign.mjs";
import { app_learn_code_code_part_contrast } from "./app_learn_code_code_part_contrast.mjs";
import { integer_random_digit_single_positive_multiple_sorted } from "./integer_random_digit_single_positive_multiple_sorted.mjs";
import { app_learn_code_random_identifier } from "./app_learn_code_random_identifier.mjs";
import { lesson_simple } from "./lesson_simple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { string_combine } from "./string_combine.mjs";
import { html_p_text_multiple } from "./html_p_text_multiple.mjs";
import { js_code_statement } from "./js_code_statement.mjs";
export function lesson_array_length() {
  let description = "array length";
  let example_message = string_combine("with an ", description);
  let count = 2;
  let v = lesson_simple(
    lesson_array_source_get_generic(
      count,
      function second_get(list_identifier, count) {
        let second = app_learn_code_log(
          js_code_dot(list_identifier, js_code_length()),
        );
        return second;
      },
    ),
    example_before,
    description,
    example_message,
    [screen1, screen2, lesson_array_sorted(count)],
  );
  return v;
  function example_before(parent) {
    html_cycle_code_multiple(parent, [
      "`[]` creates a new array",
      "here is code to create a new array with two elements and assign the newly created array to a variable: ",
    ]);
  }
  function screen1(parent) {
    let a = app_learn_code_random_identifier();
    let values = integer_random_digit_single_positive_multiple_sorted(count);
    html_cycle_bold_multiple(parent, [
      "in javascript , lists are called `arrays",
      "the items inside of an array are called `elements",
    ]);
    html_cycle_code_multiple(parent, [
      "`[]` creates a new array",
      "here is code to create a new array with two elements and assign the newly created array to a variable: ",
    ]);
    app_learn_code_code_part_contrast(
      parent,
      js_code_statement_let_assign(a, js_code_array(values)),
    );
  }
  function screen2(parent) {
    let a = "list";
    let values = [3.2, 4.5];
    html_p_text_multiple(parent, [
      "normally , to count , start at 1 and keep going , like this : 1 , 2 , 3 , 4 , 5 , ...",
      "instead of starting at 1 , we could start with 0 like this : 0 , 1 , 2 , 3 , 4",
    ]);
    html_cycle_code_multiple(parent, [
      lesson_array_two_indices(),
      "here is some example code :",
    ]);
    app_learn_code_code_part_contrast(
      parent,
      list_join_newline([
        js_code_statement_let_assign(a, js_code_array(values)),
        string_combine_multiple([
          js_code_statement(js_code_array_get(a, 0)),
          " // use 0 for the first element , 3.2",
        ]),
        string_combine_multiple([
          js_code_statement(js_code_array_get(a, 1)),
          " // use 1 for the first element , 4.5",
        ]),
      ]),
    );
    html_cycle_code_multiple(parent, [
      "notice that `list[0]` is used to refer to the first element",
      "notice that `list[1]` is used to refer to the second element",
    ]);
  }
}
