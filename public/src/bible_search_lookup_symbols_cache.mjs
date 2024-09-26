import { bible_search_lookup_symbols } from "./bible_search_lookup_symbols.mjs";
import { function_cache } from "./function_cache.mjs";
export async function bible_search_lookup_symbols_cache() {
  return await function_cache(bible_search_lookup_symbols, []);
}
