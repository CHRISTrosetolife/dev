import { string_symbols_multiple } from "./string_symbols_multiple.mjs";
import { ceb_bible_words_cache } from "./ceb_bible_words_cache.mjs";
import { string_count_words } from "./string_count_words.mjs";
import { ceb_bible_words_definitions_get } from "./ceb_bible_words_definitions_get.mjs";
export async function ceb_bible_words_definitions_all() {
  let all = await ceb_bible_words_cache();
  let symbols = "";
  return string_symbols_multiple(all);
  let c = string_count_words(all);
  let result = await ceb_bible_words_definitions_get(c);
  return result;
}
