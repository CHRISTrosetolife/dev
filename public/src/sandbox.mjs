import { list_take } from "./list_take.mjs";
import { log } from "./log.mjs";
import { each_index_async } from "./each_index_async.mjs";
import { ceb_definition } from "./ceb_definition.mjs";
import { ceb_bible_words } from "./ceb_bible_words.mjs";
import { list_length } from "./list_length.mjs";
export async function sandbox() {
  if (0) return await ceb_definition("jehova");
  let words = await ceb_bible_words();
  let length = list_length(words);
  const count = 32;
  let t = list_take(words, count);
  await each_index_async(t, async (word, index) => {
    log({
      word,
      index,
    });
    let d = await ceb_definition(word);
    log({
      d,
    });
  });
}
