import { object_merge_strict } from "./object_merge_strict.mjs";
import { app_language_2_word } from "./app_language_2_word.mjs";
import { html_p } from "./html_p.mjs";
export function app_language_2_word_p(body, language, text) {
  let p = html_p(body);
  let result = app_language_2_word(p, language, text, false);
  object_merge_strict(result, {
    language,
    text,
  });
  return result;
}
