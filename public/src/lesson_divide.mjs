import { lesson_divide_numbers } from "./lesson_divide_numbers.mjs";
import { lesson_simple } from "./lesson_simple.mjs";
import { html_p } from "./html_p.mjs";
import { html_style_alternate } from "./html_style_alternate.mjs";
import { noop } from "./noop.mjs";
import { html_style_monospace } from "./html_style_monospace.mjs";
import { app_learn_code_style_code_colored } from "./app_learn_code_style_code_colored.mjs";
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
    html_style_alternate(
      parent,
      html_p,
      [noop, app_learn_code_style_code_colored],
      [
        "one number can be divided by the other using the forward slash ( ",
        "/",
        " ) symbol",
      ],
    );
  }
}
