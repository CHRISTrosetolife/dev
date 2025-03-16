import { html_button_text_click } from "./html_button_text_click.mjs";
import { digits_10 } from "./digits_10.mjs";
import { each } from "./each.mjs";
import { html_sup_text } from "./html_sup_text.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span } from "./html_span.mjs";
import { html_clear_scroll_top } from "./html_clear_scroll_top.mjs";
import { html_button } from "./html_button.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
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
    html_sup_text(equation, "2");
    html_span_text(equation, "+");
    html_span_text(equation, sum);
    html_span_text(equation, variable);
    html_span_text(equation, "+");
    html_span_text(equation, product);
    each(digits_10(), function (d) {
      html_button_text_click(root, d, symbol_add(d));
    });
    function symbol_add(s) {
      let v = function () {};
      return v;
    }
  });
}
