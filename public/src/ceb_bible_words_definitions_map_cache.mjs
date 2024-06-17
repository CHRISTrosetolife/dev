import { ceb_bible_words_definitions_map } from "./ceb_bible_words_definitions_map.mjs";
import { function_cache } from "./function_cache.mjs";
export async function ceb_bible_words_definitions_map_cache() {
  await function_cache(ceb_bible_words_definitions_map, []);
}
