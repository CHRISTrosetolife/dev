import { list_take } from "./list_take.mjs";
import { ceb_bible_words } from "./ceb_bible_words.mjs";
export async function ceb_bible_words_top(count) {
  let words = await ceb_bible_words();
  let t = list_take(words, count);
  return t;
}
