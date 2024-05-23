import { list_skip } from "./list_skip.mjs";
import { ceb_bible_words_top } from "./ceb_bible_words_top.mjs";
import { log } from "./log.mjs";
import { each_index_async } from "./each_index_async.mjs";
import { ceb_definition } from "./ceb_definition.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_take } from "./list_take.mjs";
export async function sandbox() {
  if (0) return await ceb_definition("kamo");
  let t = await ceb_bible_words_top(75);
  t = list_skip(t, 32);
  let lookup = {};
  await each_index_async(t, async (bible_word, index) => {
    if (0)
      log({
        bible_word,
        index,
      });
    let { word, definitions } = await ceb_definition(bible_word);
    if (list_empty_not_is(definitions)) {
      object_property_set(lookup, word, definitions);
    }
    if(0)
    log({word,definitions})
  });
  if (0)
  return;
  return lookup;
}
