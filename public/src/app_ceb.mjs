import { html_style_display_none } from "./html_style_display_none.mjs";
import { html_style_click_width_min } from "./html_style_click_width_min.mjs";
import { html_button_text_click } from "./html_button_text_click.mjs";
import { string_chunk } from "./string_chunk.mjs";
import { app_ceb_word_button } from "./app_ceb_word_button.mjs";
import { log } from "./log.mjs";
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
export async function app_ceb() {
  let root = html_style_default_initialize();
  let group_index = 0;
  let group = await http_storage(ceb_group_path(group_index));
  let atom = list_first(group);
  let atom_copy = list_copy(atom);
  list_scramble(atom_copy);
  refresh_quiz(0);
  function refresh_quiz(pair_index) {
    html_clear_scroll_top(root);
    html_style_centered(root);
    let pair = list_get(atom_copy, pair_index);
    let [cebuano, english] = pair;
    let cebuano_p = app_ceb_word_button(root, cebuano);
    let answer = html_p_text(root, "?");
    let index = 0;
    log({
      english,
    });
    let split_size = 1;
    let correct_choices = string_chunk(english, split_size);
    let choices = list_copy(correct_choices);
    list_scramble(choices);
    each(choices, (choice) => {
      let button = html_button_text_click(root, choice, () => {
        let correct = list_get(correct_choices, index);
        if (equal(choice, correct)) {
          index = add_1(index);
          let last = equal(index, string_length(english)) ? "" : "?";
          html_inner_set(
            answer,
            string_combine(string_take(english, index), last),
          );
          app_learn_code_style_success(button)
          html_style_display_none(button);
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
