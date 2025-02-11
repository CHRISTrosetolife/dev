import { json_to } from "./json_to.mjs";
import { bible_interlinear_new_definitions_list } from "./bible_interlinear_new_definitions_list.mjs";
import { each } from "./each.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export function app_app_el_definitions() {
  let root = html_style_default_initialize();
  let list = bible_interlinear_new_definitions_list();
  each(list, (item) => {
    html_p_text(root, json_to(item));
  });
}
