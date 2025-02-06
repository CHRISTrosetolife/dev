import { html_style_code_dark } from "./html_style_code_dark.mjs";
import { html_style_rounded_padded } from "./html_style_rounded_padded.mjs";
import { html_textarea_width_full } from "./html_textarea_width_full.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
export function html_textarea_code(root) {
  let textarea = html_textarea_width_full(root);
  html_style_rounded_padded(textarea);
  html_style_code_dark(textarea);
  html_attribute_set(textarea, "spellcheck", "false");
  return textarea;
}
