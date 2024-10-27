import { function_run_plugin_string } from "./function_run_plugin_string.mjs";
import { bible_interlinear_strongs_cache } from "./bible_interlinear_strongs_cache.mjs";
import { list_last } from "./list_last.mjs";
import { log } from "./log.mjs";
import { each_async } from "./each_async.mjs";
export async function bible_words_greek_download() {
  let language = "greek";
  let strongs = await function_run_plugin_string(
    "bible_interlinear_strongs",
    language,
  );
  await each_async(strongs, async (strong) => {
    log({
      last: list_last(strongs),
      current: strong,
    });
    await bible_interlinear_strongs_cache(language, strong);
  });
}
