import { html_cache_parse } from "./html_cache_parse.mjs";
import { html_parse_a_href_starts_with } from "./html_parse_a_href_starts_with.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { list_unique } from "./list_unique.mjs";
export async function ceb_definition(word) {
  let url = string_combine_multiple([
    "https://www.binisaya.com/node/21?search=binisaya&word=",
    word,
    "&Search=Search",
  ]);
  let parsed = await html_cache_parse(url);
  let prefix = "http://www.binisaya.com/english/";
  let mapped3 = html_parse_a_href_starts_with(parsed, prefix);
  let u = list_unique(mapped3);
  return u;
}
