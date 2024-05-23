import { list_filter } from "./list_filter.mjs";
import { html_parse_a_href_starts_with_text } from "./html_parse_a_href_starts_with_text.mjs";
import { list_second } from "./list_second.mjs";
import { equal_not } from "./equal_not.mjs";
import { list_index } from "./list_index.mjs";
import { list_first } from "./list_first.mjs";
import { list_map_property_text_trim } from "./list_map_property_text_trim.mjs";
import { html_parse_a_href_starts_with } from "./html_parse_a_href_starts_with.mjs";
import { html_cache_parse } from "./html_cache_parse.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { string_combine } from "./string_combine.mjs";
import { list_get } from "./list_get.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { assert } from "./assert.mjs";
import { equal } from "./equal.mjs";
import { list_length } from "./list_length.mjs";
export async function ceb_definition(word) {
  let url = string_combine_multiple([
    "https://www.binisaya.com/node/21?search=binisaya&word=",
    word,
    "&Search=Search",
  ]);
  let parsed = await html_cache_parse(url);
  let q = parsed.querySelectorAll("form[name='21']");
  return q;
  let prefix = "http://www.binisaya.com/";
  let prefix_1 = string_combine(prefix, "cebuano/");
  let prefix_2 = string_combine(prefix, "english/");
  let filtered = html_parse_a_href_starts_with(parsed, prefix_1);
  let mapped3 = list_map_property_text_trim(filtered);
  let filtered3 = list_filter(mapped3, (m) => equal(m, word));
  let first = list_first(filtered3);
  let index = list_index(mapped3, first);
  let index_at = list_get(filtered, index);
  let parent = index_at;
  do {
    parent = object_property_get(parent, "parentNode");
  } while (equal_not(object_property_get(parent, "rawTagName"), "tr"));
  let { childNodes } = parent;
  assert(equal, [list_length(childNodes), 2]);
  let right = list_second(childNodes);
  let filtered2 = html_parse_a_href_starts_with_text(right, prefix_2);
  return filtered2;
}
