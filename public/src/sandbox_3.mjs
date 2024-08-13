import { ceb_bible_words_definitions_map_cache } from "./ceb_bible_words_definitions_map_cache.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_adder } from "./list_adder.mjs";
import { ceb_bible_words_score } from "./ceb_bible_words_score.mjs";
import { each } from "./each.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_take } from "./list_take.mjs";
import { ceb_bible_words_count_cache_new } from "./ceb_bible_words_count_cache_new.mjs";
import { list_includes } from "./list_includes.mjs";
export async function sandbox_3() {
  let count = 500;
  let wcs = await ceb_bible_words_count_cache_new();
  let taken = list_take(wcs, count);
  let words = list_map_property(taken, "word");
  let map = await ceb_bible_words_definitions_map_cache();
  let scored = await ceb_bible_words_score();
  let result = list_adder((la) => {
    each(scored, (s) => {
      let { word } = s;
      let choices = [word];
      if (list_includes(words, s.word)) {
        la(word);
      }
    });
  });
  return list_join_newline(result);
}
