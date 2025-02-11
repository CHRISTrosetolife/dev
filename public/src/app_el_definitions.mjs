import { object_merge } from "./object_merge.mjs";
import { app_save_change } from "./app_save_change.mjs";
import { list_add } from "./list_add.mjs";
import { list_is } from "./list_is.mjs";
import { html_button_text_click } from "./html_button_text_click.mjs";
import { string_split_multiple } from "./string_split_multiple.mjs";
import { html_hr } from "./html_hr.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { each } from "./each.mjs";
import { bible_interlinear_new_definitions_list } from "./bible_interlinear_new_definitions_list.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { html_button_next } from "./html_button_next.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_join_space } from "./list_join_space.mjs";
export function app_el_definitions() {
  let root = html_style_default_initialize();
  let list = bible_interlinear_new_definitions_list();
  let definitions = {};
  each(list, (item) => {
    let definition = object_property_get(item, "definition");
    let split = string_split_multiple(definition, [",", " ", ";"]);
    let word = object_property_get(item, "word");
    html_p_text(root, word);
    let word_builder;
    let definitions_word = [];
    word_reset();
    each(split, (s) => {
      html_button_text_click(root, s, () => {});
    });
    html_button_next(root, () => {});
    async function word_reset() {
      if (list_is(word_builder) && list_empty_not_is(word_builder)) {
        list_add(definitions_word, list_join_space(word_builder));
        await app_save_change((save) => {
          object_merge(save, {
            definitions,
          });
        });
      }
      word_builder = [];
    }
    html_hr(root);
  });
}
