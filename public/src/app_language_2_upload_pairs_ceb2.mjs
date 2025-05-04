import { list_to_lookup_key_value_property } from "./list_to_lookup_key_value_property.mjs";
import { bible_words_score_language } from "./bible_words_score_language.mjs";
import { list_map } from "./list_map.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { each } from "./each.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { ceb_definition_en_2 } from "./ceb_definition_en_2.mjs";
import { each_async } from "./each_async.mjs";
import { english_words_dictionary_take_soft } from "./english_words_dictionary_take_soft.mjs";
import { list_sort_map } from "./list_sort_map.mjs";
export async function app_language_2_upload_pairs_ceb2(limit) {
  let scores = await bible_words_score_language("ceb");
  let scores_lookup = list_to_lookup_key_value_property(
    scores,
    "word",
    "count",
  );
  let words = await english_words_dictionary_take_soft(limit);
  let pairs = await list_adder_async(async function (la) {
    await each_async(words, async function (word) {
      let r = await ceb_definition_en_2(word);
      if (object_property_exists(r, word)) {
        let ds = object_property_get(r, word);
        let mapped = list_map(ds, function (d) {
          let v = [d, word];
          return v;
        });
        list_sort_map(mapped, function (m) {
          if (object_property_exists(scores_lookup, m)) {
            let v2 = object_property_get(scores_lookup, m);
            return v2;
          }
          let v3 = 0;
          return v3;
        });
        each(mapped, function (n) {
          la([n, word]);
        });
      }
    });
  });
  return pairs;
}
