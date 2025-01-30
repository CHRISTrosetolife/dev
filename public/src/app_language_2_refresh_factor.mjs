import { app_language_2_gaps_update } from "./app_language_2_gaps_update.mjs";
import { app_language_2_factor_get } from "./app_language_2_factor_get.mjs";
import { app_language_2_button_back_home } from "./app_language_2_button_back_home.mjs";
import { html_style_button_default } from "./html_style_button_default.mjs";
import { html_style_success } from "./html_style_success.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { each } from "./each.mjs";
import { list_map } from "./list_map.mjs";
import { range_from } from "./range_from.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { list_adder } from "./list_adder.mjs";
export function app_language_2_refresh_factor(context) {
  app_language_2_button_back_home(context);
  let { root } = context;
  html_p_text(
    root,
    "Lower factors are easier. Higher factors are more difficult. A gap relates to the number of other word pairs you see before seeing the same word pair again. A factor is the rate at which a gap increases. A difficulty of 2 means that the gap approximately doubles each time a word pair is correctly answered. The lower the factor, the more words are reviewed before introducing new words. The higher the factor, the more often new words are introduced. Factors may have thresholds. With thresholds, the gap and the threshold determine which factor is used. Configure your factor(s) and any thresholds:",
  );
  let n = range_from(11, 40);
  let factors = list_map(n, (i) => i / 10);
  let factor = app_language_2_factor_get(context);
  let buttons = list_adder((la) => {
    each(factors, (f) => {
      let b = html_button_width_full_text_click(root, f, () => {
        let app_fn = object_property_get(context, "app_fn");
        storage_local_set(app_fn, "factor", f);
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
      if (f === factor) {
        html_style_success(b);
      }
    });
  });
}
