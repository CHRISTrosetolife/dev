import { string_starts_with_multiple } from "./string_starts_with_multiple.mjs";
import { log } from "./log.mjs";
import { bible_ceb_chapter } from "./bible_ceb_chapter.mjs";
import { each_async } from "./each_async.mjs";
import { bible_chapters } from "./bible_chapters.mjs";
import { bible_books } from "./bible_books.mjs";
import { list_adder_unique_async } from "./list_adder_unique_async.mjs";
import { each } from "./each.mjs";
import { string_symbols } from "./string_symbols.mjs";
import { bible_ceb_2_books_hrefs } from "./bible_ceb_2_books_hrefs.mjs";
import { string_count_words } from "./string_count_words.mjs";
import { list_sort_string } from "./list_sort_string.mjs";
import { identity } from "./identity.mjs";
export async function ceb_bible_words_5() {
  let book_hrefs = await bible_ceb_2_books_hrefs();
  let symbols;
  let words = await list_adder_unique_async(async (law) => {
    symbols = await list_adder_unique_async(async (las) => {
      await each_async(await bible_books("engbsb"), async (book_name) => {
        let chapters = await bible_chapters("engbsb", book_name);
        await each_async(chapters, async (chapter_name) => {
          log({
            chapter_name,
          });
          let { ceb } = await bible_ceb_chapter(chapter_name);
          each(ceb, (v) =>
            each(v.tokens, (t) => {
              each(string_symbols(t), las);
              symbols = [
                "_",
                "-",
                "–",
                "—",
                ",",
                ";",
                ":",
                "!",
                "?",
                ".",
                "'",
                "‘",
                "’",
                '"',
                "“",
                "”",
                "(",
                ")",
                "[",
                "]",
                "/",
                "`",
                "0",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
              ];
              string_starts_with_multiple(symbols, t);
              law(t);
            }),
          );
        });
      });
    });
  });
  list_sort_string(symbols, identity);
  if (10) {
    return symbols;
  }
  let mapped = string_count_words(words);
  return mapped;
}
