import { html_button_text_click } from "./html_button_text_click.mjs";
import { string_split_multiple } from "./string_split_multiple.mjs";
import { html_hr } from "./html_hr.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { each } from "./each.mjs";
import { bible_interlinear_new_definitions_list } from "./bible_interlinear_new_definitions_list.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export function app_el_definitions() {
  let root = html_style_default_initialize();
  let list = bible_interlinear_new_definitions_list();
  each(list, (item) => {
    let definition = object_property_get(item, "definition");
    let split = string_split_multiple(definition, [",", " ", ";"]);
    let word = object_property_get(item, "word");
    html_p_text(root, word);
    each(split, (s) => {
      html_button_text_click(root, s, () => {});
    });
    html_hr(root);
  });
}
