import { ceb_bible_words_definitions_map_cache } from "./ceb_bible_words_definitions_map_cache.mjs";
import { ceb_bible_words_definitions_all_cache } from "./ceb_bible_words_definitions_all_cache.mjs";
import { each } from "./each.mjs";
import { list_summer } from "./list_summer.mjs";
import { ceb_bible_words_count_cache } from "./ceb_bible_words_count_cache.mjs";
import { bible_words_eng_cache } from "./bible_words_eng_cache.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { object_property_get } from "./object_property_get.mjs";
export async function ceb_bible_words_score() {
  let words_ceb = await ceb_bible_words_count_cache();
  let ceb_total = list_summer((s) =>
    each(list_map_property(words_ceb, "count"), s),
  );
  let map = await ceb_bible_words_definitions_map_cache();
  let definitions = await ceb_bible_words_definitions_all_cache();
  let lookup = {};
  each(definitions, (d) => object_property_set(lookup, d.word, d.definitions));
  each(words_ceb, (w) => {
    object_property_get(lookup, w.word);
  });
  return words_ceb;
  let words_eng = await bible_words_eng_cache();
  let eng_total = list_summer(list_map_property(words_eng, "count"));
}
