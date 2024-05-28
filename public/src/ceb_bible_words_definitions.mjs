import { ceb_bible_words_definitions_get } from "./ceb_bible_words_definitions_get.mjs";
import { list_skip } from "./list_skip.mjs";
import { ceb_bible_words_top } from "./ceb_bible_words_top.mjs";
export async function ceb_bible_words_definitions(skip, limit) {
  let t = await ceb_bible_words_top(limit);
  t = list_skip(t, skip);
  let result = await ceb_bible_words_definitions_get(t);
  return result;
}
