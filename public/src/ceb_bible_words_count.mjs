import { bible_words_language_cache } from "./bible_words_language_cache.mjs";
import { bible_words_count_generic } from "./bible_words_count_generic.mjs";
export async function ceb_bible_words_count(args) {
  let all = await bible_words_language_cache(args);
  let symbols = "_-–—,;:!?.'‘’\"“”()[]}¶/`¯|€0123456789";
  return bible_words_count_generic(all, symbols);
}
