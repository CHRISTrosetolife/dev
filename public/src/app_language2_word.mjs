import { html_span } from "./html_span.mjs";
import { html_style_bold } from "./html_style_bold.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_flag_language } from "./html_flag_language.mjs";
export function app_language2_word(body, language, rememeber) {
  let q = html_span(body);
  html_flag_language(q, language);
  html_span_text(q, string_combine_multiple([" ", rememeber]));
  html_style_bold(q);
}
