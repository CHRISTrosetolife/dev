import { bible_interlinear_definition } from "./bible_interlinear_definition.mjs";
import { bible_interlinear_strongs_cache } from "./bible_interlinear_strongs_cache.mjs";
import { list_last } from "./list_last.mjs";
import { log } from "./log.mjs";
import { each_async } from "./each_async.mjs";
import { bible_interlinear_strongs_greek } from "./bible_interlinear_strongs_greek.mjs";
import { list_first } from "./list_first.mjs";
export async function bible_words_greek_download() {
  let strongs = await bible_interlinear_strongs_greek();
  let language = "greek";
  let strong = list_first(strongs);
  let next_text = await bible_interlinear_definition(language, strong);
  log(next_text);
  return;
  await each_async(strongs, async (strong) => {
    log({
      last: list_last(strongs),
      current: strong,
    });
    await bible_interlinear_strongs_cache(language, strong);
  });
}
