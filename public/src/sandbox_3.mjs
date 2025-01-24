import { list_take } from "./list_take.mjs";
import { string_split_tab } from "./string_split_tab.mjs";
import { list_difference_lower } from "./list_difference_lower.mjs";
import { http_cache_split_trim } from "./http_cache_split_trim.mjs";
import { log } from "./log.mjs";
import { list_first } from "./list_first.mjs";
import { list_map } from "./list_map.mjs";
import { http_cache } from "./http_cache.mjs";
import { ceb_defintion_en } from "./ceb_defintion_en.mjs";
import { each_async } from "./each_async.mjs";
import { curse_words } from "./curse_words.mjs";
export async function sandbox_3() {
  let text2 = await http_cache(
    "https://raw.githubusercontent.com/first20hours/google-10000-english/refs/heads/master/google-10000-english-usa.txt",
  );
  let c = await curse_words();
  let trimmed = await http_cache_split_trim(
    "https://norvig.com/ngrams/count_1w.txt",
  );
  let split = list_map(trimmed, string_split_tab);
  let firsts = list_map(split, list_first);
  let filtered = list_difference_lower(firsts, c);
  let take = list_take(filtered, 100000);
  log({
    filtered,
  });
  return;
  await each_async(firsts, async (t) => {
    await ceb_defintion_en(t);
  });
}
