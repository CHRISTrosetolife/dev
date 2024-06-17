import { summation } from "./summation.mjs";
import { bible_words_score_generic } from "./bible_words_score_generic.mjs";
import { ceb_bible_words_definitions_map_cache } from "./ceb_bible_words_definitions_map_cache.mjs";
import { ceb_bible_words_definitions_all_cache } from "./ceb_bible_words_definitions_all_cache.mjs";
import { each } from "./each.mjs";
import { ceb_bible_words_count_cache } from "./ceb_bible_words_count_cache.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { list_concat } from "./list_concat.mjs";
import { object_merge } from "./object_merge.mjs";
export async function ceb_bible_words_score() {
  let words_ceb = await ceb_bible_words_count_cache();
  let lookup = {};
  each(words_ceb, (d) => object_property_set(lookup, d.word, d.count));
  let map = await ceb_bible_words_definitions_map_cache();
  let definitions = await ceb_bible_words_definitions_all_cache();
  each(definitions, (d) => {
    let { word } = d;
    let choices = [word];
    if (object_property_exists(map, word)) {
      choices = list_concat(choices, object_property_get(map, word));
    }
    let count = summation((s) => {
      each(choices, (choice) => {
        if (object_property_exists(lookup, choice)) {
          let choice_count = object_property_get(lookup, choice);
          s(choice_count);
        }
      });
    });
    object_merge(d, {
      count,
    });
  });
  bible_words_score_generic(definitions);
  return definitions;
}
