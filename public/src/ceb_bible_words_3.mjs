import { bible_books_index_old_is } from "./bible_books_index_old_is.mjs";
import { integer_parse } from "./integer_parse.mjs";
import { each_index_async } from "./each_index_async.mjs";
import { each } from "./each.mjs";
import { list_adder_unique_async } from "./list_adder_unique_async.mjs";
import { bible_ceb_3_chapter } from "./bible_ceb_3_chapter.mjs";
import { bible_ceb_3_hrefs } from "./bible_ceb_3_hrefs.mjs";
import { string_substring } from "./string_substring.mjs";
export async function ceb_bible_words_3(args) {
  let words = await list_adder_unique_async(async (la) => {
    let hrefs = await bible_ceb_3_hrefs();
    await each_index_async(hrefs, async (href, index) => {
      if (args.new) {
        let unparsed = string_substring(href, 1, 3);
        let parsed = integer_parse(unparsed);
        let x = parsed - 1;
        let old_is = bible_books_index_old_is(x);
        if (old_is) {
          return;
        }
      }
      let verses = await bible_ceb_3_chapter(index);
      each(verses, (v) => {
        each(v.tokens, (t) => {
          la(t);
        });
      });
    });
  });
  return words;
}
