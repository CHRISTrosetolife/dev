import { function_cache_refresh_args_command_line } from "./function_cache_refresh_args_command_line.mjs";
import { app_language_2_upload } from "./app_language_2_upload.mjs";
import { app_language_upload } from "./app_language_upload.mjs";
import { fn_name } from "./fn_name.mjs";
export async function ceb_definitions_change() {
  await function_cache_refresh_args_command_line(
    fn_name("bible_words_definitions_all"),
    "ceb",
  );
  await function_cache_refresh_args_command_line(
    fn_name("bible_words_definitions_atoms"),
    "ceb",
  );
  if (false) {
    await app_language_upload("ceb");
  }
  await app_language_2_upload("ceb");
}
