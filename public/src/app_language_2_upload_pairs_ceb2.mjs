import { log } from "./log.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
import { object_properties } from "./object_properties.mjs";
import { ceb_definition_en_2 } from "./ceb_definition_en_2.mjs";
import { each_async } from "./each_async.mjs";
import { english_words_dictionary } from "./english_words_dictionary.mjs";
export async function app_language_2_upload_pairs_ceb2() {
  let filtered = await english_words_dictionary();
  await each_async(filtered, async function (t) {
    let r = await ceb_definition_en_2(t);
    let p = object_properties(r);
    if (list_multiple_is(p)) {
      log({
        r,
      });
    }
  });
}
