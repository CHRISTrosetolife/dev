import { app_language_2_word_index } from "./app_language_2_word_index.mjs";
import { log } from "./log.mjs";
import { list_filter } from "./list_filter.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
export function app_language_2_answers_matches(values_all, v) {
  let word = object_property_get(v, "word");
  let question = object_property_get(word, "question");
  let language = object_property_get(word, "language");
  let index = object_property_get(word, "index");
  let matches = list_filter(values_all, (w) => {
    let w_word = object_property_get(w, "word");
    return (
      object_property_get(w, "learning") === true &&
      app_language_2_word_index(w) !== index &&
      object_property_get(w_word, "question") === question &&
      object_property_get(w_word, "language") === language
    );
  });
  if (false) {
    if (list_empty_not_is(matches)) {
      log({
        matches,
      });
    }
  }
  return matches;
}
