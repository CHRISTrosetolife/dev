import { ceb_bible_words_score } from "./ceb_bible_words_score.mjs";
import { each } from "./each.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_take } from "./list_take.mjs";
import { promise_all } from "./promise_all.mjs";
import { list_map } from "./list_map.mjs";
import { ceb_definition } from "./ceb_definition.mjs";
import { log } from "./log.mjs";
import { ceb_bible_words_count_cache_new } from "./ceb_bible_words_count_cache_new.mjs";
export async function sandbox_3() {
  let count = 1000;
  let wcs = await ceb_bible_words_count_cache_new();
  let taken = list_take(wcs, count);
  let words = list_map_property(taken, "word");
  let scored = await ceb_bible_words_score();
  let mapped = list_map(words, ceb_definition);
  let unawaited = await promise_all(mapped);
  let m2 = list_map_property(unawaited, "word");
  let us = list_unique(m2);
  each(us, log);
}
