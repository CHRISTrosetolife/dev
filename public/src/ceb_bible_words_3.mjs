import { each_index_async } from "./each_index_async.mjs";
import { each } from "./each.mjs";
import { list_adder_unique_async } from "./list_adder_unique_async.mjs";
import { bible_ceb_3_chapter } from "./bible_ceb_3_chapter.mjs";
import { bible_ceb_3_hrefs } from "./bible_ceb_3_hrefs.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
export async function ceb_bible_words_3(args) {
  let words = await list_adder_unique_async(async (la) => {
    let hrefs = await bible_ceb_3_hrefs();
    await each_index_async(hrefs, async (href, index) => {
      if (args.new) {
        if (string_starts_with(href, "B000")) {
        }
      }
      let verses = await bible_ceb_3_chapter(index);
      each(verses, (v) =>
        each(v.tokens, (t) => {
          la(t);
        }),
      );
    });
  });
  return words;
}
