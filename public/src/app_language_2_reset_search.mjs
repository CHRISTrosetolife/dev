import { app_language_words_set } from "./app_language_words_set.mjs";
import { app_language_2_on_learn } from "./app_language_2_on_learn.mjs";
import { app_language_2_decrease_wait } from "./app_language_2_decrease_wait.mjs";
import { log } from "./log.mjs";
import { app_language_2_refresh_learn } from "./app_language_2_refresh_learn.mjs";
import { app_language_2_word_key } from "./app_language_2_word_key.mjs";
import { app_language_2_refresh_learn_value_choose } from "./app_language_2_refresh_learn_value_choose.mjs";
import { app_language_2_learn_success } from "./app_language_2_learn_success.mjs";
import { app_language_2_other } from "./app_language_2_other.mjs";
import { app_language_2_word_p } from "./app_language_2_word_p.mjs";
import { app_language_2_words_initialize } from "./app_language_2_words_initialize.mjs";
import { app_language_2_group_get } from "./app_language_2_group_get.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { each } from "./each.mjs";
import { string_includes } from "./string_includes.mjs";
import { list_any } from "./list_any.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_filter } from "./list_filter.mjs";
import { app_language_2_words_sort } from "./app_language_2_words_sort.mjs";
import { object_values } from "./object_values.mjs";
import { app_language_2_reset } from "./app_language_2_reset.mjs";
import { html_button_back } from "./html_button_back.mjs";
import { html_clear_scroll_top_centered } from "./html_clear_scroll_top_centered.mjs";
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
      return string_includes(s, v);
    });
  });
  each(filtered, (v2) => {
    let entry = html_button_width_full_text_click(root, "", async () => {
      let key2 = app_language_2_word_key(v2);
      let { group_flat } = app_language_2_group_get(context);
      app_language_2_words_initialize(context, {}, group_flat);
      while (true) {
        let { v, learn_new, u } =
          app_language_2_refresh_learn_value_choose(context);
        if (learn_new) {
          let key = app_language_2_word_key(u);
          app_language_2_on_learn(
            u,
            max_indexes,
            values_skip_manual,
            values,
            wait_initial,
            gap_initial,
          );
          log({
            key,
          });
          if (key === key2) {
            app_language_words_set(context, words);
            break;
          }
        } else {
          app_language_2_decrease_wait(values);
          app_language_2_learn_success(context, v, false);
          await app_language_2_refresh_learn(context);
        }
      }
    });
    let word = object_property_get(v2, "word");
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
}
