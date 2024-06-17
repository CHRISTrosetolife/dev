import { each } from "./each.mjs";
import { bibles_eng_chapters } from "./bibles_eng_chapters.mjs";
import { list_adder_multiple_async } from "./list_adder_multiple_async.mjs";
export async function bible_words_eng() {
  let all = await list_adder_multiple_async(async (la) => {
    let chapters = await bibles_eng_chapters();
    each(chapters, (verses) => {
      each(verses, (verse) => la(verse.tokens));
    });
  });
  return all;
}
