import { bible_words_definitions_all } from "./bible_words_definitions_all.mjs";
import { function_cache } from "./function_cache.mjs";
export async function bible_words_definitions_all_cache(language) {
  return await function_cache(bible_words_definitions_all, [language]);
}
