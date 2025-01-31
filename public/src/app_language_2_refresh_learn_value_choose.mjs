import { list_first } from "./list_first.mjs";
import { list_sort_property } from "./list_sort_property.mjs";
import { list_copy } from "./list_copy.mjs";
import { app_language_2_words_sort } from "./app_language_2_words_sort.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { each } from "./each.mjs";
import { object_property_exists_not } from "./object_property_exists_not.mjs";
import { app_language_2_other } from "./app_language_2_other.mjs";
import { json_to } from "./json_to.mjs";
import { app_language_2_word_key } from "./app_language_2_word_key.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_filter } from "./list_filter.mjs";
import { app_language_2_skip_manual_get } from "./app_language_2_skip_manual_get.mjs";
import { object_values } from "./object_values.mjs";
export function app_language_2_refresh_learn_value_choose(
  words1,
  app_fn1,
  language_le1arn,
  language_flu1ent,
  word_to_language_question_key,
) {
  let { app_fn, language_learn, language_fluent, words } = context;
  let values_all = object_values(words);
  let skip_manual = app_language_2_skip_manual_get(app_fn);
  let values_skip_manual = list_filter(values_all, (v) => {
    let word = object_property_get(v, "word");
    let question = object_property_get(word, "question");
    let answer = object_property_get(word, "answer");
    let language = object_property_get(word, "language");
    let key = app_language_2_word_key(v);
    let key_other = json_to([
      answer,
      question,
      app_language_2_other(language, language_learn, language_fluent),
    ]);
    return (
      object_property_exists_not(skip_manual, key) &&
      object_property_exists_not(skip_manual, key_other)
    );
  });
  let max_indexes = {};
  each(values_skip_manual, (v) => {
    if (object_property_get(v, "learning") !== true) {
      return;
    }
    let v_word = object_property_get(v, "word");
    let index = object_property_get(v_word, "index");
    let key = word_to_language_question_key(v_word);
    let value = object_property_initialize(max_indexes, key, -1);
    if (index > value) {
      object_property_set(max_indexes, key, index);
    }
  });
  let values = list_filter(values_skip_manual, (v) => {
    let v_word = object_property_get(v, "word");
    let index = object_property_get(v_word, "index");
    let key = word_to_language_question_key(v_word);
    return (
      object_property_get(v, "learning") !== true ||
      index === object_property_get(max_indexes, key)
    );
  });
  app_language_2_words_sort(values);
  values = list_copy(values);
  list_sort_property(values, "wait");
  let wait_initial = 0;
  let gap_initial = 0;
  let v = list_first(values);
  return {
    v,
    values,
    values_skip_manual,
    max_indexes,
    wait_initial,
    gap_initial,
    values_all,
  };
}
