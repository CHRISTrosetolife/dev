import { html_input_width_full } from "./html_input_width_full.mjs";
import { list_size } from "./list_size.mjs";
import { html_style_background_color } from "./html_style_background_color.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { equal } from "./equal.mjs";
import { list_take } from "./list_take.mjs";
import { string_regex_match } from "./string_regex_match.mjs";
import { html_style_monospace } from "./html_style_monospace.mjs";
import { list_sort } from "./list_sort.mjs";
import { html_value_set } from "./html_value_set.mjs";
import { list_to } from "./list_to.mjs";
import { list_join } from "./list_join.mjs";
import { html_style_word_break_all } from "./html_style_word_break_all.mjs";
import { html_button_width_full_text_click_x_0 } from "./html_button_width_full_text_click_x_0.mjs";
import { html_on_input_value } from "./html_on_input_value.mjs";
import { identity } from "./identity.mjs";
import { list_sort_string } from "./list_sort_string.mjs";
import { html_focus } from "./html_focus.mjs";
import { app_code_back } from "./app_code_back.mjs";
import { app_code_button_back_text } from "./app_code_button_back_text.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { html_document_body_clear } from "./html_document_body_clear.mjs";
import { global_get } from "./global_get.mjs";
import { string_length } from "./string_length.mjs";
import { html_div } from "./html_div.mjs";
import { html_clear } from "./html_clear.mjs";
import { list_filter } from "./list_filter.mjs";
import { range } from "./range.mjs";
import { string_get } from "./string_get.mjs";
export function app_code_search_function_generic(
  input_value_initial,
  on_click_get,
  choices,
  choice_to_name,
) {
  let global = global_get();
  let { back_stack } = global;
  let root = html_document_body_clear();
  if (greater_than_equal(list_size(back_stack), 2)) {
    lambda_button(root, app_code_button_back_text(), app_code_back);
  }
  let input = html_input_width_full(root);
  html_focus(input);
  let container_buttons = html_div(root);
  list_sort_string(choices, identity);
  list_sort(choices, (p) => string_length(p));
  html_on_input_value(input, lambda);
  html_value_set(input, input_value_initial);
  lambda(input_value_initial);
  function lambda_button(parent, name, on_click) {
    let b = html_button_width_full_text_click_x_0(parent, name, on_click);
    html_style_word_break_all(b);
    return b;
  }
  function lambda(value) {
    html_clear(container_buttons);
    let value_list = list_to(value);
    let filtered = list_filter(choices, (choice) => {
      let name = choice_to_name(choice);
      let regex = list_join(value_list, ".*");
      return string_regex_match(name, regex);
    });
    let taken = list_take(filtered, 20);
    for (let p of taken) {
      let name = choice_to_name(p);
      let button = lambda_button(container_buttons, "", on_click_get(p));
      let v = 0;
      for (let i of range(string_length(name))) {
        let n = string_get(name, i);
        let character = html_span_text(button, n);
        if (equal(n, string_get(value, v))) {
          v++;
          html_style_background_color(character, "yellow");
        }
      }
      html_style_monospace(button);
    }
  }
}
