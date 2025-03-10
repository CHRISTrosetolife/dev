import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { defintion_en_ur } from "./defintion_en_ur.mjs";
import { each_log_async } from "./each_log_async.mjs";
import { english_words_dictionary_take_soft } from "./english_words_dictionary_take_soft.mjs";
import { audio_upload } from "./audio_upload.mjs";
export async function sandbox_5() {
  let words = await english_words_dictionary_take_soft(1000);
  await each_log_async(words, async function (w) {
    let definitions = await defintion_en_ur(w);
    if (list_empty_not_is(definitions)) {
      await audio_upload("en", w);
    }
  });
}
