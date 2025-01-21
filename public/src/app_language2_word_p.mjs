import { app_language2_word } from "./app_language2_word.mjs";
import { html_p } from "./html_p.mjs";
export function app_language2_word_p(body, language, rememeber) {
  let p = html_p(body);
  app_language2_word(body, language, rememeber, false);
}
