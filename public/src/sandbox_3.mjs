import { list_pairs_to_lookup } from "./list_pairs_to_lookup.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { number_max_list } from "./number_max_list.mjs";
import { list_index } from "./list_index.mjs";
import { each_log_async } from "./each_log_async.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { list_filter } from "./list_filter.mjs";
import { string_split_tab } from "./string_split_tab.mjs";
import { list_difference_lower } from "./list_difference_lower.mjs";
import { http_cache_split_trim } from "./http_cache_split_trim.mjs";
import { list_first } from "./list_first.mjs";
import { list_map } from "./list_map.mjs";
import { http_cache } from "./http_cache.mjs";
import { ceb_defintion_en } from "./ceb_defintion_en.mjs";
import { curse_words } from "./curse_words.mjs";
import { json_from } from "./json_from.mjs";
export async function sandbox_3() {
  let text2 = await http_cache(
    "https://raw.githubusercontent.com/first20hours/google-10000-english/refs/heads/master/google-10000-english-usa.txt",
  );
  let c = await curse_words();
  let trimmed = await http_cache_split_trim(
    "https://norvig.com/ngrams/count_1w.txt",
  );
  let dictionary_json = await http_cache(
    "https://raw.githubusercontent.com/matthewreagan/WebstersEnglishDictionary/refs/heads/master/dictionary_compact.json",
  );
  let dictionary = json_from(dictionary_json);
  let split = list_map(trimmed, string_split_tab);
  let firsts = list_map(split, list_first);
  let filtered = list_difference_lower(firsts, c);
  let filtered2 = list_filter(filtered, (f) =>
    object_property_exists(dictionary, f),
  );
  let pairs = list_map_index(filtered2, (f, index) => [f, index]);
  let lookup = list_pairs_to_lookup(pairs);
  let mapped = list_map(filtered2, (f) => list_index(filtered, f));
  return number_max_list(mapped);
  await each_log_async(filtered2, async (t) => {
    await ceb_defintion_en(t);
  });
}
