import { html_parse_tag_not } from "./html_parse_tag_not.mjs";
import { ceb_form1 } from "./ceb_form1.mjs";
import { log } from "./log.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { add } from "./add.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { string_includes } from "./string_includes.mjs";
import { list_filter } from "./list_filter.mjs";
import { html_parse_a_href_starts_with_text } from "./html_parse_a_href_starts_with_text.mjs";
import { list_second } from "./list_second.mjs";
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
import { list_map } from "./list_map.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { string_replace } from "./string_replace.mjs";
import { string_index } from "./string_index.mjs";
import { string_trim } from "./string_trim.mjs";
import { string_take } from "./string_take.mjs";
export async function ceb_definition(word) {
  let prefix = "http://www.binisaya.com/";
  let url = string_combine_multiple([
    prefix,
    "node/21?search=binisaya&word=",
    word,
    "&Search=Search",
  ]);
  let parsed = await html_cache_parse(url);
  let q_children = ceb_form1(parsed);
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
  let prefix_1 = string_combine(prefix, "cebuano/");
  let prefix_2 = string_combine(prefix, "english/");
  let a_href_lefts = html_parse_a_href_starts_with(parsed, prefix_1);
  let mapped3 = list_map_property_text_trim(a_href_lefts);
  let mapped4 = list_map_index(mapped3, (m, index) => {
    return {
      text: m,
      index,
    };
  });
  let matches = list_filter_property(mapped4, "text", word);
  if (list_empty_is(matches)) {
    matches = [list_first(mapped4)];
  }
  let indices = list_map_property(matches, "index");
  let indices_at = list_map(indices, (i) => list_get(a_href_lefts, i));
  let definitions = [];
  for (let index_at of indices_at) {
    let parent = index_at;
    do {
      parent = object_property_get(parent, "parentNode");
    } while (html_parse_tag_not(parent, "tr"));
    let { childNodes } = parent;
    assert(equal, [list_length(childNodes), 2]);
    let right = list_second(childNodes);
    let defs = html_parse_a_href_starts_with_text(right, prefix_2);
    list_add_multiple(definitions, defs);
  }
  definitions = list_map(definitions, (d) => {
    const index = string_index(d, "[");
    if (greater_than_equal(index, 0)) {
      const result = string_trim(string_take(d, index));
      console.log({
        d,
        result,
      });
      return result;
    }
    return d;
  });
  for (let d of definitions) {
    let url = string_combine(prefix_2, d);
    url = string_replace(url, " ", "+");
    let parsed2 = await html_cache_parse(url);
    let q_children2 = ceb_form1(parsed2);
  }
  return {
    word,
    definitions,
  };
}
