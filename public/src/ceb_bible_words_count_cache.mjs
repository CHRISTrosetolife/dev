import { ceb_bible_words_count } from "./ceb_bible_words_count.mjs";
import { function_cache } from "./function_cache.mjs";
export async function ceb_bible_words_count_cache(args) {
  return await function_cache(ceb_bible_words_count, [args]);
}
