import { bible_words_map_generic } from "./bible_words_map_generic.mjs";
import { string_trim } from "./string_trim.mjs";
export function bible_words_map(all, symbols) {
  all = bible_words_map_generic(string_trim, all, symbols);
  return all;
}
