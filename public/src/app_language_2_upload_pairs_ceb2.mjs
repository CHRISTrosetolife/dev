import { list_to_lookup_key_value } from "./list_to_lookup_key_value.mjs";
import { bible_words_score_language } from "./bible_words_score_language.mjs";
import { list_first } from "./list_first.mjs";
import { string_size } from "./string_size.mjs";
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
  let scores_lookup = list_to_lookup_key_value();
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
        if (false) {
          list_sort_map(mapped, function (p) {
            let v2 = string_size(list_first(p));
            return v2;
          });
        }
        each(mapped, function (n) {
          la([n, word]);
        });
      }
    });
  });
  return pairs;
}
