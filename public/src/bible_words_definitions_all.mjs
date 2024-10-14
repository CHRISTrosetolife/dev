import { bible_words_language_count_cache } from "./bible_words_language_count_cache.mjs";
import { ceb_bible_words_definitions_get } from "./ceb_bible_words_definitions_get.mjs";
export async function bible_words_definitions_all() {
  let words_ceb = await bible_words_language_count_cache({
    new: false,
  });
  let result = await ceb_bible_words_definitions_get(words_ceb);
  return result;
}
