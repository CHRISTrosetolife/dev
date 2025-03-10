import { html_parse_text } from "./html_parse_text.mjs";
import { log } from "./log.mjs";
import { html_cache_parse } from "./html_cache_parse.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { english_words_dictionary } from "./english_words_dictionary.mjs";
import { each_log_async } from "./each_log_async.mjs";
export async function sandbox_4() {
  let word = "system";
  let url = string_combine_multiple([
    "https://www.urduword.com/search.php?English=",
    word,
  ]);
  let result = await html_cache_parse(url);
  log(html_parse_text(result));
  return;
  let filtered2 = await english_words_dictionary();
  await each_log_async(filtered2, function () {});
}
