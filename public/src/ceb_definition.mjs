import { add } from "./add.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { string_includes } from "./string_includes.mjs";
import { list_single } from "./list_single.mjs";
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
import { list_empty_is } from "./list_empty_is.mjs";
export async function ceb_definition(word) {
  let url = string_combine_multiple([
    "https://www.binisaya.com/node/21?search=binisaya&word=",
    word,
    "&Search=Search",
  ]);
  let parsed = await html_cache_parse(url);
  let q = parsed.querySelectorAll("form[name=form1]");
  let q_single = list_single(q);
  let { childNodes: q_children } = q_single;
  let filtered4 = list_filter(q_children, (c) =>
    string_includes(
      object_property_get(c, "text"),
      "Word - rootword - affixes",
    ),
  );
  if (list_empty_not_is(filtered4)) {
    let f4_first = list_first(filtered4);
    let f4_first_index = list_index(q_children, f4_first);
    let f4_first_index_a = add(f4_first_index, 3);
    let f4_first_a = list_get(q_children, f4_first_index_a);
    let f4_first_a_text = object_property_get(f4_first_a, "text");
    let f4_first_a_tag = object_property_get(f4_first_a, "rawTagName");
    assert(equal, [f4_first_a_tag, "b"]);
    word = f4_first_a_text;
  }
  let prefix = "http://www.binisaya.com/";
  let prefix_1 = string_combine(prefix, "cebuano/");
  let prefix_2 = string_combine(prefix, "english/");
  let filtered = html_parse_a_href_starts_with(parsed, prefix_1);
  let mapped3 = list_map_property_text_trim(filtered);
  let filtered3 = list_filter(mapped3, (m) => equal(m, word));
  let first;
  let first_list = filtered3;
  if (list_empty_is(filtered3)) {
    first_list = mapped3;
  }
  first = list_first(first_list);
  let index = list_index(mapped3, first);
  let index_at = list_get(filtered, index);
  let parent = index_at;
  do {
    parent = object_property_get(parent, "parentNode");
  } while (equal_not(object_property_get(parent, "rawTagName"), "tr"));
  let { childNodes } = parent;
  assert(equal, [list_length(childNodes), 2]);
  let right = list_second(childNodes);
  let definitions = html_parse_a_href_starts_with_text(right, prefix_2);
  return {
    word,
    definitions,
  };
}
