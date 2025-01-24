import { string_trim_whitespace } from "./string_trim_whitespace.mjs";
import { list_map } from "./list_map.mjs";
import { string_split_newline } from "./string_split_newline.mjs";
import { http_cache } from "./http_cache.mjs";
export async function http_cache_split_trim(url) {
  let text = await http_cache(url);
  let lines = string_split_newline(text);
  let trimmed = list_map(lines, string_trim_whitespace);
  return trimmed;
}
