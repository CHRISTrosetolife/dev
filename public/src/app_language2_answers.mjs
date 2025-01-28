import { app_language_2_answers_matches } from "./app_language_2_answers_matches.mjs";
import { list_map } from "./list_map.mjs";
import { list_add } from "./list_add.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_sort_string } from "./list_sort_string.mjs";
import { identity } from "./identity.mjs";
export function app_language2_answers(values_all, v) {
  let matches = app_language_2_answers_matches(values_all, v);
  list_add(matches, v);
  let mapped = list_map(matches, (m) =>
    object_property_get(object_property_get(m, "word"), "answer"),
  );
  list_sort_string(mapped, identity);
  return mapped;
}
