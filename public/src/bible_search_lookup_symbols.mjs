import { each_object } from "./each_object.mjs";
import { list_is } from "./list_is.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
import { each } from "./each.mjs";
import { string_symbols_multiple } from "./string_symbols_multiple.mjs";
import { bible_search_lookup_cache } from "./bible_search_lookup_cache.mjs";
import { assert_message } from "./assert_message.mjs";
export async function bible_search_lookup_symbols() {
  let lookup = await bible_search_lookup_cache();
  let ts = list_adder_unique((la) => {
    each_object(lookup, (bible_folder, books) => {
      each_object(books, (chapter_code, chapter) => {
        let { verses } = chapter;
        each(list, (item) => {});
        assert_message(list_is, [tokens], () => ({
          bible_folder,
          chapter_code,
          chapter,
        }));
        each(tokens, la);
      });
    });
  });
  return string_symbols_multiple(ts);
}
