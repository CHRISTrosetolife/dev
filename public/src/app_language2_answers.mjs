import { app_language2_matches } from "./app_language2_matches.mjs";
import { list_map } from "./list_map.mjs";
import { list_add } from "./list_add.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { each } from "./each.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_sort_string } from "./list_sort_string.mjs";
import { identity } from "./identity.mjs";
export function app_language2_answers(values_all, v) {
  let word = object_property_get(v, "word");
  let matches = app_language2_matches(word, values_all);
  each(matches, (match) => {
    object_property_set(match, "skip", true);
  });
  list_add(matches, v);
  let mapped = list_map(matches, (m) =>
    object_property_get(object_property_get(m, "word"), "answer"),
  );
  list_sort_string(mapped, identity);
  return mapped;
}
