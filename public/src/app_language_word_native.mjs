import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_span } from "./html_span.mjs";
import { html_p } from "./html_p.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_style_bold } from "./html_style_bold.mjs";
export function app_language_word_native(root, text) {
  let p = html_p(root);
  let s = html_span(p);
  html_attribute_set(s, "class", "fi fi-gr");
  html_span_text(p, text);
  html_style_bold(p);
}
