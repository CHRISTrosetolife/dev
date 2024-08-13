import { bible_words_count_generic } from "./bible_words_count_generic.mjs";
import { ceb_bible_words_cache } from "./ceb_bible_words_cache.mjs";
export async function ceb_bible_words_count(args) {
  let all = await ceb_bible_words_cache(args);
  let symbols = "_-–—,;:!?.'‘’\"“”()[]}¶/`¯|€0123456789";
  return bible_words_count_generic(all, symbols);
}
