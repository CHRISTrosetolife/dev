import { bible_search_index } from "./bible_search_index.mjs";
import { function_cache } from "./function_cache.mjs";
export async function bible_search_index_cache() {
  return await function_cache(bible_search_index, []);
}
