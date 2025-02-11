import { bible_words_count_generic_symbols } from "./bible_words_count_generic_symbols.mjs";
import { bible_words_language_cache } from "./bible_words_language_cache.mjs";
import { bible_words_count_generic } from "./bible_words_count_generic.mjs";
export async function bible_words_language_count(args) {
  let all = await bible_words_language_cache(args);
  let symbols = bible_words_count_generic_symbols();
  return bible_words_count_generic(all, symbols);
}
