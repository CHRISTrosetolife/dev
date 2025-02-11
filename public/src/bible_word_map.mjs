import { bible_words_map } from "./bible_words_map.mjs";
import { bible_words_count_generic_symbols } from "./bible_words_count_generic_symbols.mjs";
import { list_single } from "./list_single.mjs";
export function bible_word_map(word) {
  let symbols = bible_words_count_generic_symbols();
  let mapped = bible_words_map([word], symbols);
  return list_single(mapped);
}
