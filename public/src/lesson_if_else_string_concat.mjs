import { lesson_if_else_string_concat_quiz } from "./lesson_if_else_string_concat_quiz.mjs";
import { html_style_alternate_bold_short } from "./html_style_alternate_bold_short.mjs";
import { html_style_alternate_monospace_short } from "./html_style_alternate_monospace_short.mjs";
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
    html_style_alternate_monospace_short(
      parent,
      "remember , in javascript if `a` and `b` are numbers then `a + b` will add the two numbers together",
    );
    html_style_alternate_monospace_short(
      parent,
      "however , if `a` and `b` are strings then `a + b` will combine the two strings together",
    );
    html_style_alternate_bold_short(
      parent,
      "when two strings are conbined , it is called `concatentation",
    );
  }
}
