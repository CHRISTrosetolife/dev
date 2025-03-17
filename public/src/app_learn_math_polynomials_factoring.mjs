import { html_button_next_after } from "./html_button_next_after.mjs";
import { app_learn_code_answer_correct } from "./app_learn_code_answer_correct.mjs";
import { app_learn_code_correct_timeout } from "./app_learn_code_correct_timeout.mjs";
import { html_style_success } from "./html_style_success.mjs";
import { html_inner_set } from "./html_inner_set.mjs";
import { html_style_button_default } from "./html_style_button_default.mjs";
import { each } from "./each.mjs";
import { html_style_wrong } from "./html_style_wrong.mjs";
import { list_filter_starts_with } from "./list_filter_starts_with.mjs";
import { html_on_click_noload } from "./html_on_click_noload.mjs";
import { html_style_font_size_default_multiplied } from "./html_style_font_size_default_multiplied.mjs";
import { html_button_text } from "./html_button_text.mjs";
import { string_split_empty } from "./string_split_empty.mjs";
import { digits_10 } from "./digits_10.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_map } from "./list_map.mjs";
import { html_div } from "./html_div.mjs";
import { list_reverse } from "./list_reverse.mjs";
import { list_second } from "./list_second.mjs";
import { list_first } from "./list_first.mjs";
import { html_sup_text } from "./html_sup_text.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span } from "./html_span.mjs";
import { list_pop } from "./list_pop.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { app_learn_math_main } from "./app_learn_math_main.mjs";
import { html_button_back } from "./html_button_back.mjs";
import { html_clear_scroll_top_centered } from "./html_clear_scroll_top_centered.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_button } from "./html_button.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { list_unique_json } from "./list_unique_json.mjs";
import { list_add } from "./list_add.mjs";
import { each_range_1 } from "./each_range_1.mjs";
import { each_range_from } from "./each_range_from.mjs";
export function app_learn_math_polynomials_factoring(root) {
  let factoring_threshold = 7;
  factoring_threshold, " value is seven because older son learned this";
  factoring_button(1, factoring_threshold, "easier");
  let factoring_max_upper = 12;
  factoring_max_upper,
    " value because that is the max number learned in times tables in school";
  factoring_button(factoring_threshold + 1, factoring_max_upper, "harder");
  function factoring_button(factoring_min, factoring_max, description) {
    let factor_polynomials_choices = [];
    function factor_polynomials_choices_refill(factoring_min, factoring_max) {
      each_range_from(factoring_min, factoring_max, function (answer_1) {
        each_range_1(factoring_max, function (answer_2) {
          list_add(factor_polynomials_choices, {
            answer_1,
            answer_2,
          });
        });
      });
      factor_polynomials_choices = list_unique_json(factor_polynomials_choices);
      list_shuffle(factor_polynomials_choices);
    }
    html_button(
      root,
      string_combine_multiple([
        "Factoring polynomials (",
        factoring_min,
        " - ",
        factoring_max,
        ") (",
        description,
        ")",
      ]),
      function factor_polynomials() {
        let problem_next = factor_polynomials;
        let button_strings = list_concat_multiple([
          digits_10(),
          string_split_empty("()+"),
          [variable],
        ]);
        html_clear_scroll_top_centered(root);
        html_button_back(root, function () {
          app_learn_math_main(root);
        });
        if (list_empty_is(factor_polynomials_choices)) {
          factor_polynomials_choices_refill(factoring_min, factoring_max);
        }
        let { answer_1, answer_2 } = list_pop(factor_polynomials_choices);
        let variable = "x";
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
        let buttons = list_map(button_strings, function (d) {
          let b = html_button_text(keyboard_div, d);
          html_style_font_size_default_multiplied(b, 1.25);
          let f = symbol_add(d, b);
          html_on_click_noload(b, f);
          return b;
        });
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
                html_button_next_after(root, "problem", problem_next);
              }
            }
          };
          return v;
        }
      },
    );
  }
}
