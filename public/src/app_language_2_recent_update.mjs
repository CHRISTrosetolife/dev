import { object_property_get } from "./object_property_get.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { list_take_soft } from "./list_take_soft.mjs";
import { number_max } from "./number_max.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_add_beginning } from "./list_add_beginning.mjs";
export function app_language_2_recent_update(
  context,
  questions_recent_keys_stored,
  word_key,
  recent_count,
  questions_recent_keys_by_language,
  language,
) {
  let app_fn = object_property_get(context, "app_fn");
  list_add_beginning(questions_recent_keys_stored, word_key);
  questions_recent_keys_stored = list_unique(questions_recent_keys_stored);
  let answer_count_max = 4;
  let answer_choice_word_count_max = 10;
  let questions_recent_limit = number_max(
    recent_count,
    answer_count_max * answer_choice_word_count_max,
  );
  questions_recent_keys_stored = list_take_soft(
    questions_recent_keys_stored,
    questions_recent_limit,
  );
  object_property_set(
    questions_recent_keys_by_language,
    language,
    questions_recent_keys_stored,
  );
  storage_local_set(
    app_fn,
    "questions_recent",
    questions_recent_keys_by_language,
  );
}
