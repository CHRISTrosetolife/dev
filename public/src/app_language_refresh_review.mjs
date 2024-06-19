import { app_language_word_native } from "./app_language_word_native.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { app_language_word_button_audio_none } from "./app_language_word_button_audio_none.mjs";
import { each_object } from "./each_object.mjs";
import { identity } from "./identity.mjs";
import { list_sort_string } from "./list_sort_string.mjs";
import { list_add } from "./list_add.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { each } from "./each.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
import { app_language_atoms_slice_concat } from "./app_language_atoms_slice_concat.mjs";
import { html_hr } from "./html_hr.mjs";
import { html_button_width_full_text_click_up } from "./html_button_width_full_text_click_up.mjs";
import { html_clear_scroll_top_centered } from "./html_clear_scroll_top_centered.mjs";
export function app_language_refresh_review(context) {
  let { root, app_fn, group, language_learn } = context;
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
