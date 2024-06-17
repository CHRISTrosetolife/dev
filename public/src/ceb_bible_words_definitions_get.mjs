import { each_async } from "./each_async.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { object_property_exists_not } from "./object_property_exists_not.mjs";
import { ceb_definition } from "./ceb_definition.mjs";
export async function ceb_bible_words_definitions_get(words_ceb, words_eng) {
  let existing = {};
  let result = [];
  await each_async(words_ceb, async (word_ceb) => {
    let { word, definitions } = await ceb_definition(word_ceb.word);
    if (object_property_exists_not(existing, word)) {
      object_property_set(existing, word, true);
      if (list_empty_not_is(definitions)) {
        list_add(result, {
          word,
          definitions,
        });
      }
    }
  });
  return result;
}
