import { storage_local_set } from "./storage_local_set.mjs";
export function app_language_words_set(context) {
  let { app_fn } = context;
  storage_local_set(app_fn, "words", words);
}
