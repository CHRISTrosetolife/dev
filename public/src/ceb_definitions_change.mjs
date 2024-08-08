import { ceb_bible_words_definitions_all } from "./ceb_bible_words_definitions_all.mjs";
import { app_ceb_upload } from "./app_ceb_upload.mjs";
import { ceb_bible_words_definitions_pairs_compute } from "./ceb_bible_words_definitions_pairs_compute.mjs";
import { function_cache_refresh } from "./function_cache_refresh.mjs";
export async function ceb_definitions_change() {
  let fns = [
    ceb_bible_words_definitions_all,
    ceb_bible_words_definitions_pairs_compute,
  ];$ea
  await function_cache_refresh(ceb_bible_words_definitions_pairs_compute.name);
  await app_ceb_upload();
}
