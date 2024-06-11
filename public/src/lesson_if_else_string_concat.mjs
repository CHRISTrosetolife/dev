import { html_cycle_code } from "./html_cycle_code.mjs";
import { html_cycle_bold } from "./html_cycle_bold.mjs";
import { lesson_if_else_string_concat_quiz } from "./lesson_if_else_string_concat_quiz.mjs";
import { lesson_simple } from "./lesson_simple.mjs";
import { string_combine } from "./string_combine.mjs";
export function lesson_if_else_string_concat() {
  let description = "two strings combined";
  let example_message = string_combine("with ", description);
  return lesson_simple(
    function () {
      let concat_count = 2;
      return lesson_if_else_string_concat_quiz(concat_count);
    },
    example_before,
    description,
    example_message,
    [screen1],
  );
  function example_before(parent) {}
  function screen1(parent) {
    html_cycle_code(
      parent,
      "remember , in javascript , if `a` and `b` are numbers then `a + b` will add the two numbers together",
    );
    html_cycle_code(
      parent,
      "however , if `a` and `b` are strings then `a + b` will combine the two strings together",
    );
    html_cycle_bold(
      parent,
      "when two strings are conbined , it is called `concatenation",
    );
  }
}
