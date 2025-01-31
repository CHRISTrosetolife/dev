import { app_language_2_words_initialize } from "./app_language_2_words_initialize.mjs";
import { app_language_2_group_get } from "./app_language_2_group_get.mjs";
import { html_button_back } from "./html_button_back.mjs";
import { html_clear_scroll_top_centered } from "./html_clear_scroll_top_centered.mjs";
import { html_button_enable_if } from "./html_button_enable_if.mjs";
import { string_size } from "./string_size.mjs";
import { string_trim_whitespace } from "./string_trim_whitespace.mjs";
import { html_on_input_initial } from "./html_on_input_initial.mjs";
import { app_language_2_other } from "./app_language_2_other.mjs";
import { app_language_2_word_p } from "./app_language_2_word_p.mjs";
import { html_hr } from "./html_hr.mjs";
import { each } from "./each.mjs";
import { string_includes } from "./string_includes.mjs";
import { list_any } from "./list_any.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_filter } from "./list_filter.mjs";
import { app_language_2_words_sort } from "./app_language_2_words_sort.mjs";
import { object_values } from "./object_values.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { html_button_reset } from "./html_button_reset.mjs";
import { html_input_width_full } from "./html_input_width_full.mjs";
import { html_button_back_text } from "./html_button_back_text.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { app_language_2_button_back_home } from "./app_language_2_button_back_home.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
export function app_language_2_reset(context) {
  let { root } = context;
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
  let button_reset = html_button_reset(root, () => {
    let { root, words, language_learn, language_fluent } = context;
    html_clear_scroll_top_centered(root);
    html_button_back(root, async () => {
      app_language_2_reset(context);
    });
    let v = html_value_get(search_input);
    let values_all = object_values(words);
    app_language_2_words_sort(values_all);
    let filtered = list_filter(values_all, () => {
      let word = object_property_get(v, "word");
      let question = object_property_get(word, "question");
      let answer = object_property_get(word, "answer");
      return list_any([question, answer], (s) => {
        return string_includes(s, v);
      });
    });
    each(filtered, (v) => {
      let entry = html_button_width_full_text_click(root, "", () => {
        let { words, group_flat } = app_language_2_group_get(context);
        app_language_2_words_initialize(context, words, group_flat);
      });
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
  html_on_input_initial(search_input, () => {
    let v = html_value_get(search_input);
    v = string_trim_whitespace(v);
    let condition = string_size(v) >= 1;
    html_button_enable_if(button_reset, condition);
  });
}
