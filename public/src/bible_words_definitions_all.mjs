import { bible_words_language_count_cache_all } from "./bible_words_language_count_cache_all.mjs";
import { bible_words_definitions_get } from "./bible_words_definitions_get.mjs";
export async function bible_words_definitions_all(language) {
  let words = await bible_words_language_count_cache_all(language);
  let result = await bible_words_definitions_get(language, words);
  return result;
}
