import { html_button_width_full_text_click_up } from "./html_button_width_full_text_click_up.mjs";
import { list_size } from "./list_size.mjs";
import { list_index_last } from "./list_index_last.mjs";
import { greater_than } from "./greater_than.mjs";
import { html_buttons_next_previous } from "./html_buttons_next_previous.mjs";
import { app_language_word_native } from "./app_language_word_native.mjs";
import { app_language_word_button } from "./app_language_word_button.mjs";
import { list_get } from "./list_get.mjs";
import { app_language_atoms_slice_concat } from "./app_language_atoms_slice_concat.mjs";
import { html_clear_scroll_top_centered } from "./html_clear_scroll_top_centered.mjs";
export function app_language_refresh_learn(
  root,
  app_fn,
  group,
  pair_index,
  language_learn,
  refresh_node,
  refresh_learn,
) {
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
