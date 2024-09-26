import { bible_search_lookup_symbols } from "./bible_search_lookup_symbols.mjs";
import { string_split_comma } from "./string_split_comma.mjs";
export async function bible_search(words) {
  let s = string_split_comma(words);
  let symbols = "-–,;:!?.…·'‘’“”()[]{}¶*/&#%•`°|⌃►◄0123456789";
  let i = {};
  return await bible_search_lookup_symbols();
}
