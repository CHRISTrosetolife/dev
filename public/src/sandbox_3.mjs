import { ceb_definition } from "./ceb_definition.mjs";
import { list_get } from "./list_get.mjs";
import { log } from "./log.mjs";
import { each_range } from "./each_range.mjs";
import { ceb_bible_words_count_cache_new } from "./ceb_bible_words_count_cache_new.mjs";
export async function sandbox_3() {
  let words = await ceb_bible_words_count_cache_new();
  let count = 500;
  each_range(count, async (i) => {
    let w = list_get(words, i);
    let { word } = w;
    let d = await ceb_definition(word);
    log(i + 1 + ". " + d.word);
  });
}
