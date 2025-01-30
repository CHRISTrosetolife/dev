import { app_language_2_factor_set } from "./app_language_2_factor_set.mjs";
import { number_max_list_map_property } from "./number_max_list_map_property.mjs";
import { app_language_2_factor_value_default } from "./app_language_2_factor_value_default.mjs";
import { app_language_2_factor_new } from "./app_language_2_factor_new.mjs";
import { list_add } from "./list_add.mjs";
import { html_button_add } from "./html_button_add.mjs";
import { app_language_2_factor_string } from "./app_language_2_factor_string.mjs";
import { each } from "./each.mjs";
import { app_language_2_factor_get } from "./app_language_2_factor_get.mjs";
import { list_filter } from "./list_filter.mjs";
import { app_language_2_words_size } from "./app_language_2_words_size.mjs";
import { number_locale } from "./number_locale.mjs";
import { list_map } from "./list_map.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { app_language_2_gaps_get } from "./app_language_2_gaps_get.mjs";
import { app_language_2_refresh_factor_configure } from "./app_language_2_refresh_factor_configure.mjs";
import { app_language_2_button_back_home } from "./app_language_2_button_back_home.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
export function app_language_2_refresh_factor(context) {
  app_language_2_button_back_home(context);
  let { root } = context;
  html_p_text(
    root,
    "Lower factors are easier. Higher factors are more difficult. A gap relates to the number of other word pairs you see before seeing the same word pair again. A factor is the rate at which a gap increases. A factor of 2 means that the gap approximately doubles each time a word pair is correctly answered. The lower the factor, the more words are reviewed before introducing new words. The higher the factor, the more often new words are introduced. Factors may have thresholds. With thresholds, the gap and the threshold determine which factor is used. Configure your factor(s) and any thresholds:",
  );
  let gaps = app_language_2_gaps_get(context);
  let w_size = app_language_2_words_size(context);
  let filtered = list_filter(gaps, (m) => m <= w_size);
  let mapped = list_map(filtered, number_locale);
  html_p_text(
    root,
    string_combine_multiple([
      "Based on your factor(s) and any thresholds, here are your first gaps: ",
      list_join_comma_space(mapped),
    ]),
  );
  let factors = app_language_2_factor_get(context);
  each(factors, (f) => {
    html_button_width_full_text_click(
      root,
      app_language_2_factor_string(f),
      () => app_language_2_refresh_factor_configure(context, f),
      factors,
    );
  });
  html_button_add(root, "factor", () => {
    let f = app_language_2_factor_new(
      number_max_list_map_property(factors, "threshold") + 1,
      app_language_2_factor_value_default(),
    );
    list_add(factors, f);
    app_language_2_factor_set(context, factors);
    app_language_2_refresh_factor_configure(context, f);
  });
}
