import { bible_words_language_count_cache_all } from "./bible_words_language_count_cache_all.mjs";
import { function_definition } from "./function_definition.mjs";
import { log } from "./log.mjs";
import { each_index_async } from "./each_index_async.mjs";
import { list_size } from "./list_size.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { object_property_exists_not } from "./object_property_exists_not.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { list_add } from "./list_add.mjs";
export async function bible_words_definitions_map(language) {
  let words = await bible_words_language_count_cache_all(language);
  let result = {};
  let size = list_size(words);
  let definition_get = await function_definition(language);
  await each_index_async(words, async (word_language, index) => {
    if (index % 100 === 0) {
      log({
        size,
        index,
      });
    }
    let { word, definitions } = await definition_get(word_language.word);
    if (object_property_exists_not(result, word)) {
      if (list_empty_not_is(definitions)) {
        if (word_language.word !== word) {
          let words = object_property_initialize(result, word, []);
          list_add(words, word_language.word);
        }
      }
    }
  });
  return result;
}
