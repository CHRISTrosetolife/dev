import { list_sort_map } from "./list_sort_map.mjs";
import { app_language_2_word_index } from "./app_language_2_word_index.mjs";
export function app_language_2_words_sort(values) {
  list_sort_map(values, app_language_2_word_index);
}
