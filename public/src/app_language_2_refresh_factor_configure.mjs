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
  let root = object_property_get(context, "root");
  html_clear_scroll_top_centered(root);
  html_button_back(root, async () => {
    app_language_2_refresh_factor(context);
  });
  html_p_text(root, "Threshold:");
  let threshold = html_input_width_full(root);
  let v = object_property_get(factor, "threshold");
  html_value_set(threshold, v);
  html_on_input(threshold, () => {
    v = html_value_get(threshold);
    v = integer_parse_try(v);
    if (!number_is(v)) {
      return;
    }
    if (v < 0) {
      return;
    }
    object_property_set(factor, "threshold", v);
    app_language_2_factor_set(context, factors);
  });
  let n = range_from(11, 40);
  let factor_choices = list_map(n, (i) => i / 10);
  let buttons = list_adder((la) => {
    each(factor_choices, (f) => {
      let b = html_button_width_full_text_click(root, f, () => {
        object_property_set(factor, "factor", f);
        app_language_2_factor_set(context, factors);
        each(buttons, (b2) => {
          if (b === b2) {
            html_style_success(b2);
          } else {
            html_style_button_default(b2);
          }
        });
      });
      la(b);
      if (object_property_get(factor, "factor") === factors) {
        html_style_success(b);
      }
    });
  });
}
