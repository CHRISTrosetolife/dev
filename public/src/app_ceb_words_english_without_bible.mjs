import { bible_words_eng_cache } from "./bible_words_eng_cache.mjs";
export async function app_ceb_words_english_without_bible() {
  return await bible_words_eng_cache();
}
