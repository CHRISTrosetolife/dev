import { list_add } from "./list_add.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { object_property_exists_not } from "./object_property_exists_not.mjs";
import { ceb_definition } from "./ceb_definition.mjs";
import { log } from "./log.mjs";
import { each_index_async } from "./each_index_async.mjs";
import { list_skip } from "./list_skip.mjs";
import { ceb_bible_words_top } from "./ceb_bible_words_top.mjs";
export async function ceb_bible_words_definitions(skip, limit) {
  let t = await ceb_bible_words_top(limit);
  t = list_skip(t, skip);
  let existing = {};
  let result = [];
  await each_index_async(t, async (bible_word, index) => {
    if (0)
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
    if (0)
      log({
        word,
        definitions,
      });
  });
  if (0) return;
  return result;
}
