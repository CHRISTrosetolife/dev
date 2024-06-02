import { list_add } from "./list_add.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { object_property_exists_not } from "./object_property_exists_not.mjs";
import { ceb_definition } from "./ceb_definition.mjs";
import { log } from "./log.mjs";
import { each_index_async } from "./each_index_async.mjs";
import { list_length } from "./list_length.mjs";
export async function ceb_bible_words_definitions_get(t) {
  let existing = {};
  let result = [];
  let t_length = list_length(t);
  await each_index_async(t, async (bible_word, index) => {
    if (10)
      log({
        bible_word,
        index,
      });
    let { word, definitions } = await ceb_definition(bible_word);
    if (object_property_exists_not(existing, word)) {
      object_property_set(existing, word, true);
      if (list_empty_not_is(definitions)) {
        list_add(result, {
          word,
          definitions,
        });
      }
    }
    if (10)
      log({
        word,
        definitions,
      });
  });
  return result;
}
