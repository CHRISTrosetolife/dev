import { list_size_2 } from "./list_size_2.mjs";
import { assert } from "./assert.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
export function ceb_bible_word_pair_score(
  pair,
  words_ceb_scores,
  words_eng_scores,
) {
  assert(list_size_2, [pair]);
  let f = list_first(pair);
  let s = list_second(pair);
}
