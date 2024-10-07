import { bible_words_map_generic } from "./bible_words_map_generic.mjs";
import { string_trim } from "./string_trim.mjs";
export function bible_words_map(all, symbols) {
  let lambda = string_trim;
  all = bible_words_map_generic(lambda, all, symbols);
  return all;
}
