import { list_chunk } from "./list_chunk.mjs";
import { each_async } from "./each_async.mjs";
import { string_filter } from "./string_filter.mjs";
import { keyboard_greek } from "./keyboard_greek.mjs";
import { audio_upload } from "./audio_upload.mjs";
import { string_case_lower } from "./string_case_lower.mjs";
import { list_map } from "./list_map.mjs";
import { bible_interlinear_words_greek } from "./bible_interlinear_words_greek.mjs";
import { list_take } from "./list_take.mjs";
import { string_includes } from "./string_includes.mjs";
export async function bible_interlinear_words_greek_audio_upload() {
  let alphabet = keyboard_greek();
  let language_code = "el";
  let words = await bible_interlinear_words_greek();
  let mapped = list_map(words, string_case_lower);
  let lambda = (character) => string_includes(alphabet, character);
  let m2 = list_map(mapped, (word) => string_filter(word, lambda));
  let chunks = list_chunk(m2, 20);
  m2 = list_take(m2, 1);
  await each_async(m2, async (word) => {
    await audio_upload(language_code, word);
  });
}
