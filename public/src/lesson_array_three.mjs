import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_cycle_code_multiple } from "./html_cycle_code_multiple.mjs";
import { html_cycle_bold_multiple } from "./html_cycle_bold_multiple.mjs";
import { app_learn_code_log_combined } from "./app_learn_code_log_combined.mjs";
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
import { range } from "./range.mjs";
import { list_map } from "./list_map.mjs";
export function lesson_array_three() {
  let description = "array with three items";
  let example_message = string_combine("with an ", description);
  let count = 3;
  let v = lesson_simple(
    lesson_array_source_get(count),
    example_before,
    description,
    example_message,
    [screen1, screen2, screen3],
  );
  return v;
  function example_before(parent) {}
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
      "to tell javascript that you want the first element in an array , you use the number `0` , not the number `1`",
      "the number `0` refers to the first element",
      "the number `1` refers to the second element",
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
  function screen3(parent) {
    let a = app_learn_code_random_identifier();
    html_p_text_multiple(parent, [
      "in this lesson numbers will appear from smallest to largest",
      "for example , this is allowed :",
    ]);
    app_learn_code_code_part_contrast(
      parent,
      js_code_statement_let_assign(a, js_code_array([1, 2])),
    );
    html_p_text_multiple(parent, ["however , this is not allowed :"]);
    app_learn_code_code_part_contrast(
      parent,
      js_code_statement_let_assign(a, js_code_array([2, 1])),
    );
  }
}
function lesson_array_source_get(count) {
    return function () {
        let a = app_learn_code_random_identifier();
        let values = integer_random_digit_single_positive_multiple_sorted(count);
        let outputs = list_map(range(count), function (i) {
            let v2 = js_code_array_get(a, i);
            return v2;
        });
        let list = [
            js_code_statement_let_assign(a, js_code_array(values)),
            app_learn_code_log_combined(outputs),
        ];
        let v3 = list_join_newline(list);
        return v3;
    };
}

