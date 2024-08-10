import { bible_interlinear_words_audio_upload_generic } from "./bible_interlinear_words_audio_upload_generic.mjs";
import { promise_all } from "./promise_all.mjs";
import { audio_upload } from "./audio_upload.mjs";
import { list_map } from "./list_map.mjs";
import { each_log_async } from "./each_log_async.mjs";
export async function repeat(lambda) {
  try {
    await each_log_async(chunks, async (chunk) => {
      let m3 = list_map(chunk, async (word) => {
        await audio_upload(language_code, word);
      });
      await promise_all(m3);
    });
  } catch (e) {
    await bible_interlinear_words_audio_upload_generic(
      words,
      alphabet,
      language_code,
    );
  }
}
