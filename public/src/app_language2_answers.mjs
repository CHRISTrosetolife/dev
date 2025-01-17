import { list_map } from "./list_map.mjs";
import { list_add } from "./list_add.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { each } from "./each.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { app_language2_word_index } from "./app_language2_word_index.mjs";
import { list_filter } from "./list_filter.mjs";
export function app_language2_answers(values_all, index, question, v) {
  let matches = list_filter(
    values_all,
    (v) =>
      app_language2_word_index(v) < index &&
      object_property_get(object_property_get(v, "word"), "question") ===
        question,
  );
  each(matches, (match) => {
    object_property_set(match, "skip", true);
  });
  list_add(matches, v);
  let mapped = list_map(matches, (m) =>
    object_property_get(object_property_get(m, "word"), "answer"),
  );
  return mapped;
}
