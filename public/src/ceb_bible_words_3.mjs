import { each_index_only_async } from "./each_index_only_async.mjs";
import { identity } from "./identity.mjs";
import { list_sort_string } from "./list_sort_string.mjs";
import { string_empty_not_is } from "./string_empty_not_is.mjs";
import { string_take_less_1 } from "./string_take_less_1.mjs";
import { string_ends_with_multiple } from "./string_ends_with_multiple.mjs";
import { string_skip } from "./string_skip.mjs";
import { string_starts_with_multiple } from "./string_starts_with_multiple.mjs";
import { string_symbols } from "./string_symbols.mjs";
import { each } from "./each.mjs";
import { list_adder_unique_async } from "./list_adder_unique_async.mjs";
import { bible_ceb_3_chapter } from "./bible_ceb_3_chapter.mjs";
import { bible_ceb_3_hrefs } from "./bible_ceb_3_hrefs.mjs";
export async function ceb_bible_words_3() {
  let symbols = [
    "-",
    ",",
    ";",
    ":",
    "!",
    "?",
    ".",
    '"',
    "(",
    ")",
    "¶",
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
  ];
  let characters;
  let words = await list_adder_unique_async(async (law) => {
    characters = await list_adder_unique_async(async (las) => {
      let hrefs = await bible_ceb_3_hrefs();
      await each_index_only_async(hrefs, async (index) => {
        let verses = await bible_ceb_3_chapter(index);
        each(verses, (v) =>
          each(v.tokens, (t) => {
            each(string_symbols(t), las);
            while (string_starts_with_multiple(symbols, t)) {
              t = string_skip(t, 1);
            }
            while (string_ends_with_multiple(symbols, t)) {
              t = string_take_less_1(t);
            }
            if (string_empty_not_is(t)) {
              law(t);
            }
          }),
        );
      });
    });
  });
  list_sort_string(characters, identity);
  if (0) {
    return characters;
  }
  return words;
}
