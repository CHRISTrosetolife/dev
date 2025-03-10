import { app_language_2_other } from "./app_language_2_other.mjs";
import { html_spacer } from "./html_spacer.mjs";
import { app_language_2_word } from "./app_language_2_word.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function app_language_word_pair(context, entry, word) {
  let { language_learn, language_fluent } = context;
  let language = object_property_get(word, "language");
  let question = object_property_get(word, "question");
  app_language_2_word(entry, language, question, false, context);
  let answer = object_property_get(word, "answer");
  html_spacer(entry);
  app_language_2_word(
    entry,
    app_language_2_other(language, language_learn, language_fluent),
    answer,
    false,
    context,
  );
}
