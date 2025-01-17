import { app_language2_word_index } from "./app_language2_word_index.mjs";
import { list_sort } from "./list_sort.mjs";
import { list_filter } from "./list_filter.mjs";
import { html_br2 } from "./html_br2.mjs";
import { html_style_wrong } from "./html_style_wrong.mjs";
import { html_style_success } from "./html_style_success.mjs";
import { app_language2_word_p } from "./app_language2_word_p.mjs";
import { number_is } from "./number_is.mjs";
import { emoji_question } from "./emoji_question.mjs";
import { emoji_check } from "./emoji_check.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { each } from "./each.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { list_without } from "./list_without.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { html_flag_language_get } from "./html_flag_language_get.mjs";
import { app_language_button_ready } from "./app_language_button_ready.mjs";
import { app_language2_word } from "./app_language2_word.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { html_button_next } from "./html_button_next.mjs";
import { app_language2_other } from "./app_language2_other.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { log } from "./log.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_first } from "./list_first.mjs";
import { list_sort_property } from "./list_sort_property.mjs";
import { object_values } from "./object_values.mjs";
import { html_clear_scroll_top_centered } from "./html_clear_scroll_top_centered.mjs";
import { random } from "./random.mjs";
export async function app_language2_refresh(context) {
  let { app_fn, language_learn, language_fluent, root, words } = context;
  html_clear_scroll_top_centered(root);
  let values = object_values(words);
  list_sort(values, app_language2_word_index);
  log({
    values,
  });
  list_sort_property(values, "wait");
  let wait_initial = 0;
  let gap_initial = 0;
  let v = list_first(values);
  let vw = object_property_get(v, "wait");
  if (vw === null || vw > 0) {
    let unlearning = list_filter_property(values, "learning", false);
    list_sort_property(unlearning, "index");
    let u = list_first(unlearning);
    let word = object_property_get(u, "word");
    let language = object_property_get(word, "language");
    let question = object_property_get(word, "question");
    let answer = object_property_get(word, "answer");
    html_p_text(root, "Remember this:");
    app_language2_word_titled(root, "Question", language, question);
    app_language2_word_titled(
      root,
      "Answer",
      app_language2_other(language, language_learn, language_fluent),
      answer,
    );
    html_br2(root);
    html_button_next(root, async () => {
      decrease_wait();
      object_property_set(u, "learning", true);
      object_property_set(u, "wait", wait_initial);
      object_property_set(u, "gap", gap_initial);
      storage_local_set(app_fn, "words", words);
      await app_language2_refresh(context);
    });
  } else {
    let word = object_property_get(v, "word");
    let language = object_property_get(word, "language");
    let question = object_property_get(word, "question");
    let answer = object_property_get(word, "answer");
    let index = object_property_get(word, "index");
    let matches = list_filter(
      values,
      (v) =>
        app_language2_word_index(v) < index &&
        object_property_get(word, "question") === question,
    );
    each(matches, (match) => {
      object_property_set(match, "skip", true);
    });
    let mapped = list_map_property(matches, "answer");
    app_language2_word(root, language, question);
    html_br2(root);
    let quiz_container = await app_language_button_ready(
      root,
      html_flag_language_get(
        app_language2_other(language, language_learn, language_fluent),
      ),
      language_fluent,
    );
    let v_words = list_map_property(values, "word");
    let answers = list_map_property(v_words, "answer");
    let others = list_without(answers, answer);
    let other = list_random_item(others);
    let choices = [answer, other];
    list_shuffle(choices);
    each(choices, (c) => {
      let b = html_button_width_full_text_click(
        quiz_container,
        string_combine_multiple([emoji_check(), " ", c]),
        async () => {
          html_style_success(b);
          decrease_wait();
          if (c === answer) {
            let gap = object_property_get(v, "gap");
            let gaps = object_property_get(context, "gaps");
            let f = list_filter(gaps, (g) => g > gap);
            let gap_new = list_first(f) + random();
            object_property_set(v, "gap", gap_new);
            object_property_set(v, "wait", gap_new);
          }
          storage_local_set(app_fn, "words", words);
          await app_language2_refresh(context);
        },
      );
      let b2 = html_button_width_full_text_click(
        quiz_container,
        string_combine_multiple([emoji_question(), " ", c]),
        async () => {
          html_style_wrong(b2);
          decrease_wait();
          object_property_set(v, "gap", gap_initial);
          object_property_set(v, "wait", wait_initial);
          storage_local_set(app_fn, "words", words);
          await app_language2_refresh(context);
        },
      );
    });
  }
  function decrease_wait() {
    each(values, (v2) => {
      let wait = object_property_get(v2, "wait");
      if (number_is(wait)) {
        object_property_set(v2, "wait", wait - 1);
      }
    });
  }
  function app_language2_word_titled(body, text, language, rememeber) {
    let r = html_p_text(body, string_combine_multiple([text, ": "]));
    app_language2_word_p(body, language, rememeber);
  }
}
