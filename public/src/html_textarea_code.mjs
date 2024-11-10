import { html_textarea_width_full } from "./html_textarea_width_full.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { app_learn_code_code_background_set } from "./app_learn_code_code_background_set.mjs";
import { app_learn_code_style_code } from "./app_learn_code_style_code.mjs";
import { app_learn_code_style_code_color } from "./app_learn_code_style_code_color.mjs";
export function html_textarea_code(root) {
  let textarea = html_textarea_width_full(root);
  app_learn_code_style_code_color(textarea);
  app_learn_code_style_code(textarea);
  app_learn_code_code_background_set(textarea);
  html_attribute_set(textarea, "spellcheck", "false");
  return textarea;
}
