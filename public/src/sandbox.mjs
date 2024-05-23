import { identity } from "./identity.mjs";
import { list_sort_string } from "./list_sort_string.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
import { string_symbols } from "./string_symbols.mjs";
import { http_cache } from "./http_cache.mjs";
export async function sandbox() {
  let url = "https://www.ccel.org/ccel/b/bible/ceb_p/cache/ceb_p.txt";
  let text = await http_cache(url);
  let symbols = string_symbols(text);
  list_sort_string(symbols, identity);
  let joined = list_join_empty(symbols);
  return joined;
}
