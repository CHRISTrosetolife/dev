import { ceb_bible_words_definitions_pairs_compute } from "./ceb_bible_words_definitions_pairs_compute.mjs";
import { function_cache_refresh } from "./function_cache_refresh.mjs";
export async function ceb_definitions_change() {
  await function_cache_refresh(ceb_bible_words_definitions_pairs_compute.name);
}
