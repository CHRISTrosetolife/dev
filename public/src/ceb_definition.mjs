import { list_index } from "./list_index.mjs";
import { list_first } from "./list_first.mjs";
import { list_map_property_text_trim } from "./list_map_property_text_trim.mjs";
import { html_parse_a_href_starts_with } from "./html_parse_a_href_starts_with.mjs";
import { html_cache_parse } from "./html_cache_parse.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { string_combine } from "./string_combine.mjs";
import { list_get } from "./list_get.mjs";
export async function ceb_definition(word) {
  let url = string_combine_multiple([
    "https://www.binisaya.com/node/21?search=binisaya&word=",
    word,
    "&Search=Search",
  ]);
  let parsed = await html_cache_parse(url);
  let prefix = "http://www.binisaya.com/";
  let prefix_1 = string_combine(prefix, "cebuano/");
  let prefix_2 = string_combine(prefix, "english/");
  let filtered = html_parse_a_href_starts_with(parsed, prefix_1);
  let mapped3 = list_map_property_text_trim(filtered);
  let first = list_first(mapped3);
  let index = list_index(mapped3, first);
  let index_at =list_get(filtered,index)
  return index;
}
