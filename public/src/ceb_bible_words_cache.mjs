import { ceb_bible_words } from "./ceb_bible_words.mjs";
import { function_cache } from "./function_cache.mjs";
export async function ceb_bible_words_cache(args) {
  return await function_cache(ceb_bible_words, [args]);
}
