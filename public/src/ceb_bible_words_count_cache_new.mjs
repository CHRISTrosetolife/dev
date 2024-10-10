import { bible_words_language_count_cache } from "./bible_words_language_count_cache.mjs";
export async function ceb_bible_words_count_cache_new() {
  return await bible_words_language_count_cache({
    new: true,
  });
}
