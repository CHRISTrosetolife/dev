import { bible_words_score_generic } from "./bible_words_score_generic.mjs";
import { bible_words_eng_count_cache } from "./bible_words_eng_count_cache.mjs";
export function bible_words_eng_score() {
  let w = bible_words_eng_count_cache();
  bible_words_score_generic(definitions);
}
