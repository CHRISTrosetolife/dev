import { exit } from "./exit.mjs";
import { log } from "./log.mjs";
import { bible_interlinear_strongs_cache } from "./bible_interlinear_strongs_cache.mjs";
import { each_log_async } from "./each_log_async.mjs";
import { function_run_plugin_string } from "./function_run_plugin_string.mjs";
export async function bible_words_download(language) {
  let strongs = await function_run_plugin_string(
    "bible_interlinear_strongs",
    language,
  );
  await each_log_async(strongs, async (strong) => {
    let html = await bible_interlinear_strongs_cache(language, strong);
    log({
      html,
    });
    exit();
  });
}
