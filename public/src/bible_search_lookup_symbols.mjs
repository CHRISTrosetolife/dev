import { list_is } from "./list_is.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
import { each } from "./each.mjs";
import { string_symbols_multiple } from "./string_symbols_multiple.mjs";
import { each_object_values } from "./each_object_values.mjs";
import { bible_search_lookup_cache } from "./bible_search_lookup_cache.mjs";
import { assert_message } from "./assert_message.mjs";
export async function bible_search_lookup_symbols() {
  let l = await bible_search_lookup_cache();
  let ts = list_adder_unique((la) => {
    each_object_values(l, (books) => {
      each_object_values(books, (chapter) => {
        let { tokens } = chapter;
        assert_message(list_is, [tokens], () => {});
        each(tokens, la);
      });
    });
  });
  return string_symbols_multiple(ts);
}
