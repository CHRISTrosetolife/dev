import { bible_words_language_count_cache } from "./bible_words_language_count_cache.mjs";
import { ceb_bible_words_definitions_get } from "./ceb_bible_words_definitions_get.mjs";
export async function bible_words_definitions_all(language) {
  let words = await bible_words_language_count_cache({
    new: false,
    language,
  });
  let result = await ceb_bible_words_definitions_get(words);
  return result;
}
