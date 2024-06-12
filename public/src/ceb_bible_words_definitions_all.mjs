import { string_trim } from "./string_trim.mjs";
import { ceb_bible_words_cache } from "./ceb_bible_words_cache.mjs";
import { string_count_words } from "./string_count_words.mjs";
import { ceb_bible_words_definitions_get } from "./ceb_bible_words_definitions_get.mjs";
import { list_map } from "./list_map.mjs";
export async function ceb_bible_words_definitions_all() {
  let all = await ceb_bible_words_cache();
  let symbols = "_-–—,;:!?.'‘’\"“”()[]}¶/`¯|€0123456789";
  all = list_map(all, (a) => string_trim(a, symbols));
  let c = string_count_words(all);
  let result = await ceb_bible_words_definitions_get(c);
  return result;
}
