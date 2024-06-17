import { log } from "./log.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { object_property_exists_not } from "./object_property_exists_not.mjs";
import { ceb_definition } from "./ceb_definition.mjs";
import { each_async } from "./each_async.mjs";
import { ceb_bible_words_count } from "./ceb_bible_words_count.mjs";
export async function ceb_bible_words_definitions_map() {
  let words_ceb = await ceb_bible_words_count();
  let result = {};
  await each_async(words_ceb, async (word_ceb) => {
    let { word, definitions } = await ceb_definition(word_ceb.word);
    if (object_property_exists_not(existing, word)) {
      object_property_set(existing, word, true);
      if (list_empty_not_is(definitions)) {
        if (word_ceb.word !== word) {
          object_property_set(result, word_ceb.word, word);
        }
      }
    }
    log({
      result,
    });
  });
  return result;
}
