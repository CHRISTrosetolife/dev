import { html_style_bold } from "./html_style_bold.mjs";
import { html_p_text } from "./html_p_text.mjs";
export function app_language_word_english(root, english) {
  let english_p = html_p_text(root, english);
  html_style_bold(english_p);
}
