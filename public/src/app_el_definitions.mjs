import { object_property_get } from "./object_property_get.mjs";
import { json_to } from "./json_to.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { each } from "./each.mjs";
import { bible_interlinear_new_definitions_list } from "./bible_interlinear_new_definitions_list.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export function app_el_definitions() {
  let root = html_style_default_initialize();
  let list = bible_interlinear_new_definitions_list();
  each(list, (item) => {
    html_p_text(root, json_to(item));
    let definition = object_property_get(item, "definition");
    let word = object_property_get(item, "word");
  });
}
