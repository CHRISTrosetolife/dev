import { lesson_simple } from "./lesson_simple.mjs";
import { html_p } from "./html_p.mjs";
import { html_style_alternate } from "./html_style_alternate.mjs";
import { noop } from "./noop.mjs";
import { html_style_monospace } from "./html_style_monospace.mjs";
import { random_50_50 } from "./random_50_50.mjs";
import { lesson_console_log_quiz_value } from "./lesson_console_log_quiz_value.mjs";
import { app_learn_code_style_code_colored } from "./app_learn_code_style_code_colored.mjs";
export function lesson_equal_string() {
  const description = "equal ( `===` ) ( strings )";
  const example_message = "outputting whether or not two strings are equal";
  return lesson_simple(
    source_get,
    example_before,
    description,
    example_message,
    [],
  );
  function source_get() {
    let a = lesson_console_log_quiz_value();
    let b;
    if (random_50_50()) {
      b = a;
    } else {
      b = lesson_console_log_quiz_value();
    }
    return `console.log(${a} === ${b});`;
  }
  function example_before(parent) {
    html_style_alternate(
      parent,
      html_p,
      [app_learn_code_style_code_colored, noop],
      ["===", " also checks if two strings are the same or not"],
    );
  }
}
