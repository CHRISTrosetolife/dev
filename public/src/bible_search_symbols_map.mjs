import { string_replace_multiple } from "./string_replace_multiple.mjs";
import { bible_words_map_generic } from "./bible_words_map_generic.mjs";
import { bible_search_symbols } from "./bible_search_symbols.mjs";
export function bible_search_symbols_map(tokens) {
  let symbols = bible_search_symbols();
  let mapped = bible_words_map_generic(
    (a, symbols) => string_replace_multiple(a, symbols, ""),
    tokens,
    symbols,
  );
  return mapped;
}
