import { html_parse_a_href_starts_with } from "./html_parse_a_href_starts_with.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { http_cache } from "./http_cache.mjs";
import { html_parse } from "./html_parse.mjs";
import { list_unique } from "./list_unique.mjs";
export async function ceb_definition(word) {
  let url = string_combine_multiple([
    "https://www.binisaya.com/node/21?search=binisaya&word=",
    word,
    "&Search=Search",
  ]);
  let html = await http_cache(url);
  let parsed = html_parse(html);
  let prefix = "http://www.binisaya.com/english/";
  let mapped3 = html_parse_a_href_starts_with(parsed, prefix);
  let u = list_unique(mapped3);
  return u;
}
