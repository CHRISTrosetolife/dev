import { storage_local_recent_add } from "./storage_local_recent_add.mjs";
import { app_language_2_answer_count_max } from "./app_language_2_answer_count_max.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { number_max } from "./number_max.mjs";
import { list_reverse } from "./list_reverse.mjs";
export function app_language_2_recent_update(context, word, recent_count) {
  let app_fn = object_property_get(context, "app_fn");
  let language_fluent = object_property_get(context, "language_fluent");
  let language = object_property_get(word, "language");
  let question = object_property_get(word, "question");
  let answer = object_property_get(word, "answer");
  let recent_new = [question, answer];
  if (language === language_fluent) {
    list_reverse(recent_new);
  }
  let answer_count_max = app_language_2_answer_count_max();
  let answer_choice_word_count_max = 10;
  let questions_recent_limit = number_max(
    recent_count,
    (answer_count_max - 1) * answer_choice_word_count_max,
  );
  storage_local_recent_add(
    context,
    "questions_recent",
    recent_new,
    questions_recent_limit,
  );
}
