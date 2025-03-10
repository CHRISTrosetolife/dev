import { defintion_en_ur } from "./defintion_en_ur.mjs";
import { each_log_async } from "./each_log_async.mjs";
import { english_words_dictionary_take_soft } from "./english_words_dictionary_take_soft.mjs";
import { list_first } from "./list_first.mjs";
import { audio_upload } from "./audio_upload.mjs";
export async function sandbox_5() {
  let words = await english_words_dictionary_take_soft(1000);
  let w = list_first(words);
  let v = await audio_upload("en", w);
  await each_log_async(words, async function (word) {
    let definitions = await defintion_en_ur(word);
    if (false) {
    }
  });
  return v;
}
