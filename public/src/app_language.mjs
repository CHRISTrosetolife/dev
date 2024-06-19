import { app_language_atoms_slice_concat } from "./app_language_atoms_slice_concat.mjs";
import { app_language_refresh_quiz } from "./app_language_refresh_quiz.mjs";
import { app_language_quizzes_start } from "./app_language_quizzes_start.mjs";
import { app_language_refresh_node } from "./app_language_refresh_node.mjs";
import { app_language_word_native } from "./app_language_word_native.mjs";
import { list_size } from "./list_size.mjs";
import { greater_than } from "./greater_than.mjs";
import { html_buttons_next_previous } from "./html_buttons_next_previous.mjs";
import { app_language_word_button_audio_none } from "./app_language_word_button_audio_none.mjs";
import { each_object } from "./each_object.mjs";
import { identity } from "./identity.mjs";
import { list_sort_string } from "./list_sort_string.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
import { html_hr } from "./html_hr.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { app_language_word_button } from "./app_language_word_button.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { html_cycle_p } from "./html_cycle_p.mjs";
import { html_button_width_full_text_click_up } from "./html_button_width_full_text_click_up.mjs";
import { app_language_atom_title_patterns } from "./app_language_atom_title_patterns.mjs";
import { app_language_atom_title } from "./app_language_atom_title.mjs";
import { list_get_or_last } from "./list_get_or_last.mjs";
import { list_get } from "./list_get.mjs";
import { storage_local_get } from "./storage_local_get.mjs";
import { html_clear_scroll_top_centered } from "./html_clear_scroll_top_centered.mjs";
import { list_index_last } from "./list_index_last.mjs";
import { storage_local_initialize } from "./storage_local_initialize.mjs";
import { app_language_level_size } from "./app_language_level_size.mjs";
import { app_language_group_path } from "./app_language_group_path.mjs";
import { http_storage } from "./http_storage.mjs";
import { html_style_default_font_size } from "./html_style_default_font_size.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export async function app_language(
  app_fn,
  language_learn,
  language_fluent,
  invert,
) {
  assert_arguments_length(arguments, 4);
  let root = html_style_default_initialize();
  html_style_default_font_size(3.5);
  let group_index = 0;
  let { group, definitions, inverted } = await http_storage(
    app_language_group_path(language_learn, language_fluent, group_index),
  );
  let level_size = app_language_level_size();
  let context = {
    app_fn,
    language_learn,
    language_fluent,
    invert,
  };
  storage_local_initialize(app_fn, "position", {
    left: 0,
    right: list_index_last(group),
  });
  refresh_node();
  async function refresh_node() {
    await app_language_refresh_node(
      root,
      app_language_title,
      level_size,
      group,
      invert,
      refresh_node,
      language_fluent,
      refresh_review,
      refresh_learn,
      quizzes_start,
    );
  }
  function app_language_title() {
    let { left, right } = storage_local_get(app_fn, "position");
    let gl = list_get(group, left);
    let gr = list_get_or_last(group, right);
    let text = app_language_atom_title(group, gl, gr, invert);
    html_cycle_p(root, app_language_atom_title_patterns(), text);
  }
  async function refresh_quiz(settings) {
    await app_language_refresh_quiz(
      root,
      settings,
      app_fn,
      group,
      definitions,
      inverted,
      language_learn,
      language_fluent,
      context,
      refresh_node,
      refresh_quiz,
    );
  }
  async function refresh_review() {
    html_clear_scroll_top_centered(root);
    html_button_width_full_text_click_up(root, refresh_node);
    html_hr(root);
    let concat = app_language_atoms_slice_concat(app_fn, group);
    let lookup = {};
    let words_f = list_adder_unique((la) =>
      each(concat, (pair) => {
        let [word_l, word_f] = pair;
        la(word_l);
        let e = object_property_initialize(lookup, word_l, []);
        list_add(e, word_f);
      }),
    );
    list_sort_string(words_f, identity);
    each_object(lookup, (key, value) => list_sort_string(value, identity));
    each(words_f, (word_f) => {
      app_language_word_button_audio_none(root, language_learn, word_f);
      each(object_property_get(lookup, word_f), (english) =>
        app_language_word_native(root, english),
      );
      html_hr(root);
    });
    html_button_width_full_text_click_up(root, refresh_node);
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
  function atoms_slice_concat() {
    return app_language_atoms_slice_concat(app_fn, group);
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
