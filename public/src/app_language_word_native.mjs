import { html_span_text } from "./html_span_text.mjs";
import { html_style_bold } from "./html_style_bold.mjs";
import { html_p_text } from "./html_p_text.mjs";
export function app_language_word_native(root, text) {
  let p = html_p_text(root, text);
  html_span_text();
  html_style_bold(p);
}
