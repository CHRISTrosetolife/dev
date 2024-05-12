import { integer_random_digit_single_positive } from "./integer_random_digit_single_positive.mjs";
import { lesson_simple } from "./lesson_simple.mjs";
import { html_p } from "./html_p.mjs";
import { html_style_alternate } from "./html_style_alternate.mjs";
import { noop } from "./noop.mjs";
import { app_learn_code_style_code_colored } from "./app_learn_code_style_code_colored.mjs";
export function lesson_subtract() {
  const example_message = "subtraction ( `-` )";
  const description = example_message;
  return lesson_simple(
    function () {
      let a = integer_random_digit_single_positive();
      let b = integer_random_digit_single_positive();
      return `console.log(${a} - ${b});`;
    },
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
      [
        "one number can be subtracted from another number using the minus ( ",
        "-",
        " ) sign",
      ],
    );
  }
}
