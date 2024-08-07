import { each_async } from "./each_async.mjs";
import { string_filter } from "./string_filter.mjs";
import { keyboard_greek } from "./keyboard_greek.mjs";
import { date_string_iso_file } from "./date_string_iso_file.mjs";
import { string_symbols_multiple } from "./string_symbols_multiple.mjs";
import { audio_upload } from "./audio_upload.mjs";
import { string_case_lower } from "./string_case_lower.mjs";
import { list_map } from "./list_map.mjs";
import { bible_interlinear_words_greek } from "./bible_interlinear_words_greek.mjs";
import { list_take } from "./list_take.mjs";
import { list_first } from "./list_first.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { string_includes } from "./string_includes.mjs";
export async function bible_interlinear_words_greek_audio_upload() {
  let alphabet = keyboard_greek();
  let language_code = "el";
  let words = await bible_interlinear_words_greek();
  let mapped = list_map(words, string_case_lower);
  let lambda = (character) => string_includes(alphabet, character);
  let m2 = list_map(mapped, (word) => string_filter(word, lambda));
  await each_async(list, async (item) => {});
  await file_overwrite(
    date_string_iso_file() + ".txt",
    string_symbols_multiple(m2),
  );
  return;
  return list_take(m2, 10);
  await audio_upload(language_code, list_first(mapped));
}
