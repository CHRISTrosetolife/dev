import { html_spacer } from "./html_spacer.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { app_language_2_word } from "./app_language_2_word.mjs";
import { equal } from "./equal.mjs";
import { app_language_2_refresh_learn_value_choose_initial } from "./app_language_2_refresh_learn_value_choose_initial.mjs";
import { app_language_words_set } from "./app_language_words_set.mjs";
import { app_language_2_on_learn } from "./app_language_2_on_learn.mjs";
import { app_language_2_decrease_wait } from "./app_language_2_decrease_wait.mjs";
import { app_language_2_refresh_learn } from "./app_language_2_refresh_learn.mjs";
import { app_language_2_word_key } from "./app_language_2_word_key.mjs";
import { app_language_2_refresh_learn_value_choose } from "./app_language_2_refresh_learn_value_choose.mjs";
import { app_language_2_learn_success } from "./app_language_2_learn_success.mjs";
import { app_language_2_other } from "./app_language_2_other.mjs";
import { app_language_2_words_initialize } from "./app_language_2_words_initialize.mjs";
import { app_language_2_group_get } from "./app_language_2_group_get.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { each } from "./each.mjs";
import { list_any } from "./list_any.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_filter } from "./list_filter.mjs";
import { app_language_2_words_sort } from "./app_language_2_words_sort.mjs";
import { object_values } from "./object_values.mjs";
import { app_language_2_reset } from "./app_language_2_reset.mjs";
import { html_button_back } from "./html_button_back.mjs";
import { html_clear_scroll_top_centered } from "./html_clear_scroll_top_centered.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function app_language_2_reset_search(context, v) {
  let { root, words, language_learn, language_fluent } = context;
  html_clear_scroll_top_centered(root);
  html_button_back(root, async () => {
    app_language_2_reset(context);
  });
  let values_all = object_values(words);
  app_language_2_words_sort(values_all);
  let filtered = list_filter(values_all, (v3) => {
    let word = object_property_get(v3, "word");
    let question = object_property_get(word, "question");
    let answer = object_property_get(word, "answer");
    return list_any([question, answer], (s) => {
      return equal(s, v);
    });
  });
  each(filtered, (v2) => {
    let entry = html_button_width_full_text_click(root, "", async () => {
      html_clear_scroll_top_centered(root);
      html_p_text(root, "Loading...");
      let key2 = app_language_2_word_key(v2);
      let { group_flat } = app_language_2_group_get(context);
      app_language_2_words_initialize(context, {}, group_flat);
      let { values, values_skip_manual, max_indexes } =
        app_language_2_refresh_learn_value_choose_initial(context);
      while (true) {
        let { v, wait_initial, gap_initial, learn_new, u } =
          app_language_2_refresh_learn_value_choose(values);
        if (learn_new) {
          let key = app_language_2_word_key(u);
          if (key === key2) {
            app_language_words_set(context);
            await app_language_2_refresh_learn(context);
            return;
          }
          app_language_2_on_learn(
            u,
            max_indexes,
            values_skip_manual,
            values,
            wait_initial,
            gap_initial,
          );
        } else {
          app_language_2_decrease_wait(values);
          app_language_2_learn_success(context, v, false);
        }
      }
    });
    let word = object_property_get(v2, "word");
    let index = object_property_get(word, "index");
    html_span_text(entry, string_combine_multiple(["Word ", index + 1, " "]));
    let language = object_property_get(word, "language");
    let question = object_property_get(word, "question");
    app_language_2_word(entry, language, question);
    let answer = object_property_get(word, "answer");
    html_spacer(entry);
    app_language_2_word(
      entry,
      app_language_2_other(language, language_learn, language_fluent),
      answer,
    );
  });
}
