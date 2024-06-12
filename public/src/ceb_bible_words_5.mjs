import { strng_trim } from "./strng_trim.mjs";
import { string_empty_not_is } from "./string_empty_not_is.mjs";
import { log } from "./log.mjs";
import { bible_ceb_chapter } from "./bible_ceb_chapter.mjs";
import { each_async } from "./each_async.mjs";
import { bible_chapters } from "./bible_chapters.mjs";
import { bible_books } from "./bible_books.mjs";
import { list_adder_unique_async } from "./list_adder_unique_async.mjs";
import { each } from "./each.mjs";
import { string_symbols } from "./string_symbols.mjs";
import { list_sort_string } from "./list_sort_string.mjs";
import { identity } from "./identity.mjs";
export async function ceb_bible_words_5() {
  let symbols = [
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
  let characters;
  let words = await list_adder_unique_async(async (law) => {
    characters = await list_adder_unique_async(async (las) => {
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
              t = strng_trim(t, symbols);
              if (string_empty_not_is(t)) {
                law(t);
              }
            }),
          );
        });
      });
    });
  });
  list_sort_string(characters, identity);
  if (0) {
    return characters;
  }
  return words;
}
