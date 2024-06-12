import { string_count_words } from "./string_count_words.mjs";
import { ceb_bible_words_cached } from "./ceb_bible_words_cached.mjs";
import { ceb_bible_words_definitions_get } from "./ceb_bible_words_definitions_get.mjs";
export async function ceb_bible_words_definitions_all() {
  let all = await ceb_bible_words_cached();
  let c = string_count_words(all);
  let result = await ceb_bible_words_definitions_get(c);
  return result;
}
