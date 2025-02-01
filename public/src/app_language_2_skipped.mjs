import { app_language_2_word } from "./app_language_2_word.mjs";
import { app_language_2_word_key } from "./app_language_2_word_key.mjs";
import { app_language_2_skip_manual_get } from "./app_language_2_skip_manual_get.mjs";
import { app_language_2_other } from "./app_language_2_other.mjs";
import { app_language_2_button_back_home } from "./app_language_2_button_back_home.mjs";
import { html_style_display_none } from "./html_style_display_none.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { object_property_delete } from "./object_property_delete.mjs";
import { emoji_check } from "./emoji_check.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { html_hr } from "./html_hr.mjs";
import { html_div } from "./html_div.mjs";
import { each } from "./each.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { list_filter } from "./list_filter.mjs";
import { object_values } from "./object_values.mjs";
import { html_spacer } from "./html_spacer.mjs";
export function app_language_2_skipped(context) {
  app_language_2_button_back_home(context);
  let { root, words, language_learn, language_fluent, app_fn } = context;
  let values_all = object_values(words);
  let skip_manual = app_language_2_skip_manual_get(app_fn);
  let values_skip_manual = list_filter(values_all, (v) =>
    object_property_exists(skip_manual, app_language_2_word_key(v)),
  );
  html_p_text(root, "Choose a word pair to no longer skip it");
  each(values_skip_manual, (v) => {
    let entry = html_div(root);
    html_hr(entry);
    let word = object_property_get(v, "word");
    let language = object_property_get(word, "language");
    let question = object_property_get(word, "question");
    app_language_2_word(entry, language, question);
    html_spacer(entry);
    let answer = object_property_get(word, "answer");
    app_language_2_word(
      entry,
      app_language_2_other(language, language_learn, language_fluent),
      answer,
    );
    html_button_width_full_text_click(
      entry,
      string_combine_multiple([emoji_check(), "Unskip"]),
      () => {
        let word_key = app_language_2_word_key(v);
        object_property_delete(skip_manual, word_key);
        storage_local_set(app_fn, "skip_manual", skip_manual);
        html_style_display_none(entry);
      },
    );
  });
}
