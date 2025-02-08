import { english_words } from "./english_words.mjs";
import { each_log_async } from "./each_log_async.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { list_filter } from "./list_filter.mjs";
import { http_cache } from "./http_cache.mjs";
import { ceb_defintion_en } from "./ceb_defintion_en.mjs";
import { json_from } from "./json_from.mjs";
export async function sandbox_3() {
  let text2 = await http_cache(
    "https://raw.githubusercontent.com/first20hours/google-10000-english/refs/heads/master/google-10000-english-usa.txt",
  );
  let filtered = await english_words();
  let dictionary_json = await http_cache(
    "https://raw.githubusercontent.com/matthewreagan/WebstersEnglishDictionary/refs/heads/master/dictionary_compact.json",
  );
  let dictionary = json_from(dictionary_json);
  let filtered2 = list_filter(filtered, (f) =>
    object_property_exists(dictionary, f),
  );
  await each_log_async(filtered, async (t) => {
    await ceb_defintion_en(t);
  });
}
