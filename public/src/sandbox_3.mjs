import { ceb_bible_words_count_cache } from "./ceb_bible_words_count_cache.mjs";
export async function sandbox_3() {
  return await ceb_bible_words_count_cache({
    new: false,
  });
}
