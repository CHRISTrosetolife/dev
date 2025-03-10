import { english_words_dictionary } from "./english_words_dictionary.mjs";
import { each_log_async } from "./each_log_async.mjs";
export async function sandbox_4() {
  let filtered2 = await english_words_dictionary();
  await each_log_async(filtered2, function () {});
}
