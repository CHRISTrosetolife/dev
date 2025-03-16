import { list_filter_starts_with } from "./list_filter_starts_with.mjs";
import { list_reverse } from "./list_reverse.mjs";
import { list_second } from "./list_second.mjs";
import { list_first } from "./list_first.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_button_text_click } from "./html_button_text_click.mjs";
import { digits_10 } from "./digits_10.mjs";
import { each } from "./each.mjs";
import { html_sup_text } from "./html_sup_text.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span } from "./html_span.mjs";
import { html_clear_scroll_top } from "./html_clear_scroll_top.mjs";
import { html_button } from "./html_button.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { list_add } from "./list_add.mjs";
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
    let choices = [answer_1, answer_2];
    let expecteds = [];
    function expected_add(choices2) {
      let expected = string_combine_multiple([
        "(",
        variable,
        "+",
        list_first(choices2),
        ")(",
        variable,
        "+",
        list_second(choices2),
        ")",
      ]);
      list_add(expecteds, expected);
    }
    expected_add(choices);
    list_reverse();
    expected_add(choices);
    let selected = "";
    each(digits_10(), function (d) {
      html_button_text_click(root, d, symbol_add(d));
    });
    function symbol_add(s) {
      let v = function () {
        selected += s;
        let possible = list_filter_starts_with(expecteds, selected);
      };
      return v;
    }
  });
}
