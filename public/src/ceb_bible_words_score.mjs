import { ceb_bible_words_definitions_map_cache } from "./ceb_bible_words_definitions_map_cache.mjs";
import { ceb_bible_words_definitions_all_cache } from "./ceb_bible_words_definitions_all_cache.mjs";
import { each } from "./each.mjs";
import { list_summer } from "./list_summer.mjs";
import { ceb_bible_words_count_cache } from "./ceb_bible_words_count_cache.mjs";
import { bible_words_eng_cache } from "./bible_words_eng_cache.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { list_concat } from "./list_concat.mjs";
export async function ceb_bible_words_score() {
  let lookup = {};
  let words_ceb = await ceb_bible_words_count_cache();
  each(words_ceb, (d) => object_property_set(lookup, d.word, d.count));
  let ceb_total = list_summer((s) =>
    each(list_map_property(words_ceb, "count"), s),
  );
  let map = await ceb_bible_words_definitions_map_cache();
  let definitions = await ceb_bible_words_definitions_all_cache();
  each(definitions, (d) => {
    let { word } = w;
    let choices = [word];
    if (object_property_exists(map, word)) {
      choices = list_concat(choices, object_property_get(map, word));
    }
    object_property_get(lookup, w.word);
  });
  return words_ceb;
  let words_eng = await bible_words_eng_cache();
  let eng_total = list_summer(list_map_property(words_eng, "count"));
}
