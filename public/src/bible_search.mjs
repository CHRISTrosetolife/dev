import { string_split_comma } from "./string_split_comma.mjs";
import { bible_search_lookup } from "./bible_search_lookup.mjs";
export async function bible_search(words) {
  string_split_comma(words);
  let l = await bible_search_lookup();
}
