import { exit } from "./exit.mjs";
import { promise_all } from "./promise_all.mjs";
import { log } from "./log.mjs";
import { list_map } from "./list_map.mjs";
import { list_chunk } from "./list_chunk.mjs";
import { each_async } from "./each_async.mjs";
import { ceb_bible_words_definitions_all_cache } from "./ceb_bible_words_definitions_all_cache.mjs";
export async function ceb_audio_download() {
  let from = "ceb";
  let words = await ceb_bible_words_definitions_all_cache();
  await each_async(list_chunk(words, 20), async (chunk) => {
    let mapped = list_map(chunk, async (w) => {
      log({
        w,
      });
      let word = w;
    });
    await promise_all(mapped);
    log("chunk finished");
    exit();
  });
}
