import { ceb_definition } from "./ceb_definition.mjs";
import { ceb_bible_words } from "./ceb_bible_words.mjs";
import { list_length } from "./list_length.mjs";
export async function sandbox() {
  let words = await ceb_bible_words();
  let length = list_length(words);
  each_async(words, async (word) => await ceb_definition(word));
}
