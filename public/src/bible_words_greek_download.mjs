import { bible_interlinear_strongs_cache } from "./bible_interlinear_strongs_cache.mjs";
import { list_last } from "./list_last.mjs";
import { log } from "./log.mjs";
import { each_async } from "./each_async.mjs";
import { bible_interlinear_strongs_greek } from "./bible_interlinear_strongs_greek.mjs";
export async function bible_words_greek_download() {
  let language = "greek";
  let strongs = await bible_interlinear_strongs_greek();
  await each_async(strongs, async (strong) => {
    log({
      last: list_last(strongs),
      current: strong,
    });
    await bible_interlinear_strongs_cache(language, strong);
  });
}
