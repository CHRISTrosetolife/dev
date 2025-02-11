import { bible_words_map } from "./bible_words_map.mjs";
import { bible_words_count_generic_symbols } from "./bible_words_count_generic_symbols.mjs";
import { list_single } from "./list_single.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
export function bible_word_map(word) {
  let symbols = bible_words_count_generic_symbols();
  let mapped = bible_words_map([word], symbols);
  if (list_empty_not_is(mapped)) {
    return list_single(mapped);
  }
  return null;
}
