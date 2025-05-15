import { log } from "./log.mjs";
import { defintion_en_ur } from "./defintion_en_ur.mjs";
import { each_log_async } from "./each_log_async.mjs";
import { english_words_dictionary } from "./english_words_dictionary.mjs";
export async function app_en_ur_download() {
  let words = await english_words_dictionary();
  await each_log_async(words, async function (word) {
    let definitions = await defintion_en_ur(word);
    log({
      definitions,
    });
  });
}
