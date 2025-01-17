import { ceiling } from "./ceiling.mjs";
import { list_size } from "./list_size.mjs";
import { app_language2_refresh } from "./app_language2_refresh.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { object_properties_select } from "./object_properties_select.mjs";
import { each_index } from "./each_index.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { json_to } from "./json_to.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { storage_local_get } from "./storage_local_get.mjs";
import { storage_local_initialize } from "./storage_local_initialize.mjs";
import { each } from "./each.mjs";
import { list_adder } from "./list_adder.mjs";
import { app_language_initialize } from "./app_language_initialize.mjs";
import { list_second } from "./list_second.mjs";
import { list_first } from "./list_first.mjs";
import { list_map } from "./list_map.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { app_language_group_index_changed_inner } from "./app_language_group_index_changed_inner.mjs";
import { list_concat } from "./list_concat.mjs";
import { object_properties } from "./object_properties.mjs";
export async function app_language2(app_fn, language_learn, language_fluent) {
  let root = await app_language_initialize();
  let context = {
    app_fn,
    language_learn,
    language_fluent,
    root,
  };
  storage_local_initialize(app_fn, "words", {});
  await app_language_group_index_changed_inner(context, 0);
  let group = object_property_get(context, "group");
  let flat = list_adder((la) => {
    each(group, (atom) => {
      each(atom, la);
    });
  });
  let concated = list_concat(
    list_map(flat, (pair) => ({
      question: list_first(pair),
      answer: list_second(pair),
      language: language_learn,
    })),
    list_map(flat, (pair) => ({
      question: list_second(pair),
      answer: list_first(pair),
      language: language_fluent,
    })),
  );
  let properties = ["question", "answer", "language"];
  each_index(concated, (c, index) => {
    object_property_set(c, "index", index);
    object_property_set(
      c,
      "key",
      json_to(object_properties_select(c, properties)),
    );
  });
  let words = storage_local_get(app_fn, "words", {});
  object_property_set(context, "words", words);
  each(concated, (word) => {
    let k = object_property_get(word, "key");
    if (object_property_exists(words, k)) {
      if (false) {
        return;
      }
    }
    let w = {
      learning: false,
      word,
    };
    object_property_set(words, k, w);
    object_property_set(w, "wait", null);
    object_property_set(w, "gap", null);
    storage_local_set(app_fn, "words", words);
  });
  let w_size = list_size(object_properties(words));
  let gap = 0;
  while (gap < w_size) {
    let factor = 1.2;
    gap = ceiling(gap * factor) + 1;
  }
  await app_language2_refresh(context);
}
