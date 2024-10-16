import { bible_words_language_count_cache } from "./bible_words_language_count_cache.mjs";
export async function bible_words_language_count_cache_all(language) {
  return await bible_words_language_count_cache({
    new: false,
    language,
  });
}
