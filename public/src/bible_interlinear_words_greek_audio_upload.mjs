import { string_symbols_multiple } from "./string_symbols_multiple.mjs";
import { audio_upload } from "./audio_upload.mjs";
import { string_case_lower } from "./string_case_lower.mjs";
import { list_map } from "./list_map.mjs";
import { bible_interlinear_words_greek } from "./bible_interlinear_words_greek.mjs";
import { list_take } from "./list_take.mjs";
import { list_first } from "./list_first.mjs";
export async function bible_interlinear_words_greek_audio_upload() {
  let language_code = "el";
  let words = await bible_interlinear_words_greek();
  let mapped = list_map(words, string_case_lower);
  return string_symbols_multiple(words);
  return;
  return list_first(mapped);
  await audio_upload(language_code, list_first(mapped));
  return list_take(mapped, 10);
}
