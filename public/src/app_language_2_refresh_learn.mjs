import { list_add_beginning } from "./list_add_beginning.mjs";
import { list_find } from "./list_find.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { json_to } from "./json_to.mjs";
import { app_language_refresh_quiz_text_ready } from "./app_language_refresh_quiz_text_ready.mjs";
import { app_language_2_tutorial_message } from "./app_language_2_tutorial_message.mjs";
import { list_take } from "./list_take.mjs";
import { app_language_2_wrong } from "./app_language_2_wrong.mjs";
import { app_language_2_word } from "./app_language_2_word.mjs";
import { app_language_2_word_p } from "./app_language_2_word_p.mjs";
import { app_language_2_word_key } from "./app_language_2_word_key.mjs";
import { app_language_2_word_index } from "./app_language_2_word_index.mjs";
import { app_language_2_stats_get } from "./app_language_2_stats_get.mjs";
import { app_language_2_skip } from "./app_language_2_skip.mjs";
import { app_language_2_skip_manual_get } from "./app_language_2_skip_manual_get.mjs";
import { app_language_2_refresh_home } from "./app_language_2_refresh_home.mjs";
import { app_language_2_other } from "./app_language_2_other.mjs";
import { app_language_2_gaps_get } from "./app_language_2_gaps_get.mjs";
import { app_language_2_count_increment } from "./app_language_2_count_increment.mjs";
import { app_language_2_answers } from "./app_language_2_answers.mjs";
import { list_unique } from "./list_unique.mjs";
import { object_property_exists_not } from "./object_property_exists_not.mjs";
import { round } from "./round.mjs";
import { html_style_font_color_gray } from "./html_style_font_color_gray.mjs";
import { object_property_increment } from "./object_property_increment.mjs";
import { round_2 } from "./round_2.mjs";
import { list_includes } from "./list_includes.mjs";
import { html_flag } from "./html_flag.mjs";
import { html_button_home } from "./html_button_home.mjs";
import { list_size } from "./list_size.mjs";
import { html_spacer_vertical_2 } from "./html_spacer_vertical_2.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { list_copy } from "./list_copy.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_last } from "./list_last.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_sort } from "./list_sort.mjs";
import { list_filter } from "./list_filter.mjs";
import { html_br2 } from "./html_br2.mjs";
import { html_style_wrong } from "./html_style_wrong.mjs";
import { html_style_success } from "./html_style_success.mjs";
import { number_is } from "./number_is.mjs";
import { emoji_question } from "./emoji_question.mjs";
import { emoji_check } from "./emoji_check.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { each } from "./each.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { html_flag_language_get } from "./html_flag_language_get.mjs";
import { app_language_button_ready } from "./app_language_button_ready.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { html_button_next } from "./html_button_next.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
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
import { list_sort_string } from "./list_sort_string.mjs";
import { identity } from "./identity.mjs";
import { storage_local_initialize } from "./storage_local_initialize.mjs";
export async function app_language_2_refresh_learn(context) {
  let { app_fn, language_learn, language_fluent, root, words } = context;
  html_clear_scroll_top_centered(root);
  html_button_home(root, () => {
    app_language_2_refresh_home(context);
  });
  html_spacer_vertical_2(root);
  let values_all = object_values(words);
  let skip_manual = app_language_2_skip_manual_get(app_fn);
  let values_skip_manual = list_filter(values_all, (v) => {
    let word = object_property_get(v, "word");
    let question = object_property_get(word, "question");
    let answer = object_property_get(word, "answer");
    let language = object_property_get(word, "language");
    let key = app_language_2_word_key(v);
    let key_other = json_to([
      answer,
      question,
      app_language_2_other(language, language_learn, language_fluent),
    ]);
    return (
      object_property_exists_not(skip_manual, key) &&
      object_property_exists_not(skip_manual, key_other)
    );
  });
  let max_indexes = {};
  each(values_skip_manual, (v) => {
    if (object_property_get(v, "learning") !== true) {
      return;
    }
    let v_word = object_property_get(v, "word");
    let index = object_property_get(v_word, "index");
    let key = word_to_language_question_key(v_word);
    let value = object_property_initialize(max_indexes, key, -1);
    if (index > value) {
      object_property_set(max_indexes, key, index);
    }
  });
  let values = list_filter(values_skip_manual, (v) => {
    let v_word = object_property_get(v, "word");
    let index = object_property_get(v_word, "index");
    let key = word_to_language_question_key(v_word);
    return (
      object_property_get(v, "learning") !== true ||
      index === object_property_get(max_indexes, key)
    );
  });
  list_sort(values, app_language_2_word_index);
  values = list_copy(values);
  list_sort_property(values, "wait");
  let wait_initial = 0;
  let gap_initial = 0;
  let v = list_first(values);
  let vw = object_property_get(v, "wait");
  let unlearning = list_filter_property(values, "learning", false);
  if (list_empty_not_is(unlearning) && (vw === null || vw > 0)) {
    app_language_2_tutorial_message(
      context,
      "At this time, this app stores all its data on your device/browser. Make sure you are using the device and browser that you want to use this app on. At this time you cannot use this app on multiple devices or browsers.",
      root,
    );
    let u = list_first(unlearning);
    let word = object_property_get(u, "word");
    let language = object_property_get(word, "language");
    let question = object_property_get(word, "question");
    let mapped = app_language_2_answers(values_skip_manual, u);
    let answer_text = list_join_comma_space(mapped);
    html_progress(
      root,
      "Word pair",
      list_size(list_filter_property(values_skip_manual, "learning", true)),
      list_size(values_skip_manual),
    );
    html_p_text(root, "Remember this:");
    app_language2_word_titled(root, "Question", language, question);
    app_language2_word_titled(
      root,
      "Answer",
      app_language_2_other(language, language_learn, language_fluent),
      answer_text,
    );
    html_br2(root);
    app_language_2_tutorial_message(
      context,
      "You will be quizzed on this question and answer. You will be given the question. You will need to remember the answer.",
      root,
    );
    html_button_next(root, async () => {
      let key = word_to_language_question_key(word);
      let index = object_property_get(word, "index");
      let us = [u];
      if (object_property_exists(max_indexes, key)) {
        let index_max = object_property_get(max_indexes, key);
        if (index < index_max) {
          let u_max = list_find(
            values_skip_manual,
            (m) => app_language_2_word_index(m) === index_max,
          );
          list_add(us, u_max);
        }
      }
      decrease_wait();
      each(us, (ui) => {
        object_property_set(ui, "learning", true);
        object_property_set(ui, "wait", wait_initial);
        object_property_set(ui, "gap", gap_initial);
      });
      storage_local_set(app_fn, "words", words);
      await app_language_2_refresh_learn(context);
    });
    app_language_2_skip(context, word);
  } else {
    let word = object_property_get(v, "word");
    let word_key = app_language_2_word_key(v);
    let questions_recent_keys_by_language = storage_local_initialize(
      app_fn,
      "questions_recent",
      {
        [language_fluent]: [],
        [language_learn]: [],
      },
    );
    let language = object_property_get(word, "language");
    let questions_recent_keys = object_property_get(
      questions_recent_keys_by_language,
      language,
    );
    list_add_beginning(questions_recent_keys, word_key);
    let questions_recent_limit = 15;
    questions_recent_keys = list_take(
      questions_recent_keys,
      questions_recent_limit,
    );
    storage_local_set(
      app_fn,
      "questions_recent",
      questions_recent_keys_by_language,
    );
    let v_gap = object_property_get(v, "gap");
    let question = object_property_get(word, "question");
    let mapped = app_language_2_answers(values_skip_manual, v);
    let language_other = app_language_2_other(
      language,
      language_learn,
      language_fluent,
    );
    let va_filtered2 = list_filter_property(values_all, "learning", true);
    let va_words = list_map_property(va_filtered2, "word");
    let va_filtered = list_filter_property(
      va_words,
      "language",
      language_other,
    );
    let questions = list_map_property(va_filtered, "question");
    let boxed = list_includes(questions, question);
    app_language_2_word(root, language, question, boxed);
    let m_size = list_size(mapped);
    if (m_size >= 2) {
      let m_size_span = html_span_text(
        root,
        string_combine_multiple([" (", m_size, ")"]),
      );
      html_style_font_color_gray(m_size_span);
    }
    html_br2(root);
    let { quiz_container, ready_above } = await app_language_button_ready(
      root,
      html_flag_language_get(language_other),
      language_fluent,
    );
    app_language_2_tutorial_message(
      context,
      string_combine_multiple([
        'Try to remember the translation of the word above. Once you are ready to answer, choose "',
        await app_language_refresh_quiz_text_ready(language_fluent),
        '".',
      ]),
      ready_above,
    );
    let v_words = list_map_property(values_all, "word");
    let v_filtered = list_filter_property(v_words, "language", language);
    let v_filtered2 = list_filter(
      v_filtered,
      (w) => object_property_get(w, "question") !== question,
    );
    let answers = list_map_property(v_filtered2, "answer");
    let others = list_difference(answers, mapped);
    let others_unique = list_unique(others);
    list_shuffle(others_unique);
    let other_taken = list_take(others_unique, list_size(mapped));
    list_sort_string(other_taken, identity);
    let other = list_join_comma_space(other_taken);
    let answer_text = list_join_comma_space(mapped);
    let choices = [answer_text, other];
    list_shuffle(choices);
    let stats = app_language_2_stats_get(app_fn);
    each(choices, (c) => {
      app_language_2_tutorial_message(
        context,
        string_combine_multiple([
          "If this is the answer you thought of, choose this:",
        ]),
        quiz_container,
      );
      let b = html_button_width_full_text_click(
        quiz_container,
        "",
        async () => {
          decrease_wait();
          if (c === answer_text) {
            html_style_success(b);
            let gaps = app_language_2_gaps_get(context);
            let gap = object_property_get(v, "gap");
            let f = list_filter(gaps, (g) => g > gap);
            if (list_empty_is(f)) {
              list_add(f, list_last(gaps));
            }
            let gap_new = list_first(f) + random();
            object_property_set(v, "gap", gap_new);
            object_property_set(v, "wait", gap_new);
            let r = object_property_get(stats, "right");
            let rounded = round(gap);
            object_property_increment(r, rounded);
            storage_local_set(app_fn, "stats", stats);
            app_language_2_count_increment(context);
          } else {
            html_style_wrong(b);
            app_language_2_wrong(context, v, gap_initial, wait_initial);
          }
          storage_local_set(app_fn, "words", words);
          await sleep(200);
          await app_language_2_refresh_learn(context);
        },
      );
      html_span_text(b, string_combine_multiple([emoji_check(), " "]));
      html_flag(
        b,
        html_flag_language_get(
          app_language_2_other(language, language_learn, language_fluent),
        ),
      );
      html_style_bold(b);
      html_span_text(b, string_combine_multiple([" ", c]));
      html_spacer_vertical_2(quiz_container);
      app_language_2_tutorial_message(
        context,
        string_combine_multiple([
          "If this is not the answer you thought of, but you believe it is correct, then choose this (it will be counted wrong so you can review the word more):",
        ]),
        quiz_container,
      );
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
          app_language_2_wrong(context, v, gap_initial, wait_initial);
          storage_local_set(app_fn, "words", words);
          await sleep(200);
          await app_language_2_refresh_learn(context);
        },
      );
      html_span_text(b2, string_combine_multiple([emoji_question(), " "]));
      html_flag(
        b2,
        html_flag_language_get(
          app_language_2_other(language, language_learn, language_fluent),
        ),
      );
      html_style_bold(b2);
      html_span_text(b2, string_combine_multiple([" ", c]));
      html_spacer_vertical_2(quiz_container);
    });
    app_language_2_skip(context, word);
    if (false) {
      html_p_text(root, round_2(v_gap));
    }
  }
  function word_to_language_question_key(vsm_word) {
    let question = object_property_get(vsm_word, "question");
    let language = object_property_get(vsm_word, "language");
    let key = json_to([language, question]);
    return key;
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
    app_language_2_word_p(body, language, rememeber);
  }
}
