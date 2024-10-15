import { list_adder_async } from "./list_adder_async.mjs";
import { each } from "./each.mjs";
import { bible_chapter_foreign } from "./bible_chapter_foreign.mjs";
import { bible_chapters_each } from "./bible_chapters_each.mjs";
import { log } from "./log.mjs";
export async function bible_words_foreign_book(bible_folder, book_name) {
  log({
    book_name,
  });
  return await list_adder_async(async (la) => {
    await bible_chapters_each("engbsb", book_name, async (chapter_name) => {
      let r = await bible_chapter_foreign(bible_folder, chapter_name);
      let { foreign } = r;
      each(foreign, (v) =>
        each(v.tokens, (t) => {
          la(t);
        }),
      );
    });
  });
}
