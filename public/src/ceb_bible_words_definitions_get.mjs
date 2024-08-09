import { log } from "./log.mjs";
import { list_size } from "./list_size.mjs";
import { each_index_async } from "./each_index_async.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { object_property_exists_not } from "./object_property_exists_not.mjs";
import { ceb_definition } from "./ceb_definition.mjs";
export async function ceb_bible_words_definitions_get(list) {
  let existing = {};
  let result = [];
  let size = list_size(list);
  await each_index_async(list, async (item, index) => {
    log({
      size,
      index,
      item,
    });
    let { word, definitions } = await ceb_definition(item.word);
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
