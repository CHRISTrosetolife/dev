import { bible_words_map } from "./bible_words_map.mjs";
import { bible_search_symbols } from "./bible_search_symbols.mjs";
export function bible_search_symbols_map(tokens) {
  let symbols = bible_search_symbols();
  let mapped = bible_words_map(tokens, symbols);
  return mapped;
}
