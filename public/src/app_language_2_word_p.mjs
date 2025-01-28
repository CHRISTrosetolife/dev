import { app_language_2_word } from "./app_language_2_word.mjs";
import { html_p } from "./html_p.mjs";
export function app_language_2_word_p(body, language, rememeber) {
  let p = html_p(body);
  app_language_2_word(body, language, rememeber, false);
}
