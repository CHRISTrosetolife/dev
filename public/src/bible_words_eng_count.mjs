import { bible_words_eng_symbols } from "./bible_words_eng_symbols.mjs";
import { bible_words_count_generic } from "./bible_words_count_generic.mjs";
import { bible_words_eng_cache } from "./bible_words_eng_cache.mjs";
export async function bible_words_eng_count() {
  let all = await bible_words_eng_cache();
  let symbols = bible_words_eng_symbols();
  return bible_words_count_generic(all, symbols);
}
