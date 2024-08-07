import { html_cycle_list } from "./html_cycle_list.mjs";
import { html_style_code } from "./html_style_code.mjs";
import { html_style_monospace } from "./html_style_monospace.mjs";
import { html_p } from "./html_p.mjs";
import { lesson_simple } from "./lesson_simple.mjs";
import { noop } from "./noop.mjs";
import { random_50_50 } from "./random_50_50.mjs";
export function lesson_log_boolean() {
  let example_message = "outputting a boolean to the console";
  let description = example_message;
  return lesson_simple(
    function () {
      return `console.log(${random_50_50()});
console.log(${random_50_50()});`;
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
      ["boolean ", "true", " and ", "false", " can be used in code :"],
    );
  }
}
