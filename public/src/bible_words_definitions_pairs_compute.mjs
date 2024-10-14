import { bible_words_definitions_pairs_compute_inner } from "./bible_words_definitions_pairs_compute_inner.mjs";
import { bible_words_score_language } from "./bible_words_score_language.mjs";
export async function bible_words_definitions_pairs_compute(language) {
  let scores_language = await bible_words_score_language(language);
  return await bible_words_definitions_pairs_compute_inner(scores_language);
}
