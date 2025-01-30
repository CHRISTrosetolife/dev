import { number_locale } from "./number_locale.mjs";
import { list_map } from "./list_map.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { app_language_2_gaps_get } from "./app_language_2_gaps_get.mjs";
import { app_language_2_refresh_factor_configure } from "./app_language_2_refresh_factor_configure.mjs";
import { app_language_2_button_back_home } from "./app_language_2_button_back_home.mjs";
import { html_p_text } from "./html_p_text.mjs";
export function app_language_2_refresh_factor(context) {
  app_language_2_button_back_home(context);
  let { root } = context;
  html_p_text(
    root,
    "Lower factors are easier. Higher factors are more difficult. A gap relates to the number of other word pairs you see before seeing the same word pair again. A factor is the rate at which a gap increases. A factor of 2 means that the gap approximately doubles each time a word pair is correctly answered. The lower the factor, the more words are reviewed before introducing new words. The higher the factor, the more often new words are introduced. Factors may have thresholds. With thresholds, the gap and the threshold determine which factor is used. Configure your factor(s) and any thresholds:",
  );
  let gaps = app_language_2_gaps_get(context);
  let mapped = list_map(gaps, number_locale);
  html_p_text(
    root,
    string_combine_multiple([
      "Based on your factor(s) and any thresholds, here are your gaps: ",
      list_join_comma_space(mapped),
    ]),
  );
  return;
  app_language_2_refresh_factor_configure(context);
}
