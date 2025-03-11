import { each_async } from "./each_async.mjs";
import { log } from "./log.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
import { ceb_definition_en_2 } from "./ceb_definition_en_2.mjs";
import { english_words_dictionary } from "./english_words_dictionary.mjs";
import { http_cache } from "./http_cache.mjs";
import { object_properties } from "./object_properties.mjs";
export async function sandbox_3() {
  let text2 = await http_cache(
    "https://raw.githubusercontent.com/first20hours/google-10000-english/refs/heads/master/google-10000-english-usa.txt",
  );
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
