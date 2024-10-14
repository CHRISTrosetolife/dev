import { ceb_bible_words_definitions_all } from "./ceb_bible_words_definitions_all.mjs";
import { function_cache } from "./function_cache.mjs";
export async function bible_words_definitions_all_cache(language) {
  return await function_cache(ceb_bible_words_definitions_all, [language]);
}
