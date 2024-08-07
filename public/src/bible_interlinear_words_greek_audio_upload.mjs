import { log } from "./log.mjs";
import { promise_all } from "./promise_all.mjs";
import { list_chunk } from "./list_chunk.mjs";
import { each_async } from "./each_async.mjs";
import { string_filter } from "./string_filter.mjs";
import { keyboard_greek } from "./keyboard_greek.mjs";
import { audio_upload } from "./audio_upload.mjs";
import { string_case_lower } from "./string_case_lower.mjs";
import { list_map } from "./list_map.mjs";
import { bible_interlinear_words_greek } from "./bible_interlinear_words_greek.mjs";
import { string_includes } from "./string_includes.mjs";
export async function bible_interlinear_words_greek_audio_upload() {
  let alphabet = keyboard_greek();
  let language_code = "el";
  let words = await bible_interlinear_words_greek();
  let m1 = list_map(words, string_case_lower);
  let lambda = (character) => string_includes(alphabet, character);
  let m2 = list_map(m1, (word) => string_filter(word, lambda));
  let chunks = list_chunk(m2, 20);
  await each_async(chunks, async (chunk) => {
    let m3 = list_map(chunk, async (word) => {
      await audio_upload(language_code, word);
    });
    await promise_all(mapped);
    log({
      chunks_size,
      index,
    });
  });
}
