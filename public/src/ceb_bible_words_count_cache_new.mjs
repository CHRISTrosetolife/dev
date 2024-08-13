import { ceb_bible_words_count_cache } from "./ceb_bible_words_count_cache.mjs";
export async function ceb_bible_words_count_cache_new() {
  return await ceb_bible_words_count_cache({
    new: true,
  });
}
