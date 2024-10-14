import { error } from "./error.mjs";
import { bible_words_definitions_get } from "./bible_words_definitions_get.mjs";
import { bible_words_language_count_cache } from "./bible_words_language_count_cache.mjs";
export async function bible_words_definitions_all(language) {
  let words = await bible_words_language_count_cache({
    new: false,
    language,
  });
  let result = await bible_words_definitions_get(words, language);
  return result;
}
