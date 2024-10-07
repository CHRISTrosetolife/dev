import { string_symbols_multiple } from "./string_symbols_multiple.mjs";
import { object_properties } from "./object_properties.mjs";
import { bible_search_index_cache } from "./bible_search_index_cache.mjs";
export async function bible_search_index_cache_symbols() {
  let i = await bible_search_index_cache();
  let properties = object_properties(i);
  let s = string_symbols_multiple(properties);
  return s;
}
