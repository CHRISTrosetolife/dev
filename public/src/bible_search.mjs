import { bible_words_map } from "./bible_words_map.mjs";
import { bible_search_index_cache } from "./bible_search_index_cache.mjs";
import { string_split_comma } from "./string_split_comma.mjs";
export async function bible_search(words) {
  let s = string_split_comma(words);
  s = bible_words_map(s, symbols);
  let i = await bible_search_index_cache();
}
