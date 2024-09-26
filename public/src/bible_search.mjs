import { list_is } from "./list_is.mjs";
import { assert_message } from "./assert_message.mjs";
import { each } from "./each.mjs";
import { each_object } from "./each_object.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
import { bible_search_lookup_cache } from "./bible_search_lookup_cache.mjs";
import { string_split_comma } from "./string_split_comma.mjs";
export async function bible_search(words) {
  let s = string_split_comma(words);
  let symbols = "-–,;:!?.…·'‘’“”()[]{}¶*/&#%•`°|⌃►◄0123456789";
  let i = {};
  let lookup = await bible_search_lookup_cache();
  let ts = list_adder_unique((la) => {
    each_object(lookup, (bible_folder, books) => {
      each_object(books, (chapter_code, chapter_verses) => {
        each(chapter_verses, (c) => {
          let { tokens } = c;
          assert_message(list_is, [tokens], () => ({
            bible_folder,
            chapter_code,
            chapter,
          }));
          each(tokens, la);
        });
      });
    });
  });
}
