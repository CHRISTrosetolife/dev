import { log } from "./log.mjs";
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
import { html_style_bold } from "./html_style_bold.mjs";
import { html_style_centered } from "./html_style_centered.mjs";
import { list_index_last } from "./list_index_last.mjs";
import { equal } from "./equal.mjs";
import { add_1 } from "./add_1.mjs";
import { html_inner_set } from "./html_inner_set.mjs";
import { string_take } from "./string_take.mjs";
import { string_combine } from "./string_combine.mjs";
import { string_length } from "./string_length.mjs";
import { list_remove } from "./list_remove.mjs";
import { list_second } from "./list_second.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { subtract_1 } from "./subtract_1.mjs";
import { assert } from "./assert.mjs";
import { multiply } from "./multiply.mjs";
import { number_min } from "./number_min.mjs";
import { html_style } from "./html_style.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { list_adder } from "./list_adder.mjs";
export async function app_ceb() {
  let root = html_style_default_initialize();
  let group_index = 0;
  let group = await http_storage(ceb_group_path(group_index));
  let atom = list_first(group);
  let atom_copy;
  let settings = list_adder((la) => each([true, false], (forwards) => {}));
  function refresh_splash() {
    html_clear_scroll_top(root);
    html_button_width_full_text_click(root, "begin", () => {
      quiz_set_new();
      refresh_quiz(0, 3, false);
    });
  }
  refresh_splash();
  function quiz_set_new() {
    atom_copy = list_copy(atom);
    list_scramble(atom_copy);
  }
  function refresh_quiz(pair_index, chunk_size) {
    assert(number_is, [chunk_size]);
    html_clear_scroll_top(root);
    html_style_centered(root);
    let pair = list_get(atom_copy, pair_index);
    let pairs_other = list_copy(atom);
    list_remove(pairs_other, pair);
    let [cebuano, english] = pair;
    let cebuano_p = app_ceb_word_button(root, cebuano);
    let answer = html_p_text(root, "?");
    let style = html_element_style(answer);
    html_style_default_border_margin(style);
    html_style_width_full(answer);
    html_style(answer, {
      "border-color": "lightblue",
    });
    let index = 0;
    let correct_choices = string_chunk(english, chunk_size);
    let pair_other = list_random_item(pairs_other);
    let english_other = list_second(pair_other);
    let other_choices = string_chunk(english_other, chunk_size);
    let choices = list_copy(correct_choices);
    list_add_multiple(choices, other_choices);
    list_scramble(choices);
    each(choices, (choice) => {
      let button = html_button_text_click(root, choice, () => {
        let correct = list_get(correct_choices, index);
        if (equal(choice, correct)) {
          index = add_1(index);
          const last_is = greater_than_equal(
            multiply(index, chunk_size),
            string_length(english),
          );
          let last = last_is ? "" : "?";
          const take_count = number_min(
            multiply(index, chunk_size),
            string_length(english),
          );
          log({
            index,
            chunk_size,
            english,
            last,
            take_count,
          });
          html_inner_set(
            answer,
            string_combine(string_take(english, take_count), last),
          );
          if (last_is) {
            app_learn_code_style_success(answer);
            html_style_display_none(button);
          }
          app_learn_code_style_success(button);
          app_learn_code_correct_timeout(() => {
            html_style_display_none(button);
            if (last_is) {
              app_learn_code_style_success(answer);
              if (equal(pair_index, list_index_last(atom_copy))) {
                chunk_size = subtract_1(chunk_size);
                pair_index = 0;
                quiz_set_new();
              } else {
                pair_index = add_1(pair_index);
              }
              refresh_quiz(pair_index, chunk_size);
            }
          });
        }
      });
      html_style_click_width_min(button);
    });
  }
  async function refresh_pair(pair_index) {
    html_clear_scroll_top(root);
    html_style_centered(root);
    let pair = list_get(atom_copy, pair_index);
    let [cebuano, english] = pair;
    let cebuano_p = app_ceb_word_button(root, cebuano);
    let english_p = html_p_text(root, english);
    each([cebuano_p, english_p], html_style_bold);
    html_buttons_next_previous(
      root,
      refresh_pair,
      pair_index,
      list_index_last(atom_copy),
    );
  }
}
