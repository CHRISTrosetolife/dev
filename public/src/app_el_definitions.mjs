import { html_inner_set_json_format } from "./html_inner_set_json_format.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { app_save_get } from "./app_save_get.mjs";
import { html_pre } from "./html_pre.mjs";
import { list_trim_empty_not } from "./list_trim_empty_not.mjs";
import { html_button_add } from "./html_button_add.mjs";
import { log } from "./log.mjs";
import { object_property_set } from "./object_property_set.mjs";
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
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { html_remove } from "./html_remove.mjs";
export function app_el_definitions() {
  let root = html_style_default_initialize();
  let list = bible_interlinear_new_definitions_list();
  let definitions = {};
  let save = app_save_get(app_el_definitions);
  let save_definitions = object_property_get(save, "definitions");
  each(list, (item) => {
    let definition = object_property_get(item, "definition");
    let split = string_split_multiple(definition, [",", " ", ";", "."]);
    let filtered = list_trim_empty_not(split);
    let word = object_property_get(item, "word");
    let strong = object_property_get(item, "strong");
    html_p_text(root, word);
    let progress = html_pre(root);
    if (object_property_exists(save_definitions, strong)) {
      let existing = object_property_get(save_definitions, strong);
      html_inner_set_json_format(progress, existing);
    }
    let word_builder;
    let definitions_word = [];
    object_property_set(definitions, strong, definitions_word);
    word_reset();
    html_p_text(root, definition);
    each(filtered, (s) => {
      let b = html_button_text_click(root, s, () => {
        list_add(word_builder, s);
        progress_update();
        html_remove(b);
      });
    });
    html_button_add(root, "", async () => {
      await word_reset();
      progress_update();
    });
    function progress_update() {
      let object = {
        word_builder,
        definitions_word,
      };
      html_inner_set_json_format(progress, object);
    }
    async function word_reset() {
      if (list_is(word_builder) && list_empty_not_is(word_builder)) {
        list_add(definitions_word, list_join_space(word_builder));
        await app_save_change(app_el_definitions, (save) => {
          object_merge(save, {
            definitions,
          });
          log({
            save,
          });
        });
      }
      word_builder = [];
    }
    html_hr(root);
  });
}
