import { bible_words_map } from "./bible_words_map.mjs";
import { string_count } from "./string_count.mjs";
export function bible_words_count_generic(all, symbols) {
  all = bible_words_map(all, symbols);
  let c = string_count(all);
  return c;
}
