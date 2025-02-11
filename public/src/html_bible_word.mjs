import { html_style_red } from "./html_style_red.mjs";
import { html_style_bold } from "./html_style_bold.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function html_bible_word(d, word) {
  let word_component = html_span_text(d, word);
  html_style_bold(word_component);
  html_style_red(word_component);
  return word_component;
}
