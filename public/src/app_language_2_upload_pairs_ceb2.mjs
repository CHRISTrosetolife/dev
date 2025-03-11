import { each } from "./each.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { ceb_definition_en_2 } from "./ceb_definition_en_2.mjs";
import { each_async } from "./each_async.mjs";
import { english_words_dictionary } from "./english_words_dictionary.mjs";
export async function app_language_2_upload_pairs_ceb2() {
  let words = await english_words_dictionary();
  await each_async(words, async function (word) {
    let r = await ceb_definition_en_2(word);
    if (object_property_exists(object, word)) {
      each(list, function (item) {});
    }
  });
}
