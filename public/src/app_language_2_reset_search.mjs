import { html_button } from "./html_button.mjs";
import { app_language_word_pair } from "./app_language_word_pair.mjs";
import { app_language_words_update } from "./app_language_words_update.mjs";
import { html_progress_index_update } from "./html_progress_index_update.mjs";
import { html_progress } from "./html_progress.mjs";
import { sleep_0 } from "./sleep_0.mjs";
import { html_spacer_vertical_n } from "./html_spacer_vertical_n.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { equal } from "./equal.mjs";
import { app_language_2_refresh_learn_value_choose_initial } from "./app_language_2_refresh_learn_value_choose_initial.mjs";
import { app_language_2_on_learn } from "./app_language_2_on_learn.mjs";
import { app_language_2_decrease_wait } from "./app_language_2_decrease_wait.mjs";
import { app_language_2_refresh_learn } from "./app_language_2_refresh_learn.mjs";
import { app_language_2_word_key } from "./app_language_2_word_key.mjs";
import { app_language_2_refresh_learn_value_choose } from "./app_language_2_refresh_learn_value_choose.mjs";
import { app_language_2_learn_success } from "./app_language_2_learn_success.mjs";
import { app_language_2_words_initialize } from "./app_language_2_words_initialize.mjs";
import { app_language_2_group_get } from "./app_language_2_group_get.mjs";
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
    let word = object_property_get(v2, "word");
    let index = object_property_get(word, "index");
    let entry = html_button(root, "", async () => {
      html_clear_scroll_top_centered(root);
      html_spacer_vertical_n(root, 8);
      html_p_text(root, "Loading...");
      let progress = html_progress(
        root,
        "Progress: Learning word pair ",
        0,
        index + 1,
      );
      await sleep_0();
      let key2 = app_language_2_word_key(v2);
      let { group_flat } = app_language_2_group_get(context);
      app_language_2_words_initialize(context, {}, group_flat);
      let { values, values_skip_manual, max_indexes } =
        app_language_2_refresh_learn_value_choose_initial(context);
      let count = 0;
      while (true) {
        let { v, wait_initial, gap_initial, learn_new, u } =
          app_language_2_refresh_learn_value_choose(values);
        if (learn_new) {
          html_progress_index_update(progress, count);
          count++;
          await sleep_0();
          let key = app_language_2_word_key(u);
          if (key === key2) {
            app_language_words_update(context);
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
    html_span_text(
      entry,
      string_combine_multiple(["Word pair ", index + 1, " "]),
    );
    app_language_word_pair(context, entry, word);
  });
}
