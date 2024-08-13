import { object_property_get } from "./object_property_get.mjs";
import { list_all } from "./list_all.mjs";
import { object_properties } from "./object_properties.mjs";
import { list_find } from "./list_find.mjs";
import { list_get } from "./list_get.mjs";
import { each_range } from "./each_range.mjs";
import { list_adder } from "./list_adder.mjs";
import { list_take_bible_books_new } from "./list_take_bible_books_new.mjs";
import { list_adder_unique_async } from "./list_adder_unique_async.mjs";
import { each } from "./each.mjs";
import { bible_ceb_2_book } from "./bible_ceb_2_book.mjs";
import { each_index_only_async } from "./each_index_only_async.mjs";
import { bible_ceb_2_books_hrefs } from "./bible_ceb_2_books_hrefs.mjs";
import { list_size } from "./list_size.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
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
    let indexed = list_adder((la) => {
      let index = 0;
      each_range(columns, (column) => {
        each_range(rows_full, (row) => {
          la({
            row,
            column,
            href: list_get(book_hrefs, index),
          });
          index++;
        });
      });
      each_range(columns_full, (column) => {
        each_range(rows_missing, (row_missing) => {
          la({
            row: row_missing + rows_full,
            column,
            href: list_get(book_hrefs, index),
          });
          index++;
        });
      });
      each_range(columns, (column) => {
        each_range(rows, (row) => {
          let target;
          let matcher = {
            row,
            column,
          };
          let matcher_properties = object_properties(matcher);
          list_all(
            matcher_properties,
            (p) =>
              object_property_exists(target, p) &&
              object_property_get(target, p) == object_property_get(matcher, p),
          );
          list_find(indexed, (i) => r.row === row && i.column === column);
        });
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
