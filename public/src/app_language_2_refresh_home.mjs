import { html_button_back_text } from "./html_button_back_text.mjs";
import { app_language_2_words_sort } from "./app_language_2_words_sort.mjs";
import { app_language_2_other } from "./app_language_2_other.mjs";
import { app_language_2_word_p } from "./app_language_2_word_p.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { html_hr } from "./html_hr.mjs";
import { object_values } from "./object_values.mjs";
import { each } from "./each.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { app_language_2_button_back_home } from "./app_language_2_button_back_home.mjs";
import { html_button_reset } from "./html_button_reset.mjs";
import { html_button_me_email } from "./html_button_me_email.mjs";
import { app_language_2_skipped } from "./app_language_2_skipped.mjs";
import { app_language_2_skip_manual_get } from "./app_language_2_skip_manual_get.mjs";
import { app_language_2_refresh_stats } from "./app_language_2_refresh_stats.mjs";
import { app_language_2_refresh_learn } from "./app_language_2_refresh_learn.mjs";
import { app_language_2_refresh_factor } from "./app_language_2_refresh_factor.mjs";
import { app_language_2_refresh_data } from "./app_language_2_refresh_data.mjs";
import { object_properties_empty_not_is } from "./object_properties_empty_not_is.mjs";
import { emoji_delete } from "./emoji_delete.mjs";
import { emoji_learn } from "./emoji_learn.mjs";
import { emoji_data } from "./emoji_data.mjs";
import { emoji_chart } from "./emoji_chart.mjs";
import { emoji_laptop } from "./emoji_laptop.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { storage_local_exists } from "./storage_local_exists.mjs";
import { html_clear_scroll_top_centered } from "./html_clear_scroll_top_centered.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { html_button } from "./html_button.mjs";
import { html_input_width_full } from "./html_input_width_full.mjs";
import { html_on_input } from "./html_on_input.mjs";
export function app_language_2_refresh_home(context) {
  let { root, app_fn } = context;
  html_clear_scroll_top_centered(root);
  html_button_width_full_text_click(
    root,
    string_combine_multiple([emoji_learn(), " Learn"]),
    async () => {
      await app_language_2_refresh_learn(context);
    },
  );
  html_button_width_full_text_click(
    root,
    string_combine_multiple([emoji_chart(), " Factor (difficulty)"]),
    () => {
      app_language_2_refresh_factor(context);
    },
  );
  let skip_manual = app_language_2_skip_manual_get(app_fn);
  if (object_properties_empty_not_is(skip_manual)) {
    html_button_width_full_text_click(
      root,
      string_combine_multiple([emoji_delete(), " Skipped"]),
      () => {
        app_language_2_skipped(context);
      },
    );
  }
  if (storage_local_exists(app_fn, "stats")) {
    html_button_width_full_text_click(
      root,
      string_combine_multiple([emoji_data(), " Stats"]),
      () => {
        app_language_2_refresh_stats(context);
      },
    );
  }
  html_button_width_full_text_click(
    root,
    string_combine_multiple([emoji_laptop(), " Data for development"]),
    () => {
      app_language_2_refresh_data(context);
    },
  );
  html_button_me_email(root);
  html_button_reset(root, () => {
    app_language_2_button_back_home(context);
    html_p_text(
      root,
      "Reset will simulate this app. It will be as if you used the app, got all the questions correct up to a certain point. This can approximate picking up where you left off while using the app on another device or browser.",
    );
    html_p_text(
      root,
      string_combine_multiple([
        'If you do not want to reset, choose "',
        html_button_back_text(),
        '". Otherwise, type in the word you wish to reset to (you will choose the word after this): ',
      ]),
    );
    let search_input = html_input_width_full(root);
    html_on_input(search_input, () => {});
    html_button_reset(root, () => {
      let { root, words, language_learn, language_fluent, app_fn } = context;
      let values_all = object_values(words);
      app_language_2_words_sort(values_all);
      each(values_all, (v) => {
        let entry = html_button(root);
        html_hr(entry);
        let word = object_property_get(v, "word");
        let language = object_property_get(word, "language");
        let question = object_property_get(word, "question");
        app_language_2_word_p(entry, language, question);
        let answer = object_property_get(word, "answer");
        app_language_2_word_p(
          entry,
          app_language_2_other(language, language_learn, language_fluent),
          answer,
        );
      });
    });
  });
}
