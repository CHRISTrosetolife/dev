import { storage_local_get } from "./storage_local_get.mjs";
export function app_language2_words_get(app_fn) {
  return storage_local_get(app_fn, "words", {});
}
