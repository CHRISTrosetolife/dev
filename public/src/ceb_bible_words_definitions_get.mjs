import { function_definition } from "./function_definition.mjs";
import { each_log_async } from "./each_log_async.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { object_property_exists_not } from "./object_property_exists_not.mjs";
export async function ceb_bible_words_definitions_get(list) {
  let existing = {};
  let result = [];
  let definition_get = await function_definition(language);
  await each_log_async(list, lambda);
  return result;
  async function lambda(item) {
    let { word, definitions } = await definition_get(item.word);
    if (object_property_exists_not(existing, word)) {
      object_property_set(existing, word, true);
      if (list_empty_not_is(definitions)) {
        list_add(result, {
          word,
          definitions,
        });
      }
    }
  }
}
