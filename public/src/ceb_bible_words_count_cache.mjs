import { bible_words_language_count } from "./bible_words_language_count.mjs";
import { function_cache } from "./function_cache.mjs";
export async function ceb_bible_words_count_cache(args) {
  return await function_cache(bible_words_language_count, [args]);
}
