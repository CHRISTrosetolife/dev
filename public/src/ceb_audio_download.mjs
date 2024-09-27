import { list_wait } from "./list_wait.mjs";
import { each_index_async } from "./each_index_async.mjs";
import { list_size } from "./list_size.mjs";
import { audio_upload } from "./audio_upload.mjs";
import { log } from "./log.mjs";
import { list_map } from "./list_map.mjs";
import { list_chunk } from "./list_chunk.mjs";
import { each_async } from "./each_async.mjs";
import { ceb_bible_words_definitions_all_cache } from "./ceb_bible_words_definitions_all_cache.mjs";
export async function ceb_audio_download() {
  let from = "ceb";
  let to = "en";
  let words = await ceb_bible_words_definitions_all_cache();
  let chunks = list_chunk(words, 20);
  let chunks_size = list_size(chunks);
  await each_index_async(chunks, async (chunk, index) => {
    let mapped = list_map(chunk, async (w) => {
      let { word, definitions } = w;
      await audio_upload(from, word);
      await each_async(definitions, async (definition) => {
        await audio_upload(to, definition);
      });
    });
    await list_wait(mapped);
    log({
      chunks_size,
      index,
    });
  });
}
