import { app_language_2_word } from "./app_language_2_word.mjs";
import { html_p } from "./html_p.mjs";
export function app_language_2_word_p(body, language, text) {
  let p = html_p(body);
  return app_language_2_word(p, language, text, false);
}
