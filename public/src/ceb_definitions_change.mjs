import { each_async } from "./each_async.mjs";
import { ceb_bible_words_definitions_all } from "./ceb_bible_words_definitions_all.mjs";
import { app_ceb_upload } from "./app_ceb_upload.mjs";
import { ceb_bible_words_definitions_pairs_compute } from "./ceb_bible_words_definitions_pairs_compute.mjs";
import { function_cache_refresh } from "./function_cache_refresh.mjs";
export async function ceb_definitions_change() {
  let fns = [
    ceb_bible_words_definitions_all,
    ceb_bible_words_definitions_pairs_compute,
  ];
  await each_async(fns, async (fn) => {
    await function_cache_refresh(fn.name);
  });
  await app_ceb_upload();
}
