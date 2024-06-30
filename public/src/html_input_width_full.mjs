import { html_style_rounded_padded } from "./html_style_rounded_padded.mjs";
import { html_style_width_full } from "./html_style_width_full.mjs";
import { html_spellcheck_none } from "./html_spellcheck_none.mjs";
import { html_input } from "./html_input.mjs";
export function html_input_width_full(root) {
  let input = html_input(root);
  html_style_rounded_padded(input);
  html_spellcheck_none(input);
  html_style_width_full(input);
  return input;
}
