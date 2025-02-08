import { each_log_async } from "./each_log_async.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { list_filter } from "./list_filter.mjs";
import { json_from } from "./json_from.mjs";
import { english_words } from "./english_words.mjs";
import { http_cache } from "./http_cache.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export async function sandbox_4() {
  let filtered = await english_words();
  let dictionary_json = await http_cache(
    "https://raw.githubusercontent.com/matthewreagan/WebstersEnglishDictionary/refs/heads/master/dictionary_compact.json",
  );
  let dictionary = json_from(dictionary_json);
  let filtered2 = list_filter(filtered, (f) =>
    object_property_exists(dictionary, f),
  );
  await each_log_async(filtered2, async (word) => {
    let url = string_combine_multiple([
      "https://www.bohol.ph/diksyunaryo.php?sw=",
      word,
      "&lang=English",
    ]);
    let contents = await http_cache(url);
  });
}
