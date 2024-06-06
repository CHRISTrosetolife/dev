import { bible_ceb_chapter } from "./bible_ceb_chapter.mjs";
import { each_async } from "./each_async.mjs";
import { bible_chapters } from "./bible_chapters.mjs";
import { bible_books } from "./bible_books.mjs";
import { error } from "./error.mjs";
import { log } from "./log.mjs";
import { list_adder_unique_async } from "./list_adder_unique_async.mjs";
import { each } from "./each.mjs";
import { string_symbols } from "./string_symbols.mjs";
import { bible_ceb_2_book } from "./bible_ceb_2_book.mjs";
import { each_index_only_async } from "./each_index_only_async.mjs";
import { bible_ceb_2_books_hrefs } from "./bible_ceb_2_books_hrefs.mjs";
import { string_count_words } from "./string_count_words.mjs";
import { list_sort_string } from "./list_sort_string.mjs";
import { identity } from "./identity.mjs";
import { string_replace_multiple } from "./string_replace_multiple.mjs";
import { string_empty_not_is } from "./string_empty_not_is.mjs";
import { list_get } from "./list_get.mjs";
export async function ceb_bible_words_5() {
  await each_async(await bible_books("engbsb"), async (book_name) => {
    let chapters = await bible_chapters("engbsb", book_name);
    await each_async(chapters, async (chapter_name) => {
      await bible_ceb_chapter(chapter_name);
    });
  });
  let book_hrefs = await bible_ceb_2_books_hrefs();
  let symbols;
  let words = await list_adder_unique_async(async (law) => {
    symbols = await list_adder_unique_async(
      async (las) =>
        await each_index_only_async(book_hrefs, async (book_index) => {
          let verses = await bible_ceb_2_book(book_index);
          each(verses, (v) =>
            each(v.tokens, (t) => {
              each(string_symbols(t), las);
              t = string_replace_multiple(
                t,
                [
                  ",",
                  ";",
                  ":",
                  "!",
                  "?",
                  ".",
                  "'",
                  '"',
                  "(",
                  ")",
                  "/",
                  "`",
                  "|",
                  "0",
                  "1",
                  "2",
                  "3",
                  "4",
                  "5",
                  "7",
                  "8",
                  "9",
                ],
                "",
              );
              if (string_empty_not_is(t)) {
                if (0) {
                  if (t === "b") {
                    log({
                      v,
                      b: list_get(book_hrefs, book_index),
                    });
                    error();
                  }
                }
                law(t);
              }
            }),
          );
        }),
    );
  });
  list_sort_string(symbols, identity);
  if (0) {
    return symbols;
  }
  let mapped = string_count_words(words);
  return mapped;
}
