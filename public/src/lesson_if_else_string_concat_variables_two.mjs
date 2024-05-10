import { lesson_screen_variables_alphabetical } from "./lesson_screen_variables_alphabetical.mjs";
import { lesson_if_else_string_concat_variables_quiz } from "./lesson_if_else_string_concat_variables_quiz.mjs";
import { html_style_alternate_monospace_short } from "./html_style_alternate_monospace_short.mjs";
import { lesson_simple } from "./lesson_simple.mjs";
import { string_combine } from "./string_combine.mjs";
export function lesson_if_else_string_concat_variables_two() {
  let description = "string combined with two variables";
  let example_message = string_combine("with ", description);
  return lesson_simple(
    function () {
      return lesson_if_else_string_concat_variables_quiz(2);
    },
    example_before,
    description,
    example_message,
    [lesson_screen_variables_alphabetical],
  );
  function example_before(parent) {
    html_style_alternate_monospace_short(
      parent,
      "strings can be concatentated with multiple variables",
    );
  }
}
