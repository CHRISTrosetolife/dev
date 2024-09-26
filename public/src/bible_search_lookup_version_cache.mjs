import { bible_search_lookup_version } from "./bible_search_lookup_version.mjs";
import { function_cache } from "./function_cache.mjs";
export async function bible_search_lookup_version_cache(bible_folder) {
  return await function_cache(bible_search_lookup_version, [bible_folder]);
}
