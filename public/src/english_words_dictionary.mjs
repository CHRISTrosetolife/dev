import { object_property_exists } from "./object_property_exists.mjs";
import { list_filter } from "./list_filter.mjs";
import { json_from } from "./json_from.mjs";
import { http_cache } from "./http_cache.mjs";
import { english_words } from "./english_words.mjs";
export async function english_words_dictionary() {
  let filtered = await english_words();
  let dictionary_json = await http_cache(
    "https://raw.githubusercontent.com/matthewreagan/WebstersEnglishDictionary/refs/heads/master/dictionary_compact.json",
  );
  let dictionary = json_from(dictionary_json);
  let filtered2 = list_filter(filtered, (f) =>
    object_property_exists(dictionary, f),
  );
  return filtered2;
}
