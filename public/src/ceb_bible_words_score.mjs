import { exit } from "./exit.mjs";
import { log } from "./log.mjs";
import { ceb_bible_words_definitions_map_cache } from "./ceb_bible_words_definitions_map_cache.mjs";
import { ceb_bible_words_definitions_all_cache } from "./ceb_bible_words_definitions_all_cache.mjs";
import { each } from "./each.mjs";
import { ceb_bible_words_count_cache } from "./ceb_bible_words_count_cache.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { list_concat } from "./list_concat.mjs";
import { object_merge } from "./object_merge.mjs";
import { object_property_exists_not } from "./object_property_exists_not.mjs";
export async function ceb_bible_words_score() {
  let lookup = {};
  let words_ceb = await ceb_bible_words_count_cache();
  each(words_ceb, (d) => object_property_set(lookup, d.word, d.count));
  let map = await ceb_bible_words_definitions_map_cache();
  let definitions = await ceb_bible_words_definitions_all_cache();
  each(definitions, (d) => {
    let { word } = d;
    let choices = [word];
    if (object_property_exists(map, word)) {
      choices = list_concat(choices, object_property_get(map, word));
    }
    let count = 0;
    each(choices, (choice) => {
      if (object_property_exists_not(lookup, choice)) {
        log({
          d,
          choices,
          choice,
        });
        exit();
      }
      let choice_count = object_property_get(lookup, choice);
      count += choice_count;
    });
    object_merge(d, {
      count,
    });
  });
  return definitions;
}
