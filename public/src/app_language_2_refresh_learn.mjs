import { html_style_flex_1 } from "./html_style_flex_1.mjs";
import { html_style_flex_row_centered } from "./html_style_flex_row_centered.mjs";
import { list_sort_string_map } from "./list_sort_string_map.mjs";
import { app_language_2_answer_count_get } from "./app_language_2_answer_count_get.mjs";
import { html_spacer_vertical } from "./html_spacer_vertical.mjs";
import { html_style_font_size_default_multiplied } from "./html_style_font_size_default_multiplied.mjs";
import { html_p } from "./html_p.mjs";
import { html_button_text_click } from "./html_button_text_click.mjs";
import { app_language_2_questions_recent_get } from "./app_language_2_questions_recent_get.mjs";
import { json_to } from "./json_to.mjs";
import { list_copy_reverse } from "./list_copy_reverse.mjs";
import { list_map } from "./list_map.mjs";
import { log } from "./log.mjs";
import { app_language_2_on_answer } from "./app_language_2_on_answer.mjs";
import { app_language_words_update } from "./app_language_words_update.mjs";
import { app_language_2_refresh_learn_value_choose_initial } from "./app_language_2_refresh_learn_value_choose_initial.mjs";
import { app_language_2_decrease_wait } from "./app_language_2_decrease_wait.mjs";
import { app_language_2_on_learn } from "./app_language_2_on_learn.mjs";
import { app_language_2_refresh_learn_value_choose } from "./app_language_2_refresh_learn_value_choose.mjs";
import { app_language_2_learn_success } from "./app_language_2_learn_success.mjs";
import { list_partition } from "./list_partition.mjs";
import { list_take_soft } from "./list_take_soft.mjs";
import { app_language_refresh_quiz_text_ready } from "./app_language_refresh_quiz_text_ready.mjs";
import { app_language_2_tutorial_message } from "./app_language_2_tutorial_message.mjs";
import { app_language_2_wrong } from "./app_language_2_wrong.mjs";
import { app_language_2_word } from "./app_language_2_word.mjs";
import { app_language_2_word_p } from "./app_language_2_word_p.mjs";
import { app_language_2_skip } from "./app_language_2_skip.mjs";
import { app_language_2_refresh_home } from "./app_language_2_refresh_home.mjs";
import { app_language_2_other } from "./app_language_2_other.mjs";
import { app_language_2_answers } from "./app_language_2_answers.mjs";
import { list_unique } from "./list_unique.mjs";
import { html_style_font_color_gray } from "./html_style_font_color_gray.mjs";
import { list_includes } from "./list_includes.mjs";
import { html_button_home } from "./html_button_home.mjs";
import { list_size } from "./list_size.mjs";
import { html_spacer_vertical_2 } from "./html_spacer_vertical_2.mjs";
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
import { html_button_next } from "./html_button_next.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { html_clear_scroll_top_centered } from "./html_clear_scroll_top_centered.mjs";
import { html_progress } from "./html_progress.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { identity } from "./identity.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_chunk } from "./list_chunk.mjs";
export async function app_language_2_refresh_learn(context) {
  let { language_learn, language_fluent, root } = context;
  html_clear_scroll_top_centered(root);
  html_button_home(root, () => {
    app_language_2_refresh_home(context);
  });
  html_spacer_vertical_2(root);
  let { values, values_skip_manual, max_indexes, values_all } =
    app_language_2_refresh_learn_value_choose_initial(context);
  let { v, wait_initial, gap_initial, learn_new, u } =
    app_language_2_refresh_learn_value_choose(values);
  let language_other = app_language_2_other(
    language,
    language_learn,
    language_fluent,
  );
  if (learn_new) {
    app_language_2_tutorial_message(
      context,
      "At this time, this app stores all its data on your device/browser. Make sure you are using the device and browser that you want to use this app on. At this time you cannot use this app on multiple devices or browsers.",
      root,
    );
    let u_word = object_property_get(u, "word");
    let language = object_property_get(u_word, "language");
    let question = object_property_get(u_word, "question");
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
    app_language2_word_titled(root, "Answer", language_other, answer_text);
    html_br2(root);
    app_language_2_tutorial_message(
      context,
      "You will be quizzed on this question and answer. You will be given the question. You will need to remember the answer.",
      root,
    );
    html_button_next(root, async () => {
      app_language_2_on_learn(
        u,
        max_indexes,
        values_skip_manual,
        values,
        wait_initial,
        gap_initial,
      );
      app_language_words_update(context);
      await app_language_2_refresh_learn(context);
    });
    app_language_2_skip(context, u_word);
  } else {
    let word = object_property_get(v, "word");
    let questions_recent_stored = app_language_2_questions_recent_get(context);
    let recent_count = 15;
    let questions_recent = list_take_soft(
      questions_recent_stored,
      recent_count,
    );
    let language = object_property_get(word, "language");
    let questions_recent_keys = list_map(questions_recent, (key) => {
      let list;
      if (language === language_fluent) {
        list = list_copy_reverse(key);
      } else {
        list = key;
      }
      let concat = list_concat(list, [language]);
      return json_to(concat);
    });
    let choices_count = app_language_2_answer_count_get(context);
    log({
      questions_recent_keys,
    });
    let question = object_property_get(word, "question");
    let mapped = app_language_2_answers(values_skip_manual, v);
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
        'Try to remember the translation of the word above. You may learn better if you remember the answer without seeing any choices. Once you are ready to answer, choose "',
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
      choices_count,
    );
    let other_taken_older = app_language_2_answers_take(
      older_choices,
      mapped,
      choices_count,
    );
    let other_taken_concat = list_concat(other_taken_recent, other_taken_older);
    let other_taken_concat_unique = list_unique(other_taken_concat);
    log({
      other_taken_concat_unique,
      other_taken_recent,
    });
    let other_taken = list_take_soft(
      other_taken_concat_unique,
      list_size(mapped) * (choices_count - 1),
    );
    let chunked = list_chunk(other_taken, list_size(mapped));
    each(chunked, (c) => {
      list_sort_string_map(c, identity);
    });
    let other = list_map(chunked, list_join_comma_space);
    let answer_text = list_join_comma_space(mapped);
    let choices = list_concat([answer_text], other);
    list_shuffle(choices);
    each(choices, (c) => {
      let emoji_wrong = emoji_question();
      let emoji_right = emoji_check();
      app_language_2_tutorial_message(
        context,
        string_combine_multiple([
          "If this is the answer you thought of, choose ",
          emoji_right,
          ":",
        ]),
        quiz_container,
      );
      app_language_2_tutorial_message(
        context,
        string_combine_multiple([
          "If this is not the answer you thought of, but you believe it is correct, then choose ",
          emoji_wrong,
          " (it will be counted wrong so you can review the word more):",
        ]),
        quiz_container,
      );
      let row = html_p(quiz_container);
      html_style_flex_row_centered(row);
      let b2 = html_button_text_click(row, emoji_wrong, async () => {
        decrease_wait();
        if (c === answer_text) {
          html_style_success(b2);
        } else {
          html_style_wrong(b2);
        }
        app_language_2_wrong(context, v, gap_initial, wait_initial);
        await app_language_2_on_answer(context, word, recent_count);
      });
      let { container } = app_language_2_word(
        row,
        app_language_2_other(language, language_learn, language_fluent),
        c,
        false,
      );
      html_style_flex_1(container);
      let b = html_button_text_click(row, emoji_right, async () => {
        decrease_wait();
        if (c === answer_text) {
          html_style_success(b);
          app_language_2_learn_success(context, v, true);
        } else {
          html_style_wrong(b);
          app_language_2_wrong(context, v, gap_initial, wait_initial);
        }
        await app_language_2_on_answer(context, word, recent_count);
      });
      each([b, b2], (bi) => {
        html_style_font_size_default_multiplied(bi, 1.2);
      });
      html_spacer_vertical(quiz_container);
    });
    app_language_2_skip(context, word);
  }
  function app_language_2_answers_take(v_filtered2, mapped, choices_count) {
    let answers = list_map_property(v_filtered2, "answer");
    let others = list_difference(answers, mapped);
    let others_unique = list_unique(others);
    list_shuffle(others_unique);
    let other_taken = list_take_soft(
      others_unique,
      list_size(mapped) * (choices_count - 1),
    );
    return other_taken;
  }
  function decrease_wait() {
    app_language_2_decrease_wait(values);
  }
  function app_language2_word_titled(body, title, language, text) {
    let r = html_p_text(body, string_combine_multiple([title, ": "]));
    app_language_2_word_p(body, language, text);
  }
}
