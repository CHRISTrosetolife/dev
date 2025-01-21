import { app_language2_upload } from "./app_language2_upload.mjs";
import { function_cache_refresh_args } from "./function_cache_refresh_args.mjs";
import { app_language_upload } from "./app_language_upload.mjs";
import { fn_name } from "./fn_name.mjs";
export async function ceb_definitions_change() {
  await function_cache_refresh_args(
    fn_name("bible_words_definitions_all"),
    "ceb",
  );
  await function_cache_refresh_args(
    fn_name("bible_words_definitions_atoms"),
    "ceb",
  );
  if (false) {
    await app_language_upload("ceb");
  }
  await app_language2_upload("ceb");
}
