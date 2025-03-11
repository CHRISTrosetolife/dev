import { ceb_definition_en } from "./ceb_definition_en.mjs";
import { english_words_dictionary } from "./english_words_dictionary.mjs";
import { each_log_async } from "./each_log_async.mjs";
import { http_cache } from "./http_cache.mjs";
export async function sandbox_3() {
  let text2 = await http_cache(
    "https://raw.githubusercontent.com/first20hours/google-10000-english/refs/heads/master/google-10000-english-usa.txt",
  );
  let filtered = await english_words_dictionary();
  await each_log_async(filtered, async function (t) {
    await ceb_definition_en(t);
  });
}
