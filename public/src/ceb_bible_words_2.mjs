import { list_adder_unique_async } from "./list_adder_unique_async.mjs";
import { each } from "./each.mjs";
import { string_symbols } from "./string_symbols.mjs";
import { bible_ceb_2_book } from "./bible_ceb_2_book.mjs";
import { each_index_only_async } from "./each_index_only_async.mjs";
import { bible_ceb_2_books_hrefs } from "./bible_ceb_2_books_hrefs.mjs";
import { string_count_words } from "./string_count_words.mjs";
import { list_sort_string } from "./list_sort_string.mjs";
import { identity } from "./identity.mjs";
export async function ceb_bible_words_2() {
  let book_hrefs = await bible_ceb_2_books_hrefs();
  let symbols;
  let words = await list_adder_unique_async(async (law) => {
    symbols = await list_adder_unique_async(
      async (las) =>
        await each_index_only_async(book_hrefs, async (book_index) => {
          let verses = await bible_ceb_2_book(book_index);
          each(verses, (v) =>
            each(v.tokens, (t) => {
              law(t);
              each(string_symbols(t), (s) => {
                las(s);
              });
            }),
          );
        }),
    );
  });
  list_sort_string(symbols, identity);
  return symbols;
  let mapped = string_count_words(text_split);
  return mapped;
}
