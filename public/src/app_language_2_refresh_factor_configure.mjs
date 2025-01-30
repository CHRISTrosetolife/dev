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
export function app_language_2_refresh_factor_configure(context, f, factors) {
  app_language_2_button_back_home(context);
  let { root } = context;
  let n = range_from(11, 40);
  let factor_choices = list_map(n, (i) => i / 10);
  let factor = object_property_get(object, "property_name");
  let buttons = list_adder((la) => {
    each(factor_choices, (f) => {
      let b = html_button_width_full_text_click(root, f, () => {
        let app_fn = object_property_get(context, "app_fn");
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
      if (f === factors) {
        html_style_success(b);
      }
    });
  });
}
