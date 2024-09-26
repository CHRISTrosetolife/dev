import { bible_search_index } from "./bible_search_index.mjs";
import { string_split_comma } from "./string_split_comma.mjs";
export async function bible_search(words) {
  let s = string_split_comma(words);
  return await bible_search_index();
}
