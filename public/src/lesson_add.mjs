import { lesson_simple } from "./lesson_simple.mjs";
import { lesson_add_quiz } from "./lesson_add_quiz.mjs";
import { html_p } from "./html_p.mjs";
import { html_style_alternate } from "./html_style_alternate.mjs";
import { noop } from "./noop.mjs";
import { app_learn_code_style_code_colored } from "./app_learn_code_style_code_colored.mjs";
export function lesson_add() {
  let example_message = "adding two numbers together";
  let description = "addition ( `+` )";
  return lesson_simple(
    lesson_add_quiz,
    example_before,
    description,
    example_message,
    [],
  );
  function example_before(parent) {
    html_style_alternate(
      parent,
      html_p,
      [noop, app_learn_code_style_code_colored],
      ["two numbers can be added together using the plus ( ", "+", " ) sign"],
    );
  }
}
