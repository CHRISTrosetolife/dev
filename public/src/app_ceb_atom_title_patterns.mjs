import { html_style_bold } from "./html_style_bold.mjs";
import { app_ceb_word_style } from "./app_ceb_word_style.mjs";
import { noop } from "./noop.mjs";
export function app_ceb_atom_title_patterns() {
  return [noop, app_ceb_word_style, noop, html_style_bold];
}
