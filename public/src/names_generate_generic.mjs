import { generate_list_string_generated } from "./generate_list_string_generated.mjs";
import { list_filter_string_empty_not_is } from "./list_filter_string_empty_not_is.mjs";
import { list_filter_starts_with_not } from "./list_filter_starts_with_not.mjs";
import { string_split_newline } from "./string_split_newline.mjs";
import { http_cache } from "./http_cache.mjs";
export async function names_generate_generic(url, fn) {
  let txt = await http_cache(url);
  let lines = string_split_newline(txt);
  let filtered = list_filter_starts_with_not(lines, "#");
  let filtered2 = list_filter_string_empty_not_is(filtered);
  await generate_list_string_generated(fn, filtered2);
  return filtered2;
}
