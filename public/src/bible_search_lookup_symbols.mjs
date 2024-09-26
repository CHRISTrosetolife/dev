import { list_adder_unique } from "./list_adder_unique.mjs";
import { each } from "./each.mjs";
import { string_symbols_multiple } from "./string_symbols_multiple.mjs";
import { each_object_values } from "./each_object_values.mjs";
import { bible_search_lookup_cache } from "./bible_search_lookup_cache.mjs";
export async function bible_search_lookup_symbols() {
  let l = await bible_search_lookup_cache();
  let ts = list_adder_unique((la) => {
    each_object_values(l, (books) => {
      each_object_values(books, (chapter) => {
        let { tokens } = chapter;
        each(tokens, la);
      });
    });
  });
  return string_symbols_multiple(ts);
}
