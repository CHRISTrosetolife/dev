import { log } from "./log.mjs";
import { bible_search_lookup } from "./bible_search_lookup.mjs";
import { function_cache } from "./function_cache.mjs";
export async function bible_search_lookup_cache() {
  let c = await function_cache(bible_search_lookup, []);
  return c;
}
