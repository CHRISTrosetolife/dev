import { bible_words_definitions_map } from "./bible_words_definitions_map.mjs";
import { function_cache } from "./function_cache.mjs";
export async function bible_words_definitions_map_cache(language) {
  return await function_cache(bible_words_definitions_map, [language]);
}
