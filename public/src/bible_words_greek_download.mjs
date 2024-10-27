import { each_log_async } from "./each_log_async.mjs";
import { function_run_plugin_string } from "./function_run_plugin_string.mjs";
import { bible_interlinear_strongs_cache } from "./bible_interlinear_strongs_cache.mjs";
export async function bible_words_greek_download() {
  let language = "greek";
  let strongs = await function_run_plugin_string(
    "bible_interlinear_strongs",
    language,
  );
  await each_log_async(strongs, async (strong) => {
    await bible_interlinear_strongs_cache(language, strong);
  });
}
