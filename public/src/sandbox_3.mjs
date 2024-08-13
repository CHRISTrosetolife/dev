import { list_any } from "./list_any.mjs";
import { ceb_bible_words_definitions_map_choices } from "./ceb_bible_words_definitions_map_choices.mjs";
import { ceb_bible_words_definitions_map_cache } from "./ceb_bible_words_definitions_map_cache.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_adder } from "./list_adder.mjs";
import { ceb_bible_words_score } from "./ceb_bible_words_score.mjs";
import { each } from "./each.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_take } from "./list_take.mjs";
import { ceb_bible_words_count_cache_new } from "./ceb_bible_words_count_cache_new.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_size } from "./list_size.mjs";
export async function sandbox_3() {
  let count = 500;
  let wcs = await ceb_bible_words_count_cache_new();
  let taken = list_take(wcs, count);
  let words = list_map_property(taken, "word");
  let map = await ceb_bible_words_definitions_map_cache();
  let scored = await ceb_bible_words_score();
  let result = list_adder((la) => {
    each(scored, (d) => {
      let { word } = d;
      let choices = ceb_bible_words_definitions_map_choices(map, d);
      if (list_any(choices, (c) => list_includes(words, c))) {
        la(word);
      }
    });
  });
  $, list_size(result);
  return list_join_newline(result);
}
