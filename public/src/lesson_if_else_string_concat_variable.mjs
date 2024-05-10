import { lesson_if_else_string_concat_variables_quiz } from "./lesson_if_else_string_concat_variables_quiz.mjs";
import { html_style_alternate_monospace_short } from "./html_style_alternate_monospace_short.mjs";
import { lesson_simple } from "./lesson_simple.mjs";
import { string_combine } from "./string_combine.mjs";
export function lesson_if_else_string_concat_variable() {
  let description = "string combined a variable";
  let example_message = string_combine("with ", description);
  return lesson_simple(
    function () {
      return lesson_if_else_string_concat_variables_quiz(1);
    },
    example_before,
    description,
    example_message,
    [],
  );
  function example_before(parent) {
    html_style_alternate_monospace_short(
      parent,
      "strings can be concatentated with a variable",
    );
  }
}
