import { list_difference_lower } from "./list_difference_lower.mjs";
import { list_first } from "./list_first.mjs";
import { string_split_tab } from "./string_split_tab.mjs";
import { list_map } from "./list_map.mjs";
import { http_cache_split_trim } from "./http_cache_split_trim.mjs";
import { curse_words } from "./curse_words.mjs";
export async function english_words() {
  let c = await curse_words();
  let trimmed = await http_cache_split_trim(
    "https://norvig.com/ngrams/count_1w.txt",
  );
  let split = list_map(trimmed, string_split_tab);
  let firsts = list_map(split, list_first);
  let filtered = list_difference_lower(firsts, c);
  return filtered;
}
