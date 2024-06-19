import { app_language_word_style } from "./app_language_word_style.mjs";
import { html_style_bold } from "./html_style_bold.mjs";
import { noop } from "./noop.mjs";
export function app_language_atom_title_patterns() {
  return [noop, app_language_word_style, noop, html_style_bold];
}
