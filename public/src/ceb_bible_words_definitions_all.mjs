import { ceb_bible_words_cached } from "./ceb_bible_words_cached.mjs";
import { ceb_bible_words_definitions_get } from "./ceb_bible_words_definitions_get.mjs";
export async function ceb_bible_words_definitions_all() {
  let words = await ceb_bible_words_cached();
  let result = await ceb_bible_words_definitions_get(words);
  return result;
}
