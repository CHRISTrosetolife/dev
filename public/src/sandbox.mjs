import { ceb_definition } from "./ceb_definition.mjs";
import { list_first } from "./list_first.mjs";
import { ceb_bible_words } from "./ceb_bible_words.mjs";
export async function sandbox() {
  let words = await ceb_bible_words();
  let f = list_first(words);
  return await ceb_definition(f);
}
