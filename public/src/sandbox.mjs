import { list_take } from "./list_take.mjs";
import { log } from "./log.mjs";
import { each_index_async } from "./each_index_async.mjs";
import { ceb_definition } from "./ceb_definition.mjs";
import { ceb_bible_words } from "./ceb_bible_words.mjs";
import { list_length } from "./list_length.mjs";
import { object_property_set } from "./object_property_set.mjs";
export async function sandbox() {
  if (0) return await ceb_definition("jehova");
  let words = await ceb_bible_words();
  let length = list_length(words);
  const count = 32;
  let t = list_take(words, count);
  let lookup = {};
  return await each_index_async(t, async (bible_word, index) => {
    log({
      bible_word,
      index,
    });
    let { word, definitions } = await ceb_definition(bible_word);
    object_property_set(lookup, word, definitions);
  });
}
