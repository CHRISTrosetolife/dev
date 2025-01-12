import { app_language_upload } from "./app_language_upload.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_cache_refresh } from "./function_cache_refresh.mjs";
export async function ceb_definitions_change() {
  await function_cache_refresh(fn_name("ceb_bible_words_definitions_all"));
  await function_cache_refresh(fn_name("ceb_bible_words_definitions_atoms"));
  await app_language_upload("ceb");
}
