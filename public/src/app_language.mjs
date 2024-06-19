import { app_language_refresh_review } from "./app_language_refresh_review.mjs";
import { app_language_title } from "./app_language_title.mjs";
import { app_language_atoms_slice_concat } from "./app_language_atoms_slice_concat.mjs";
import { app_language_refresh_quiz } from "./app_language_refresh_quiz.mjs";
import { app_language_quizzes_start } from "./app_language_quizzes_start.mjs";
import { app_language_refresh_node } from "./app_language_refresh_node.mjs";
import { app_language_word_native } from "./app_language_word_native.mjs";
import { list_size } from "./list_size.mjs";
import { greater_than } from "./greater_than.mjs";
import { html_buttons_next_previous } from "./html_buttons_next_previous.mjs";
import { app_language_word_button } from "./app_language_word_button.mjs";
import { html_button_width_full_text_click_up } from "./html_button_width_full_text_click_up.mjs";
import { list_get } from "./list_get.mjs";
import { html_clear_scroll_top_centered } from "./html_clear_scroll_top_centered.mjs";
import { list_index_last } from "./list_index_last.mjs";
import { storage_local_initialize } from "./storage_local_initialize.mjs";
import { app_language_group_path } from "./app_language_group_path.mjs";
import { http_storage } from "./http_storage.mjs";
import { html_style_default_font_size } from "./html_style_default_font_size.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { object_merge } from "./object_merge.mjs";
export async function app_language(
  app_fn,
  language_learn,
  language_fluent,
  invert,
) {
  assert_arguments_length(arguments, 4);
  let context = {
    app_fn,
    language_learn,
    language_fluent,
    invert,
  };
  let root = html_style_default_initialize();
  object_merge(context, {
    root,
  });
  html_style_default_font_size(3.5);
  let group_index = 0;
  let { group, definitions, inverted } = await http_storage(
    app_language_group_path(language_learn, language_fluent, group_index),
  );
  object_merge(context, {
    group,
    definitions,
    inverted,
  });
  storage_local_initialize(app_fn, "position", {
    left: 0,
    right: list_index_last(group),
  });
  refresh_node();
  async function refresh_node() {
    await app_language_refresh_node(
      context,
      refresh_review,
      refresh_learn,
      quizzes_start,
    );
  }
  function app_language_title_get() {
    app_language_title(context);
  }
  async function refresh_quiz(settings) {
    await app_language_refresh_quiz(context, settings, refresh_node);
  }
  async function refresh_review() {
    app_language_refresh_review(
      root,
      refresh_node,
      app_fn,
      group,
      language_learn,
    );
  }
  async function refresh_learn(pair_index) {
    html_clear_scroll_top_centered(root);
    let concat = app_language_atoms_slice_concat(app_fn, group);
    let pair = list_get(concat, pair_index);
    let [word_l, word_f] = pair;
    app_language_word_button(root, language_learn, word_l);
    app_language_word_native(root, word_f);
    html_buttons_next_previous(
      root,
      (pair_index) => {
        if (greater_than(pair_index, list_index_last(concat))) {
          refresh_node();
        } else {
          refresh_learn(pair_index);
        }
      },
      pair_index,
      list_size(concat),
    );
    html_button_width_full_text_click_up(root, refresh_node);
  }
  function quizzes_start(chunk_sizes) {
    app_language_quizzes_start(
      app_fn,
      group,
      context,
      chunk_sizes,
      refresh_quiz,
    );
  }
}
