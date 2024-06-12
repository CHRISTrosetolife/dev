import { string_case_lower } from "./string_case_lower.mjs";
import { list_filter } from "./list_filter.mjs";
import { string_trim } from "./string_trim.mjs";
import { ceb_bible_words_cache } from "./ceb_bible_words_cache.mjs";
import { string_count_words } from "./string_count_words.mjs";
import { ceb_bible_words_definitions_get } from "./ceb_bible_words_definitions_get.mjs";
import { list_map } from "./list_map.mjs";
import { string_empty_not_is } from "./string_empty_not_is.mjs";
export async function ceb_bible_words_definitions_all() {
  let all = await ceb_bible_words_cache();
  let symbols = "_-–—,;:!?.'‘’\"“”()[]}¶/`¯|€0123456789";
  all = list_map(all, (a) => string_trim(a, symbols));
  all = list_map(all, string_case_lower);
  all = list_filter(all, string_empty_not_is);
  let c = string_count_words(all);
  let result = await ceb_bible_words_definitions_get(c);
  return result;
}
