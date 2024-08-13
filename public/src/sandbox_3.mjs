import { list_take } from "./list_take.mjs";
import { promise_all } from "./promise_all.mjs";
import { list_map } from "./list_map.mjs";
import { each_range_async } from "./each_range_async.mjs";
import { ceb_definition } from "./ceb_definition.mjs";
import { list_get } from "./list_get.mjs";
import { log } from "./log.mjs";
import { ceb_bible_words_count_cache_new } from "./ceb_bible_words_count_cache_new.mjs";
export async function sandbox_3() {
  let words = await ceb_bible_words_count_cache_new();
  let count = 500;
  let taken = list_take(words, count);
  let mapped = list_map(words, ceb_definition);
  let unawaited = await promise_all(mapped);
  await each_range_async(count, async (i) => {
    let w = list_get(words, i);
    let { word } = w;
    let d = await ceb_definition(word);
    log(i + 1 + ". " + d.word);
  });
}
