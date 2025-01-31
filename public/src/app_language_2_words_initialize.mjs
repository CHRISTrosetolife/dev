import { app_language_2_gaps_update } from "./app_language_2_gaps_update.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { each } from "./each.mjs";
import { object_property_set } from "./object_property_set.mjs";
export function app_language_2_words_initialize(context, words, group_flat) {
  let { app_fn } = context;
  object_property_set(context, "words", words);
  each(group_flat, (word) => {
    let k = object_property_get(word, "key");
    if (object_property_exists(words, k)) {
      let existing = object_property_get(words, k);
      let word_existing = object_property_get(existing, "word");
      object_property_set(
        word_existing,
        "index",
        object_property_get(word, "index"),
      );
      return;
    }
    let w = {
      learning: false,
      word,
    };
    object_property_set(words, k, w);
    object_property_set(w, "wait", null);
    object_property_set(w, "gap", null);
  });
  storage_local_set(app_fn, "words", words);
  app_language_2_gaps_update(context);
}
