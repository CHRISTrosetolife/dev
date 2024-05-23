import { log } from "./log.mjs";
import { each_index_async } from "./each_index_async.mjs";
import { ceb_definition } from "./ceb_definition.mjs";
import { ceb_bible_words } from "./ceb_bible_words.mjs";
import { list_length } from "./list_length.mjs";
export async function sandbox() {
  return await ceb_definition("sa");
  let words = await ceb_bible_words();
  let length = list_length(words);
    let t=list_take(words,32)
  await each_index_async(t, async (word, index) => {
    let d=await ceb_definition(word);
    log({
      word,
      d,
      index,
    });
  });
}
