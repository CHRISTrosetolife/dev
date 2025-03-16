import { app_learn_code_answer_correct } from "./app_learn_code_answer_correct.mjs";
import { html_on_click_noload } from "./html_on_click_noload.mjs";
import { app_learn_code_correct_timeout } from "./app_learn_code_correct_timeout.mjs";
import { html_style_success } from "./html_style_success.mjs";
import { html_style_button_default } from "./html_style_button_default.mjs";
import { list_map } from "./list_map.mjs";
import { html_button_text } from "./html_button_text.mjs";
import { html_style_wrong } from "./html_style_wrong.mjs";
import { html_clear_scroll_top_centered } from "./html_clear_scroll_top_centered.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_filter_starts_with } from "./list_filter_starts_with.mjs";
import { list_reverse } from "./list_reverse.mjs";
import { list_second } from "./list_second.mjs";
import { list_first } from "./list_first.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { digits_10 } from "./digits_10.mjs";
import { each } from "./each.mjs";
import { html_sup_text } from "./html_sup_text.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span } from "./html_span.mjs";
import { html_button } from "./html_button.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { list_add } from "./list_add.mjs";
import { string_split_empty } from "./string_split_empty.mjs";
import { html_div } from "./html_div.mjs";
import { html_inner_set } from "./html_inner_set.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
export function app_learn_math() {
  let root = html_style_default_initialize();
  if (false) {
    html_button(root, "Factoring whole numbers", function () {});
  }
  html_button(root, "Factoring polynomials", factor_polynomials);
  factor_polynomials();
  function factor_polynomials() {
    html_clear_scroll_top_centered(root);
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
    list_reverse(choices);
    expected_add(choices);
    let selected = "";
    let keyboard_div = html_div(root);
    let buttons = list_map(
      list_concat_multiple([
        digits_10(),
        string_split_empty("()+"),
        [variable],
      ]),
      function (d) {
        let b = html_button_text(keyboard_div, d);
        let f = symbol_add(d, b);
        html_on_click_noload(b, f);
        return b;
      },
    );
    let container_bottom = html_div(root);
    let answer_div = html_div(container_bottom);
    function symbol_add(s, button) {
      let v = function () {
        let selected_old = selected;
        selected += s;
        let possible = list_filter_starts_with(expecteds, selected);
        if (list_empty_is(possible)) {
          html_style_wrong(button);
          selected = selected_old;
        } else {
          each(buttons, html_style_button_default);
          html_inner_set(answer_div, selected);
          let p = list_first(possible);
          html_style_success(button);
          app_learn_code_correct_timeout(function () {
            html_style_button_default(button);
          });
          if (p === selected) {
            app_learn_code_answer_correct(container_bottom);
            html_button(root, "Next problem");
          }
        }
      };
      return v;
    }
  }
}
