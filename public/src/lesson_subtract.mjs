import { html_cycle_list } from "./html_cycle_list.mjs";
import { html_style_code } from "./html_style_code.mjs";
import { integer_random_digit_single_positive } from "./integer_random_digit_single_positive.mjs";
import { lesson_simple } from "./lesson_simple.mjs";
import { html_p } from "./html_p.mjs";
import { noop } from "./noop.mjs";
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
    html_cycle_list(
      parent,
      html_p,
      [noop, html_style_code],
      [
        "one number can be subtracted from another number using the minus ( ",
        "-",
        " ) sign",
      ],
    );
  }
}
