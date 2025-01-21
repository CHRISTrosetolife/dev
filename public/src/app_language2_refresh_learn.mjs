import { html_flag } from "./html_flag.mjs";
import { app_language2_refresh_home } from "./app_language2_refresh_home.mjs";
import { html_button_home } from "./html_button_home.mjs";
import { list_size } from "./list_size.mjs";
import { html_spacer_vertical_2 } from "./html_spacer_vertical_2.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { list_copy } from "./list_copy.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_last } from "./list_last.mjs";
import { app_language2_wrong } from "./app_language2_wrong.mjs";
import { app_language2_answers } from "./app_language2_answers.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
import { list_difference } from "./list_difference.mjs";
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
import { each } from "./each.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { list_random_item } from "./list_random_item.mjs";
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
import { sleep } from "./sleep.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_add } from "./list_add.mjs";
import { html_progress } from "./html_progress.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_style_bold } from "./html_style_bold.mjs";
export async function app_language2_refresh_learn(context) {
  let { app_fn, language_learn, language_fluent, root, words } = context;
  html_clear_scroll_top_centered(root);
  html_button_home(root, () => {
    app_language2_refresh_home(context);
  });
  html_spacer_vertical_2(root);
  let values_all = object_values(words);
  let values = list_filter_property(values_all, "skip", false);
  list_sort(values, app_language2_word_index);
  log({
    values,
  });
  values = list_copy(values);
  list_sort_property(values, "wait");
  let wait_initial = 0;
  let gap_initial = 0;
  let v = list_first(values);
  let vw = object_property_get(v, "wait");
  let unlearning = list_filter_property(values, "learning", false);
  if (list_empty_not_is(unlearning) && (vw === null || vw > 0)) {
    let u = list_first(unlearning);
    let word = object_property_get(u, "word");
    let language = object_property_get(word, "language");
    let question = object_property_get(word, "question");
    let mapped = app_language2_answers(values_all, u);
    let answer_text = list_join_comma_space(mapped);
    html_progress(
      root,
      "Word pair",
      list_size(list_filter_property(values_all, "learning", true)),
      list_size(values_all),
    );
    html_p_text(root, "Remember this:");
    app_language2_word_titled(root, "Question", language, question);
    app_language2_word_titled(
      root,
      "Answer",
      app_language2_other(language, language_learn, language_fluent),
      answer_text,
    );
    html_br2(root);
    html_button_next(root, async () => {
      decrease_wait();
      object_property_set(u, "learning", true);
      object_property_set(u, "wait", wait_initial);
      object_property_set(u, "gap", gap_initial);
      storage_local_set(app_fn, "words", words);
      await app_language2_refresh_learn(context);
    });
  } else {
    let word = object_property_get(v, "word");
    let language = object_property_get(word, "language");
    let question = object_property_get(word, "question");
    let mapped = app_language2_answers(values_all, v);
    log({
      mapped,
    });
    app_language2_word(root, language, question, false);
    html_br2(root);
    let quiz_container = await app_language_button_ready(
      root,
      html_flag_language_get(
        app_language2_other(language, language_learn, language_fluent),
      ),
      language_fluent,
    );
    let v_words = list_map_property(values, "word");
    let v_filtered = list_filter_property(v_words, "language", language);
    let v_filtered2 = list_filter(
      v_filtered,
      (w) => object_property_get(w, "question") !== question,
    );
    let answers = list_map_property(v_filtered2, "answer");
    let others = list_difference(answers, mapped);
    let other = list_random_item(others);
    let answer_text = list_join_comma_space(mapped);
    let choices = [answer_text, other];
    list_shuffle(choices);
    each(choices, (c) => {
      let b = html_button_width_full_text_click(
        quiz_container,
        "",
        async () => {
          decrease_wait();
          if (c === answer_text) {
            html_style_success(b);
            let gap = object_property_get(v, "gap");
            let gaps = object_property_get(context, "gaps");
            let f = list_filter(gaps, (g) => g > gap);
            if (list_empty_is(f)) {
              list_add(f, list_last(gaps));
            }
            let gap_new = list_first(f) + random();
            object_property_set(v, "gap", gap_new);
            object_property_set(v, "wait", gap_new);
          } else {
            html_style_wrong(b);
            app_language2_wrong(v, gap_initial, wait_initial);
          }
          storage_local_set(app_fn, "words", words);
          await sleep(200);
          await app_language2_refresh_learn(context);
        },
      );
      html_span_text(b, string_combine_multiple([emoji_check(), " "]));
      html_flag(
        b,
        html_flag_language_get(
          app_language2_other(language, language_learn, language_fluent),
        ),
      );
      html_style_bold(b);
      html_span_text(b, string_combine_multiple([" ", c]));
      html_spacer_vertical_2(quiz_container);
      let b2 = html_button_width_full_text_click(
        quiz_container,
        "",
        async () => {
          decrease_wait();
          if (c === answer_text) {
            html_style_success(b2);
          } else {
            html_style_wrong(b2);
          }
          app_language2_wrong(v, gap_initial, wait_initial);
          storage_local_set(app_fn, "words", words);
          await sleep(200);
          await app_language2_refresh_learn(context);
        },
      );
      html_span_text(b2, string_combine_multiple([emoji_question(), " "]));
      html_flag(
        b2,
        html_flag_language_get(
          app_language2_other(language, language_learn, language_fluent),
        ),
      );
      html_style_bold(b2);
      html_span_text(b2, string_combine_multiple([" ", c]));
      html_spacer_vertical_2(quiz_container);
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
