import { or } from "./or.mjs";
import { number_power } from "./number_power.mjs";
import { equal_0 } from "./equal_0.mjs";
import { integer_log } from "./integer_log.mjs";
import { equal_not } from "./equal_not.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_slice } from "./list_slice.mjs";
import { log } from "./log.mjs";
import { html_clear_scroll_top_centered } from "./html_clear_scroll_top_centered.mjs";
import { html_style_alternate_short_p } from "./html_style_alternate_short_p.mjs";
import { app_ceb_atom_title_patterns } from "./app_ceb_atom_title_patterns.mjs";
import { app_ceb_atom_title } from "./app_ceb_atom_title.mjs";
import { app_ceb_level_size } from "./app_ceb_level_size.mjs";
import { each_range } from "./each_range.mjs";
import { add } from "./add.mjs";
import { mod_last_is } from "./mod_last_is.mjs";
import { html_button_width_full_text_click_next } from "./html_button_width_full_text_click_next.mjs";
import { html_button_width_full_text_click_alternate_short } from "./html_button_width_full_text_click_alternate_short.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
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
import { list_length } from "./list_length.mjs";
import { equal_1 } from "./equal_1.mjs";
import { html_style_bold } from "./html_style_bold.mjs";
import { list_add } from "./list_add.mjs";
import { list_adder } from "./list_adder.mjs";
import { subtract } from "./subtract.mjs";
import { subtract_1 } from "./subtract_1.mjs";
import { divide } from "./divide.mjs";
export async function app_ceb() {
  let root = html_style_default_initialize();
  let group_index = 0;
  let group = await http_storage(ceb_group_path(group_index));
  let level_size = app_ceb_level_size();
  let settings_choices;
  let position = {
    left: 2,
    right: 2,
  };
  refresh_node();
  function refresh_node() {
    html_clear_scroll_top_centered(root);
    app_ceb_title();
    let { left, right } = position;
    const srl = subtract(right, left);
    if (equal_not(srl, 0)) {
      each_range(level_size, (i) => {
        let factor = divide(add_1(srl), level_size);
        let m = multiply(factor, i);
        let s = subtract_1(multiply(factor, add_1(i)));
        let left_next = add(left, m);
        let right_next = add(left, s);
        let atom_left = list_get(group, left_next);
        let atom_right = list_get(group, right_next);
        log({
          left_next,
          right_next,
        });
        let text = app_ceb_atom_title(group, atom_left, atom_right);
        html_button_width_full_text_click_alternate_short(
          root,
          app_ceb_atom_title_patterns(),
          string_combine_multiple([add_1(i), ". ", text]),
          function on_click() {
            position = {
              left: left_next,
              right: right_next,
            };
            refresh_node();
          },
        );
      });
    }
    app_ceb_learn();
    html_button_width_full_text_click_next(root, () => {
      let { left, right } = position;
      let n = add_1(subtract(right, left));
      let count = integer_log(n, level_size);
      let level = number_power(level_size, count);
      log({
        left,
        right,
        n,
        count,
        level,
      });
      if (mod_last_is(right, level)) {
        let a = or(a);
        if (or(equal_0(left), equal_1(level))) {
          log("here1");
          const r1 = add_1(right);
          position = {
            left: r1,
            right: r1,
          };
        } else {
          log("here2");
          position = {
            left: add_1(
              subtract(right, number_power(level_size, add_1(count))),
            ),
            right: right,
          };
        }
      } else {
        log("here3");
        position = {
          left: index_next,
          right: index_next,
        };
      }
      refresh_node();
    });
  }
  function app_ceb_learn() {
    html_button_width_full_text_click(root, "🎓 learn", () => {
      refresh_pair(0);
    });
    html_button_width_full_text_click(root, "📝 quiz ( easy to hard )", () => {
      quizzes_start([3, 2, 1]);
    });
    html_button_width_full_text_click(root, "🧑‍🎓️ quiz ( hard only )", () => {
      quizzes_start([1]);
    });
  }
  function app_ceb_title() {
    let { left, right } = position;
    const gl = list_get(group, left);
    const gr = list_get(group, right);
    let text = app_ceb_atom_title(group, gl, gr);
    html_style_alternate_short_p(root, app_ceb_atom_title_patterns(), text);
  }
  function refresh_quiz(settings) {
    html_clear_scroll_top_centered(root);
    let no_mistakes = true;
    let { pair, chunk_size, forwards } = settings;
    assert(number_is, [chunk_size]);
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
                await app_ceb_audio(cebuano);
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
    html_clear_scroll_top_centered(root);
    let atoms = atoms_slice();
    let concat = list_concat_multiple(atoms);
    let pair = list_get(concat, pair_index);
    let [cebuano, english] = pair;
    app_ceb_word_button(root, cebuano);
    app_ceb_word_english(root, english);
    html_buttons_next_previous(
      root,
      (pair_index) => {
        if (greater_than(pair_index, list_index_last(concat))) {
          refresh_node();
        } else {
          refresh_pair(pair_index);
        }
      },
      pair_index,
      list_length(concat),
    );
  }
  function quizzes_start(chunk_sizes) {
    let atoms = atoms_slice();
    settings_choices = app_ceb_quiz_settings(atoms, chunk_sizes);
    refresh_quiz(list_first(settings_choices));
  }
  function atoms_slice() {
    let { left, right } = position;
    let atoms = list_slice(group, left, add_1(right));
    return atoms;
  }
}
