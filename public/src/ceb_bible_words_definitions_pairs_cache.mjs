import { ceb_bible_words_definitions_pairs } from "./ceb_bible_words_definitions_pairs.mjs";
import { function_cache } from "./function_cache.mjs";
export async function ceb_bible_words_definitions_pairs_cache() {
  return await function_cache(ceb_bible_words_definitions_pairs, []);
}
