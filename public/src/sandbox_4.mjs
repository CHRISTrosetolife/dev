import { english_words_dictionary } from "./english_words_dictionary.mjs";
import { each_log_async } from "./each_log_async.mjs";
import { http_cache } from "./http_cache.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export async function sandbox_4() {
  let filtered2 = await english_words_dictionary();
  await each_log_async(filtered2, async (word) => {
    let url = string_combine_multiple([
      "https://www.bohol.ph/diksyunaryo.php?sw=",
      word,
      "&lang=English",
    ]);
    let result = await http_cache(url);
  });
}
