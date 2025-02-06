import { app_language_2_answer_count_max } from "./app_language_2_answer_count_max.mjs";
import { list_unique_json } from "./list_unique_json.mjs";
import { app_language_2_questions_recent_get } from "./app_language_2_questions_recent_get.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { list_take_soft } from "./list_take_soft.mjs";
import { number_max } from "./number_max.mjs";
import { list_add_beginning } from "./list_add_beginning.mjs";
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
  let questions_recent_stored = app_language_2_questions_recent_get(context);
  list_add_beginning(questions_recent_stored, recent_new);
  let answer_count_max = app_language_2_answer_count_max();
  let answer_choice_word_count_max = 10;
  let questions_recent_limit = number_max(
    recent_count,
    (answer_count_max - 1) * answer_choice_word_count_max,
  );
  questions_recent_stored = list_take_soft(
    questions_recent_stored,
    questions_recent_limit,
  );
  questions_recent_stored = list_unique_json(questions_recent_stored);
  storage_local_set(app_fn, "questions_recent", questions_recent_stored);
}
