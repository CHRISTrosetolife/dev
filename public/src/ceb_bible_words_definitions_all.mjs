import { ceb_bible_words_definitions_get } from "./ceb_bible_words_definitions_get.mjs";
import { ceb_bible_words } from "./ceb_bible_words.mjs";
export async function ceb_bible_words_definitions_all() {
  let words = await ceb_bible_words();
  let result = await ceb_bible_words_definitions_get(words);
  return result;
}
