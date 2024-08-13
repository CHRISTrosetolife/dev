import { ceb_bible_words_count_cache } from "./ceb_bible_words_count_cache.mjs";
import { log } from "./log.mjs";
import { each_index_async } from "./each_index_async.mjs";
import { list_size } from "./list_size.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { object_property_exists_not } from "./object_property_exists_not.mjs";
import { ceb_definition } from "./ceb_definition.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { list_add } from "./list_add.mjs";
export async function ceb_bible_words_definitions_map() {
  let words_ceb = await ceb_bible_words_count_cache({
    new: false,
  });
  let result = {};
  let size = list_size(words_ceb);
  await each_index_async(words_ceb, async (word_ceb, index) => {
    if (index % 100 === 0) {
      log({
        size,
        index,
      });
    }
    let { word, definitions } = await ceb_definition(word_ceb.word);
    if (object_property_exists_not(result, word)) {
      if (list_empty_not_is(definitions)) {
        if (word_ceb.word !== word) {
          let words = object_property_initialize(result, word, []);
          list_add(words, word_ceb.word);
        }
      }
    }
  });
  return result;
}
