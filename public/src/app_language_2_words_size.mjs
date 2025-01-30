import { object_properties_size } from "./object_properties_size.mjs";
import { app_language_2_words_get } from "./app_language_2_words_get.mjs";
export function app_language_2_words_size(context) {
  let words = app_language_2_words_get(context);
  let w_size = object_properties_size(words);
  return w_size;
}
