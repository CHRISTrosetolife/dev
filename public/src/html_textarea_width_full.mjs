import { html_style_width_full } from "./html_style_width_full.mjs";
import { html_textarea } from "./html_textarea.mjs";
export function html_textarea_width_full(root) {
  let textarea = html_textarea(root);
  html_style_width_full(textarea);
  return textarea;
}
