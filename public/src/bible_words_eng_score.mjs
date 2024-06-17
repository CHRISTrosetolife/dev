import { list_last } from "./list_last.mjs";
import { bible_words_score_generic } from "./bible_words_score_generic.mjs";
import { bible_words_eng_count_cache } from "./bible_words_eng_count_cache.mjs";
export async function bible_words_eng_score() {
  let w = await bible_words_eng_count_cache();
  bible_words_score_generic(w);
  return list_last(w);
}
