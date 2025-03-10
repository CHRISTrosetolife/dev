import { list_first } from "./list_first.mjs";
import { english_words_dictionary } from "./english_words_dictionary.mjs";
import { audio_upload } from "./audio_upload.mjs";
export async function sandbox_5() {
  let words = await english_words_dictionary();
  let w = list_first(words);
  let v = await audio_upload("en", w);
  return v;
}
