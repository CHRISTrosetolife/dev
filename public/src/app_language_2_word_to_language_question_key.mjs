import { json_to } from "./json_to.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function app_language_2_word_to_language_question_key(vsm_word) {
  let question = object_property_get(vsm_word, "question");
  let language = object_property_get(vsm_word, "language");
  let key = json_to([language, question]);
  return key;
}
