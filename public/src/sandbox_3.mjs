import { each_index_async } from "./each_index_async.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_take } from "./list_take.mjs";
import { promise_all } from "./promise_all.mjs";
import { list_map } from "./list_map.mjs";
import { ceb_definition } from "./ceb_definition.mjs";
import { list_get } from "./list_get.mjs";
import { log } from "./log.mjs";
import { ceb_bible_words_count_cache_new } from "./ceb_bible_words_count_cache_new.mjs";
export async function sandbox_3() {
  let words = await ceb_bible_words_count_cache_new();
  let count = 500;
  let taken = list_take(words, count);
  let m3 = list_map_property(taken, "word");
  let mapped = list_map(m3, ceb_definition);
  let unawaited = await promise_all(mapped);
  let m2 = list_map_property(unawaited, "word");
  await each_index_async(unawaited, async (u) => {
    let w = list_get(words, i);
    let { word } = w;
    let d = await ceb_definition(word);
    log(i + 1 + ". " + d.word);
  });
}
