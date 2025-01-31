import { list_first_or } from "./list_first_or.mjs";
import { undefined } from "./or.mjs";
import { app_language_2_decrease_wait } from "./app_language_2_decrease_wait.mjs";
import { app_language_2_on_learn } from "./app_language_2_on_learn.mjs";
import { app_language_2_refresh_learn_value_choose } from "./app_language_2_refresh_learn_value_choose.mjs";
import { app_language_2_learn_success } from "./app_language_2_learn_success.mjs";
import { list_partition } from "./list_partition.mjs";
import { list_take_soft } from "./list_take_soft.mjs";
import { log_json } from "./log_json.mjs";
import { list_add_beginning } from "./list_add_beginning.mjs";
import { app_language_refresh_quiz_text_ready } from "./app_language_refresh_quiz_text_ready.mjs";
import { app_language_2_tutorial_message } from "./app_language_2_tutorial_message.mjs";
import { app_language_2_wrong } from "./app_language_2_wrong.mjs";
import { app_language_2_word } from "./app_language_2_word.mjs";
import { app_language_2_word_p } from "./app_language_2_word_p.mjs";
import { app_language_2_word_key } from "./app_language_2_word_key.mjs";
import { app_language_2_skip } from "./app_language_2_skip.mjs";
import { app_language_2_refresh_home } from "./app_language_2_refresh_home.mjs";
import { app_language_2_other } from "./app_language_2_other.mjs";
import { app_language_2_answers } from "./app_language_2_answers.mjs";
import { list_unique } from "./list_unique.mjs";
import { html_style_font_color_gray } from "./html_style_font_color_gray.mjs";
import { round_2 } from "./round_2.mjs";
import { list_includes } from "./list_includes.mjs";
import { html_flag } from "./html_flag.mjs";
import { html_button_home } from "./html_button_home.mjs";
import { list_size } from "./list_size.mjs";
import { html_spacer_vertical_2 } from "./html_spacer_vertical_2.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_filter } from "./list_filter.mjs";
import { html_br2 } from "./html_br2.mjs";
import { html_style_wrong } from "./html_style_wrong.mjs";
import { html_style_success } from "./html_style_success.mjs";
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
import { html_clear_scroll_top_centered } from "./html_clear_scroll_top_centered.mjs";
import { sleep } from "./sleep.mjs";
import { html_progress } from "./html_progress.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_style_bold } from "./html_style_bold.mjs";
import { list_sort_string } from "./list_sort_string.mjs";
import { identity } from "./identity.mjs";
import { storage_local_initialize } from "./storage_local_initialize.mjs";
import { list_concat } from "./list_concat.mjs";
export async function app_language_2_refresh_learn(context) {
  let { app_fn, language_learn, language_fluent, root, words } = context;
  html_clear_scroll_top_centered(root);
  html_button_home(root, () => {
    app_language_2_refresh_home(context);
  });
  html_spacer_vertical_2(root);
  let {
    v,
    values,
    values_skip_manual,
    max_indexes,
    wait_initial,
    gap_initial,
    values_all,
    unlearning,
    learn_new,
  } = app_language_2_refresh_learn_value_choose(context);
  if (learn_new) {
    app_language_2_tutorial_message(
      context,
      "At this time, this app stores all its data on your device/browser. Make sure you are using the device and browser that you want to use this app on. At this time you cannot use this app on multiple devices or browsers.",
      root,
    );
    let u = list_first_or(unlearning, null);
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
      app_language_2_on_learn(
        word,
        u,
        max_indexes,
        values_skip_manual,
        values,
        wait_initial,
        gap_initial,
      );
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
    questions_recent_keys = list_unique(questions_recent_keys);
    let questions_recent_limit = 15;
    questions_recent_keys = list_take_soft(
      questions_recent_keys,
      questions_recent_limit,
    );
    object_property_set(
      questions_recent_keys_by_language,
      language,
      questions_recent_keys,
    );
    storage_local_set(
      app_fn,
      "questions_recent",
      questions_recent_keys_by_language,
    );
    log_json(questions_recent_keys_by_language);
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
    let [recent_choices, older_choices] = list_partition(v_filtered2, (w) =>
      list_includes(questions_recent_keys, object_property_get(w, "key")),
    );
    let other_taken_recent = app_language_2_answers_take(
      recent_choices,
      mapped,
    );
    let other_taken_older = app_language_2_answers_take(older_choices, mapped);
    let other_taken_concat = list_concat(other_taken_recent, other_taken_older);
    let other_taken = list_take_soft(other_taken_concat, list_size(mapped));
    list_sort_string(other_taken, identity);
    let other = list_join_comma_space(other_taken);
    let answer_text = list_join_comma_space(mapped);
    let choices = [answer_text, other];
    list_shuffle(choices);
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
            app_language_2_learn_success(context, v, true);
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
  function app_language_2_answers_take(v_filtered2, mapped) {
    let answers = list_map_property(v_filtered2, "answer");
    let others = list_difference(answers, mapped);
    let others_unique = list_unique(others);
    list_shuffle(others_unique);
    let other_taken = list_take_soft(others_unique, list_size(mapped));
    return other_taken;
  }
  function decrease_wait() {
    app_language_2_decrease_wait(values);
  }
  function app_language2_word_titled(body, text, language, rememeber) {
    let r = html_p_text(body, string_combine_multiple([text, ": "]));
    app_language_2_word_p(body, language, rememeber);
  }
}
