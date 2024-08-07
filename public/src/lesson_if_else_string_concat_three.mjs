import { html_cycle_code } from "./html_cycle_code.mjs";
import { lesson_if_else_string_concat_quiz } from "./lesson_if_else_string_concat_quiz.mjs";
import { lesson_simple } from "./lesson_simple.mjs";
import { string_combine } from "./string_combine.mjs";
export function lesson_if_else_string_concat_three() {
  let description = "three strings combined";
  let example_message = string_combine("with ", description);
  return lesson_simple(
    function () {
      let concat_count = 3;
      return lesson_if_else_string_concat_quiz(concat_count);
    },
    example_before,
    description,
    example_message,
    [],
  );
  function example_before(parent) {
    html_cycle_code(
      parent,
      "three strings can be concatenated  using multiple `+",
    );
  }
}
