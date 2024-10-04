import { fn_name } from "./fn_name.mjs";
import { app_ceb_upload } from "./app_ceb_upload.mjs";
import { function_cache_refresh } from "./function_cache_refresh.mjs";
export async function ceb_definitions_change() {
  await function_cache_refresh(fn_name("ceb_bible_words_definitions_all"));
  await function_cache_refresh(fn_name("ceb_bible_words_definitions_atoms"));
  await app_ceb_upload();
}
