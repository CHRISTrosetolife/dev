import { js_code_array_get } from "./js_code_array_get.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { js_code_statement_let_assign } from "./js_code_statement_let_assign.mjs";
import { app_learn_code_code_part_contrast } from "./app_learn_code_code_part_contrast.mjs";
import { html_style_alternate_monospace_short_multiple } from "./html_style_alternate_monospace_short_multiple.mjs";
import { html_style_alternate_bold_short } from "./html_style_alternate_bold_short.mjs";
import { integer_random_digit_single_positive_multiple_sorted } from "./integer_random_digit_single_positive_multiple_sorted.mjs";
import { app_learn_code_random_identifier } from "./app_learn_code_random_identifier.mjs";
import { lesson_simple } from "./lesson_simple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { string_combine } from "./string_combine.mjs";
import { html_p_text_multiple } from "./html_p_text_multiple.mjs";
export function lesson_array_two() {
  let description = "array with two items";
  let example_message = string_combine("with an ", description);
  return lesson_simple(
    function () {
      let lines = [];
      return list_join_newline(lines);
    },
    example_before,
    description,
    example_message,
    [screen1, screen2, screen3],
  );
  function example_before(parent) {}
  function screen1(parent) {
    let a = app_learn_code_random_identifier();
    let values = integer_random_digit_single_positive_multiple_sorted(2);
    html_style_alternate_bold_short(
      parent,
      "in javascript , lists are called `arrays",
    );
    html_style_alternate_monospace_short_multiple(parent, [
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
      "to tell javascript that you want the first item in the list , you use the number 0",
    ]);
    html_style_alternate_monospace_short_multiple(parent, [
      "the number `0` refers to the first item",
      "the number `1` refers to the second item",
      "like this :",
    ]);
    app_learn_code_code_part_contrast(parent, [
      js_code_statement_let_assign(a, js_code_array(values)),
      `${js_code_array_get(a, 0)} // use 0 for the first item , 3.2`,
      `${js_code_array_get(a, 1)} // use 1 for the first item , 4.5`,
    ]);
  }
  function screen3(parent) {
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
