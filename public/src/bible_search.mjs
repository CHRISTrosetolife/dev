import { each } from "./each.mjs";
import { each_object } from "./each_object.mjs";
import { string_split_comma } from "./string_split_comma.mjs";
import { bible_search_lookup } from "./bible_search_lookup.mjs";
export async function bible_search(words) {
  let s = string_split_comma(words);
  let l = await bible_search_lookup();
  each_object(l, (bible_folder, books) => {
    each(list, (item) => {});
  });
}
