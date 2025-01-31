import { app_language_2_words_get } from "./app_language_2_words_get.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
export function app_language_words_set(context) {
  let { app_fn } = context;
  let words = app_language_2_words_get(context);
  storage_local_set(app_fn, "words", words);
}
