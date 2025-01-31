import { app_language_2_decrease_wait } from "./app_language_2_decrease_wait.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { each } from "./each.mjs";
import { list_add } from "./list_add.mjs";
import { app_language_2_word_index } from "./app_language_2_word_index.mjs";
import { list_find } from "./list_find.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { app_language_2_word_to_language_question_key } from "./app_language_2_word_to_language_question_key.mjs";
export function app_language_2_on_learn(
  word,
  u,
  max_indexes,
  values_skip_manual,
  values,
  wait_initial,
  gap_initial,
) {
  let key = app_language_2_word_to_language_question_key(word);
  let index = object_property_get(word, "index");
  let us = [u];
  if (object_property_exists(max_indexes, key)) {
    let index_max = object_property_get(max_indexes, key);
    if (index < index_max) {
      let u_max = list_find(
        values_skip_manual,
        (m) => app_language_2_word_index(m) === index_max,
      );
      list_add(us, u_max);
    }
  }
  app_language_2_decrease_wait(values);
  each(us, (ui) => {
    object_property_set(ui, "learning", true);
    object_property_set(ui, "wait", wait_initial);
    object_property_set(ui, "gap", gap_initial);
  });
}
