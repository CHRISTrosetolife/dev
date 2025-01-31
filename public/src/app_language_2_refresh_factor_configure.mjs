import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { html_hr } from "./html_hr.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { list_remove } from "./list_remove.mjs";
import { html_button_delete } from "./html_button_delete.mjs";
import { app_language_2_refresh_factor } from "./app_language_2_refresh_factor.mjs";
import { html_button_back } from "./html_button_back.mjs";
import { html_clear_scroll_top_centered } from "./html_clear_scroll_top_centered.mjs";
import { app_language_2_factor_set } from "./app_language_2_factor_set.mjs";
import { integer_parse_try } from "./integer_parse_try.mjs";
import { html_value_set } from "./html_value_set.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { html_on_input } from "./html_on_input.mjs";
import { html_input_width_full } from "./html_input_width_full.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { html_style_button_default } from "./html_style_button_default.mjs";
import { html_style_success } from "./html_style_success.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { each } from "./each.mjs";
import { list_adder } from "./list_adder.mjs";
import { list_map } from "./list_map.mjs";
import { range_from } from "./range_from.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { number_is } from "./number_is.mjs";
export function app_language_2_refresh_factor_configure(
  context,
  factor,
  factors,
) {
  assert_arguments_length(arguments, 3);
  let root = object_property_get(context, "root");
  html_clear_scroll_top_centered(root);
  html_button_back(root, async () => {
    app_language_2_refresh_factor(context);
  });
  let threshold_value = object_property_get(factor, "threshold");
  let threshold_min = 1;
  if (threshold_value < threshold_min) {
    html_p_text(root, "Threshold: ");
    html_p_text(root, threshold_value);
  } else {
    html_p_text(root, "Enter a threshold:");
    let threshold = html_input_width_full(root);
    html_attribute_set(threshold, "type", "number");
    html_value_set(threshold, threshold_value);
    html_on_input(threshold, () => {
      let v = html_value_get(threshold);
      v = integer_parse_try(v);
      if (!number_is(v)) {
        return;
      }
      if (v < threshold_min) {
        return;
      }
      object_property_set(factor, "threshold", v);
      app_language_2_factor_set(context, factors);
    });
  }
  html_p_text(root, "Choose a factor:");
  let n = range_from(11, 40);
  let factor_choices = list_map(n, (i) => i / 10);
  let buttons = list_adder((la) => {
    each(factor_choices, (f) => {
      let b = html_button_width_full_text_click(root, f, () => {
        object_property_set(factor, "factor", f);
        app_language_2_factor_set(context, factors2);
        each(buttons, (b2) => {
          if (b === b2) {
            html_style_success(b2);
          } else {
            html_style_button_default(b2);
          }
        });
      });
      la(b);
      if (object_property_get(factor, "factor") === f) {
        html_style_success(b);
      }
    });
  });
  if (threshold_value >= threshold_min) {
    html_hr(root);
    html_button_delete(root, "this factor and threshold", () => {
      list_remove(factors, factor);
      app_language_2_factor_set(context, factors);
      app_language_2_refresh_factor(context);
    });
  }
}
