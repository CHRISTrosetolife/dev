import { log } from "./log.mjs";
import { app_language2_word_index } from "./app_language2_word_index.mjs";
import { list_filter } from "./list_filter.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function app_language2_matches(word, values_all) {
  let question = object_property_get(word, "question");
  let language = object_property_get(word, "language");
  let index = object_property_get(word, "index");
  let matches = list_filter(
    values_all,
    (v) =>
      object_property_get(v, "learning") === true &&
      app_language2_word_index(v) < index &&
      object_property_get(object_property_get(v, "word"), "question") ===
        question &&
      object_property_get(object_property_get(v, "word"), "language") ===
        language,
  );
  log({
    matches,
  });
  return matches;
}
