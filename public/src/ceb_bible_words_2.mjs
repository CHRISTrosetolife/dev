import { each_range } from "./each_range.mjs";
import { each_index } from "./each_index.mjs";
import { list_adder } from "./list_adder.mjs";
import { list_take_bible_books_new } from "./list_take_bible_books_new.mjs";
import { list_adder_unique_async } from "./list_adder_unique_async.mjs";
import { each } from "./each.mjs";
import { bible_ceb_2_book } from "./bible_ceb_2_book.mjs";
import { each_index_only_async } from "./each_index_only_async.mjs";
import { bible_ceb_2_books_hrefs } from "./bible_ceb_2_books_hrefs.mjs";
import { list_size } from "./list_size.mjs";
export async function ceb_bible_words_2(args) {
  let book_hrefs = await bible_ceb_2_books_hrefs();
  if (args.new) {
    let columns = 7;
    let rows = 10;
    let cells = rows * columns;
    let book_hrefs_size = list_size(book_hrefs);
    let columns_full = columns - 1;
    let columns_full_count = columns_full * rows;
    let rows_full = book_hrefs_size - columns_full_count;
    let rows_missing = rows - rows_full;
    return list_adder((la) => {
      each_range(columns, (column) => {
        each_range(rows_full, (row) => {});
        each_range(rows_missing, (row) => {});
      });
      each_range(columns, (column) => {
        each_range(rows_full, (row) => {});
        each_range(rows_missing, (row) => {});
      });
      each_index(book_hrefs, (bh, index) => {
        if (index % columns === column) {
          la(bh);
        }
      });
    });
    book_hrefs = list_take_bible_books_new(book_hrefs);
  }
  return book_hrefs;
  let words = await list_adder_unique_async(async (law) => {
    await each_index_only_async(book_hrefs, async (book_index) => {
      let verses = await bible_ceb_2_book(book_index);
      each(verses, (v) =>
        each(v.tokens, (t) => {
          law(t);
        }),
      );
    });
  });
  return words;
}
