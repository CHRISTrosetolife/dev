import { ceb_bible_words_count_cache } from "./ceb_bible_words_count_cache.mjs";
import { list_take } from "./list_take.mjs";
export async function ceb_bible_words_top(count) {
  let words = await ceb_bible_words_count_cache();
  let t = list_take(words, count);
  return t;
}
