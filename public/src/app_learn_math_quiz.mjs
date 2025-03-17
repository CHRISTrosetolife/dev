import { string_to } from "./string_to.mjs";
import { html_span } from "./html_span.mjs";
import { list_pop } from "./list_pop.mjs";
import { list_unique_json_shuffle } from "./list_unique_json_shuffle.mjs";
import { html_button_next_after } from "./html_button_next_after.mjs";
import { app_learn_code_answer_correct } from "./app_learn_code_answer_correct.mjs";
import { app_learn_code_correct_timeout } from "./app_learn_code_correct_timeout.mjs";
import { html_style_success } from "./html_style_success.mjs";
import { list_first } from "./list_first.mjs";
import { html_inner_set } from "./html_inner_set.mjs";
import { html_style_button_default } from "./html_style_button_default.mjs";
import { each } from "./each.mjs";
import { html_style_wrong } from "./html_style_wrong.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_filter_starts_with } from "./list_filter_starts_with.mjs";
import { html_on_click_noload } from "./html_on_click_noload.mjs";
import { html_style_font_size_default_multiplied } from "./html_style_font_size_default_multiplied.mjs";
import { html_button_text } from "./html_button_text.mjs";
import { list_map } from "./list_map.mjs";
import { html_div } from "./html_div.mjs";
import { html_button_back } from "./html_button_back.mjs";
import { html_clear_scroll_top_centered } from "./html_clear_scroll_top_centered.mjs";
export function app_learn_math_quiz(
  root,
  expecteds_get,
  buttons,
  refill,
  back,
) {
  let choices = [];
  inner();
  function inner() {
    html_clear_scroll_top_centered(root);
    html_button_back(root, function () {
      back(root);
    });
    if (list_empty_is(choices)) {
      refill(choices);
      choices = list_unique_json_shuffle(choices);
    }
    let popped = list_pop(choices);
    let question = html_span(root);
    let expecteds = expecteds_get(question, popped);
    expecteds = list_map(expecteds, string_to);
    let selected = "";
    let keyboard_div = html_div(root);
    let button_components = list_map(buttons, function (d) {
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
          each(button_components, html_style_button_default);
          html_inner_set(answer_div, selected);
          let p = list_first(possible);
          html_style_success(button);
          app_learn_code_correct_timeout(function () {
            html_style_button_default(button);
          });
          if (p === selected) {
            app_learn_code_answer_correct(container_bottom);
            html_button_next_after(root, "problem", inner);
          }
        }
      };
      return v;
    }
  }
}
