import { bible_interlinear_words_audio_upload_map } from "./bible_interlinear_words_audio_upload_map.mjs";
import { list_wait } from "./list_wait.mjs";
import { log } from "./log.mjs";
import { list_first } from "./list_first.mjs";
import { exit } from "./exit.mjs";
import { audio_upload } from "./audio_upload.mjs";
import { each_log_async } from "./each_log_async.mjs";
import { bible_interlinear_words } from "./bible_interlinear_words.mjs";
import { list_chunk } from "./list_chunk.mjs";
import { list_map } from "./list_map.mjs";
export async function bible_interlinear_words_audio_upload_generic(
  books_get,
  filter,
  language_code,
) {
  let words = await bible_interlinear_words(books_get);
  log(list_first(words));
  let m2 = bible_interlinear_words_audio_upload_map(words, filter);
  log(list_first(m2));
  await audio_upload(language_code, list_first(m2));
  exit();
  let chunks = list_chunk(m2, 20);
  await each_log_async(chunks, async (chunk) => {
    let m3 = list_map(chunk, async (word) => {
      await audio_upload(language_code, word);
    });
    await list_wait(m3);
  });
}
