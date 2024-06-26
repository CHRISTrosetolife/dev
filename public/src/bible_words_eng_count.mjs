import { string_symbols_multiple } from "./string_symbols_multiple.mjs";
import { bible_words_count_generic } from "./bible_words_count_generic.mjs";
import { bible_words_eng_cache } from "./bible_words_eng_cache.mjs";
export async function bible_words_eng_count() {
  let all = await bible_words_eng_cache();
  return string_symbols_multiple(all);
  let symbols = "-–,;:!?.…·'‘’“”()[]{}/&`►◄0123456789";
  return bible_words_count_generic(all, symbols);
}
