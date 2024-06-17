import { ceb_bible_words_score } from "./ceb_bible_words_score.mjs";
import { list_sort_property } from "./list_sort_property.mjs";
import { list_take } from "./list_take.mjs";
export async function ceb_bible_words_top(count) {
  let ceb_scores = await ceb_bible_words_score();
  list_sort_property(ceb_scores, "score");
  let t = list_take(words, count);
  return t;
}
