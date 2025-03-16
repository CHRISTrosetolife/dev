import { log } from "./log.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span } from "./html_span.mjs";
import { html_clear_scroll_top } from "./html_clear_scroll_top.mjs";
import { html_button } from "./html_button.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { html_element } from "./html_element.mjs";
export function app_learn_math() {
  let root = html_style_default_initialize();
  if (false) {
    html_button(root, "Factoring whole numbers", function () {});
  }
  html_button(root, "Factoring polynomials", function () {
    html_clear_scroll_top(root);
    let variable = "x";
    let answer_1 = 1;
    let answer_2 = 1;
    let sum = answer_1 + answer_2;
    let product = answer_1 * answer_2;
    let equation = html_span(root);
    html_span_text(equation, variable);
    html_element(root, "sup");
    log({
      s,
    });
  });
}
