import { each } from "./each.mjs";
import { bible_chapter_foreign } from "./bible_chapter_foreign.mjs";
import { bible_chapters_each } from "./bible_chapters_each.mjs";
import { log } from "./log.mjs";
import { bible_books_index_old_is } from "./bible_books_index_old_is.mjs";
import { bible_books } from "./bible_books.mjs";
import { each_index_async } from "./each_index_async.mjs";
import { list_adder_unique_async } from "./list_adder_unique_async.mjs";
export async function bible_foreign_words(args, bible_folder) {
  let words = await list_adder_unique_async(async (la) => {
    await each_index_async(
      await bible_books("engbsb"),
      async (book_name, book_index) => {
        if (args.new) {
          let old_is = bible_books_index_old_is(book_index);
          if (old_is) {
            return;
          }
        }
        log({
          book_name,
        });
        await bible_chapters_each("engbsb", book_name, async (chapter_name) => {
          let r = await bible_chapter_foreign(chapter_name, bible_folder);
          let { foreign } = r;
          each(foreign, (v) =>
            each(v.tokens, (t) => {
              la(t);
            }),
          );
        });
      },
    );
  });
  return words;
}
