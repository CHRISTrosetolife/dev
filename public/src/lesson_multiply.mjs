import { html_style_alternate_list } from "./html_style_alternate_list.mjs";
import { html_style_code } from "./html_style_code.mjs";
import { integer_random_digit_single_positive } from "./integer_random_digit_single_positive.mjs";
import { lesson_simple } from "./lesson_simple.mjs";
import { html_p } from "./html_p.mjs";
import { noop } from "./noop.mjs";
import { html_style_monospace } from "./html_style_monospace.mjs";
export function lesson_multiply() {
  const example_message = "mutiplying two numbers";
  const description = "multiplication ( `*` )";
  return lesson_simple(
    function () {
      let a = integer_random_digit_single_positive();
      let b = integer_random_digit_single_positive();
      return `console.log(${a} * ${b});`;
    },
    example_before,
    description,
    example_message,
    [],
  );
  function example_before(parent) {
    html_style_alternate_list(
      parent,
      html_p,
      [noop, html_style_code],
      [
        "two numbers can be multiplied together using the asterisk ( ",
        "*",
        " ) symbol",
      ],
    );
  }
}
