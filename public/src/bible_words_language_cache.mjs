import { bible_words_language } from "./bible_words_language.mjs";
import { function_cache } from "./function_cache.mjs";
export async function bible_words_language_cache(args) {
  return await function_cache(bible_words_language, [args]);
}
