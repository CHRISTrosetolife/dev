import { bible_words_eng_symbols } from "./bible_words_eng_symbols.mjs";
import { bible_words_map } from "./bible_words_map.mjs";
import { bible_words_eng_cache } from "./bible_words_eng_cache.mjs";
export async function app_ceb_words_english_without_bible() {
  let all = await bible_words_eng_cache();
  all = bible_words_map(all, bible_words_eng_symbols());
  return all;
}
