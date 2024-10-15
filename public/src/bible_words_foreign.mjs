import { each } from "./each.mjs";
import { bible_words_foreign_book } from "./bible_words_foreign_book.mjs";
import { bible_books_index_old_is } from "./bible_books_index_old_is.mjs";
import { bible_books } from "./bible_books.mjs";
import { each_index_async } from "./each_index_async.mjs";
import { list_adder_unique_async } from "./list_adder_unique_async.mjs";
export async function bible_words_foreign(args, bible_folder) {
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
        let r = await bible_words_foreign_book(book_name, bible_folder, la);
        each(list, la);
      },
    );
  });
  return words;
}
