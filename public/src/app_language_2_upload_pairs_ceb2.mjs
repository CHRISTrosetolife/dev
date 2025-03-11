import { log } from "./log.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { each } from "./each.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { ceb_definition_en_2 } from "./ceb_definition_en_2.mjs";
import { each_async } from "./each_async.mjs";
import { english_words_dictionary_take_soft } from "./english_words_dictionary_take_soft.mjs";
export async function app_language_2_upload_pairs_ceb2(limit) {
  let words = await english_words_dictionary_take_soft(limit);
  let pairs = await list_adder_async(async function (la) {
    await each_async(words, async function (word) {
      let r = await ceb_definition_en_2(word);
      log({
        r,
        word,
      });
      if (object_property_exists(r, word)) {
        let ds = object_property_get(r, word);
        each(ds, function (d) {
          la([word, d]);
        });
      }
    });
  });
  return pairs;
}
