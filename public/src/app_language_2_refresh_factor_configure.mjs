import { html_value_get } from "./html_value_get.mjs";
import { html_on_input } from "./html_on_input.mjs";
import { html_input_width_full } from "./html_input_width_full.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { app_language_2_factor_sort } from "./app_language_2_factor_sort.mjs";
import { html_style_button_default } from "./html_style_button_default.mjs";
import { html_style_success } from "./html_style_success.mjs";
import { app_language_2_gaps_update } from "./app_language_2_gaps_update.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { each } from "./each.mjs";
import { list_adder } from "./list_adder.mjs";
import { list_map } from "./list_map.mjs";
import { range_from } from "./range_from.mjs";
import { app_language_2_button_back_home } from "./app_language_2_button_back_home.mjs";
import { html_p_text } from "./html_p_text.mjs";
export function app_language_2_refresh_factor_configure(
  context,
  factor,
  factors,
) {
  app_language_2_button_back_home(context);
  let { root } = context;
  html_p_text(root, "Threshold:");
  let threshold = html_input_width_full(root);
  let v = html_value_get(threshold);
  html_on_input(threshold, () => {
    v = html_value_get(threshold);
    object_property_set(factor, "threshold", v);
    storage_local_set(app_fn, "factor", factors);
  });
  let n = range_from(11, 40);
  let factor_choices = list_map(n, (i) => i / 10);
  let buttons = list_adder((la) => {
    each(factor_choices, (f) => {
      let b = html_button_width_full_text_click(root, f, () => {
        let app_fn = object_property_get(context, "app_fn");
        object_property_set(factor, "factor", f);
        app_language_2_factor_sort(factors);
        storage_local_set(app_fn, "factor", factors);
        app_language_2_gaps_update(context);
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
