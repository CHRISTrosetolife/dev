import { html_cache_parse } from "./html_cache_parse.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { english_words_dictionary } from "./english_words_dictionary.mjs";
import { each_log_async } from "./each_log_async.mjs";
export async function sandbox_4() {
  let url = string_combine_multiple([
    "https://www.bohol.ph/diksyunaryo.php?sw=",
    word,
    "&lang=",
    language_search,
  ]);
  let result = await html_cache_parse(url);
  let filtered2 = await english_words_dictionary();
  await each_log_async(filtered2, function () {});
}
