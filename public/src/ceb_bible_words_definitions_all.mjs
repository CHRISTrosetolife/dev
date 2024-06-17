import { ceb_bible_words_count } from "./ceb_bible_words_count.mjs";
import { ceb_bible_words_definitions_get } from "./ceb_bible_words_definitions_get.mjs";
export async function ceb_bible_words_definitions_all() {
  let words_ceb = await ceb_bible_words_count();
  let result = await ceb_bible_words_definitions_get(c);
  return result;
}
