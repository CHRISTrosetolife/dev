import { ceb_bible_words_score } from "./ceb_bible_words_score.mjs";
import { each } from "./each.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_take } from "./list_take.mjs";
import { log } from "./log.mjs";
import { ceb_bible_words_count_cache_new } from "./ceb_bible_words_count_cache_new.mjs";
import { list_includes } from "./list_includes.mjs";
export async function sandbox_3() {
  let count = 1000;
  let wcs = await ceb_bible_words_count_cache_new();
  let taken = list_take(wcs, count);
  let words = list_map_property(taken, "word");
  let scored = await ceb_bible_words_score();
  each(scored, (s) => {
    let { word } = s;
    if (list_includes(words, s.word)) {
      log({
        word,
      });
    }
  });
}
