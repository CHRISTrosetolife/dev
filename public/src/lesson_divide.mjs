import { html_cycle_list } from "./html_cycle_list.mjs";
import { html_style_code } from "./html_style_code.mjs";
import { lesson_divide_numbers } from "./lesson_divide_numbers.mjs";
import { lesson_simple } from "./lesson_simple.mjs";
import { html_p } from "./html_p.mjs";
import { noop } from "./noop.mjs";
import { html_style_monospace } from "./html_style_monospace.mjs";
export function lesson_divide() {
  const example_message = "dividing two numbers";
  const description = "division ( `/` )";
  return lesson_simple(
    function () {
      let { dividend, divisor } = lesson_divide_numbers();
      return `console.log(${dividend} / ${divisor});`;
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
        "one number can be divided by the other using the forward slash ( ",
        "/",
        " ) symbol",
      ],
    );
  }
}
