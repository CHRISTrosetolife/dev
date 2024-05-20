import { lesson_simple } from "./lesson_simple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { string_combine } from "./string_combine.mjs";
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
    [screen1],
  );
  function example_before(parent) {}
  function screen1(parent) {
    let a = app_learn_code_random_identifier();
    html_style_alternate_bold_short(
      parent,
      "in javascript , lists are called `arrays",
    );
    html_style_alternate_monospace_short_multiple(parent, [
      "`[]` creates a new list",
      "here is code to create a new array and assign the newly created array to a variable: ",
    ]);
    app_learn_code_code_part_contrast(
      parent,
      js_code_statement_let_assign(a, js_code_braces()),
    );
  }
}
