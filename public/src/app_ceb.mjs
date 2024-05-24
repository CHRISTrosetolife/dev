import { mod_last_is } from "./mod_last_is.mjs";
import { list_map_nested } from "./list_map_nested.mjs";
import { html_button_width_full_text_click_next } from "./html_button_width_full_text_click_next.mjs";
import { add } from "./add.mjs";
import { noop } from "./noop.mjs";
import { html_button_width_full_text_click_alternate_short } from "./html_button_width_full_text_click_alternate_short.mjs";
import { string_delimit_backtick } from "./string_delimit_backtick.mjs";
import { list_join_colon_spaces } from "./list_join_colon_spaces.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { each_range } from "./each_range.mjs";
import { html_style_button_default } from "./html_style_button_default.mjs";
import { html_style_wrong } from "./html_style_wrong.mjs";
import { object_copy_shallow } from "./object_copy_shallow.mjs";
import { list_last } from "./list_last.mjs";
import { html_style_display_block } from "./html_style_display_block.mjs";
import { greater_than } from "./greater_than.mjs";
import { app_ceb_quiz_settings } from "./app_ceb_quiz_settings.mjs";
import { html_div } from "./html_div.mjs";
import { list_without } from "./list_without.mjs";
import { app_ceb_audio } from "./app_ceb_audio.mjs";
import { app_ceb_word_english } from "./app_ceb_word_english.mjs";
import { list_after } from "./list_after.mjs";
import { number_is } from "./number_is.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { html_element_style } from "./html_element_style.mjs";
import { html_style_width_full } from "./html_style_width_full.mjs";
import { html_style_default_border_margin } from "./html_style_default_border_margin.mjs";
import { app_learn_code_correct_timeout } from "./app_learn_code_correct_timeout.mjs";
import { app_learn_code_style_success } from "./app_learn_code_style_success.mjs";
import { html_style_display_none } from "./html_style_display_none.mjs";
import { html_style_click_width_min } from "./html_style_click_width_min.mjs";
import { html_button_text_click } from "./html_button_text_click.mjs";
import { string_chunk } from "./string_chunk.mjs";
import { app_ceb_word_button } from "./app_ceb_word_button.mjs";
import { html_clear_scroll_top } from "./html_clear_scroll_top.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { html_buttons_next_previous } from "./html_buttons_next_previous.mjs";
import { list_scramble } from "./list_scramble.mjs";
import { list_copy } from "./list_copy.mjs";
import { http_storage } from "./http_storage.mjs";
import { ceb_group_path } from "./ceb_group_path.mjs";
import { list_first } from "./list_first.mjs";
import { list_get } from "./list_get.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { each } from "./each.mjs";
import { html_style_centered } from "./html_style_centered.mjs";
import { list_index_last } from "./list_index_last.mjs";
import { equal } from "./equal.mjs";
import { add_1 } from "./add_1.mjs";
import { html_inner_set } from "./html_inner_set.mjs";
import { string_take } from "./string_take.mjs";
import { string_combine } from "./string_combine.mjs";
import { string_length } from "./string_length.mjs";
import { list_second } from "./list_second.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { assert } from "./assert.mjs";
import { multiply } from "./multiply.mjs";
import { number_min } from "./number_min.mjs";
import { html_style } from "./html_style.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { not } from "./not.mjs";
import { list_length } from "./list_length.mjs";
import { equal_1 } from "./equal_1.mjs";
import { html_style_bold } from "./html_style_bold.mjs";
import { list_add } from "./list_add.mjs";
import { list_adder } from "./list_adder.mjs";
import { app_ceb_word_style } from "./app_ceb_word_style.mjs";
import { list_index } from "./list_index.mjs";
import { subtract } from "./subtract.mjs";
import { subtract_1 } from "./subtract_1.mjs";
export async function app_ceb() {
  let root = html_style_default_initialize();
  let group_index = 0;
  let group = await http_storage(ceb_group_path(group_index));
  let level_size = 2;
  let settings_choices;
  let atom;
  refresh_group(0);
  function refresh_group() {
    html_clear_scroll_top(root);
    each_range(2, (i) => {
      let atom_i = list_get(group, add(i, index_min));
      let mapped = list_map_nested(atom_i, string_delimit_backtick);
      html_button_width_full_text_click_alternate_short(
        root,
        [noop, app_ceb_word_style, noop, html_style_bold],
        string_combine_multiple([
          add_1(i),
          ". words ",
          list_join_colon_spaces(list_first(mapped)),
          " through ",
          list_join_colon_spaces(list_last(mapped)),
        ]),
        function on_click() {
          atom = atom_i;
          refresh_node();
        },
      );
    });
  }
  function refresh_node() {
    html_clear_scroll_top(root);
    html_button_width_full_text_click(root, "🎓 learn", () => {
      refresh_pair(0);
    });
    html_button_width_full_text_click(root, "📝 quiz ( easy to hard )", () => {
      quizzes_start([3, 2, 1]);
    });
    html_button_width_full_text_click(root, "🧑‍🎓️ quiz ( hard only )", () => {
      quizzes_start([1]);
    });
    html_button_width_full_text_click_next(root, () => {
      let index = list_index(group, atom);
      if (mod_last_is(index, level_size)) {
        position = {
          left: subtract(index, subtract_1(level_size)),
          right: index,
        };
        refresh_group();
      } else {
        atom = list_get(group, add_1(index));
      }
    });
  }
  function refresh_quiz(settings) {
    html_clear_scroll_top(root);
    let no_mistakes = true;
    let { pair, chunk_size, forwards } = settings;
    assert(number_is, [chunk_size]);
    html_style_centered(root);
    let pairs_other = list_without(atom, pair);
    let [cebuano, english] = pair;
    let answer;
    let pair_other = list_random_item(pairs_other);
    let answer_other_get;
    if (forwards) {
      app_ceb_word_button(root, cebuano);
      answer = english;
      answer_other_get = list_second;
    } else {
      app_ceb_word_english(root, english);
      answer = cebuano;
      answer_other_get = list_first;
    }
    let quiz_container;
    let button_ready = html_button_width_full_text_click(
      root,
      "🏁 ready",
      () => {
        html_style_display_none(button_ready);
        html_style_display_block(quiz_container);
      },
    );
    quiz_container = html_div(root);
    let component_display_none;
    if (equal_1(chunk_size)) {
      component_display_none = quiz_container;
    } else {
      component_display_none = button_ready;
    }
    html_style_display_none(component_display_none);
    let answer_other = answer_other_get(pair_other);
    let answer_element = html_p_text(quiz_container, "?");
    html_style_bold(answer_element);
    let style = html_element_style(answer_element);
    html_style_default_border_margin(style);
    html_style_width_full(answer_element);
    html_style(answer_element, {
      "border-color": "lightblue",
    });
    let index = 0;
    let correct_choices = string_chunk(answer, chunk_size);
    let other_choices = string_chunk(answer_other, chunk_size);
    let choices = list_copy(correct_choices);
    list_add_multiple(choices, other_choices);
    list_scramble(choices);
    let buttons = list_adder((la) => {
      each(choices, (choice) => {
        let button = html_button_text_click(quiz_container, choice, () => {
          let correct = list_get(correct_choices, index);
          if (equal(choice, correct)) {
            each(buttons, html_style_button_default);
            index = add_1(index);
            const last_is = greater_than_equal(
              multiply(index, chunk_size),
              string_length(answer),
            );
            let last = last_is ? "" : "?";
            const take_count = number_min(
              multiply(index, chunk_size),
              string_length(answer),
            );
            html_inner_set(
              answer_element,
              string_combine(string_take(answer, take_count), last),
            );
            if (last_is) {
              app_learn_code_style_success(answer_element);
              html_style_display_none(button);
            }
            app_learn_code_style_success(button);
            app_learn_code_correct_timeout(async () => {
              html_style_display_none(button);
              if (last_is) {
                app_learn_code_style_success(answer_element);
                if (not(forwards)) {
                  await app_ceb_audio(cebuano);
                } else {
                  await app_ceb_audio(cebuano);
                }
                if (equal(settings, list_last(settings_choices))) {
                  refresh_node();
                } else {
                  let after = list_after(settings_choices, settings);
                  refresh_quiz(after);
                }
              }
            });
          } else {
            if (no_mistakes) {
              list_add(settings_choices, object_copy_shallow(settings));
              html_style_wrong(button);
              no_mistakes = false;
            }
          }
        });
        la(button);
        html_style_click_width_min(button);
      });
    });
  }
  async function refresh_pair(pair_index) {
    html_clear_scroll_top(root);
    html_style_centered(root);
    let pair = list_get(atom, pair_index);
    let [cebuano, english] = pair;
    app_ceb_word_button(root, cebuano);
    app_ceb_word_english(root, english);
    html_buttons_next_previous(
      root,
      (pair_index) => {
        if (greater_than(pair_index, list_index_last(atom))) {
          refresh_node();
        } else {
          refresh_pair(pair_index);
        }
      },
      pair_index,
      list_length(atom),
    );
  }
  function quizzes_start(chunk_sizes) {
    settings_choices = app_ceb_quiz_settings(atom, chunk_sizes);
    refresh_quiz(list_first(settings_choices));
  }
}
