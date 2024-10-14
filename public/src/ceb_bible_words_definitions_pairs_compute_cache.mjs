import { bible_words_definitions_pairs_compute } from "./bible_words_definitions_pairs_compute.mjs";
import { function_cache } from "./function_cache.mjs";
export async function ceb_bible_words_definitions_pairs_compute_cache() {
  return await function_cache(bible_words_definitions_pairs_compute, []);
}
