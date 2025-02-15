import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { html_input_width_full_placeholder } from "./html_input_width_full_placeholder.mjs";
import { html_button } from "./html_button.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { list_add } from "./list_add.mjs";
import { html_div } from "./html_div.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
import { list_sort } from "./list_sort.mjs";
export function app_weights() {
  let root = html_style_default_initialize();
  let add_weight_text = "Add available weight";
  let add_weight = html_input_width_full_placeholder(root, add_weight_text);
  let weight_values = [];
  let weight_values_preview;
  html_button(root, add_weight_text, function () {
    let value = html_value_get(add_weight);
    list_add(weight_values, value);
    list_sort(weight_values);
    html_div_text(weight_values_preview, list_join_comma_space(weight_values));
  });
  weight_values_preview = html_div();
}
