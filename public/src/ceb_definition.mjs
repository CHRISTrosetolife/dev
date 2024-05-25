import { property_text_trim } from "./property_text_trim.mjs";
import { each_pairs } from "./each_pairs.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
import { log } from "./log.mjs";
import { list_map_split_comma } from "./list_map_split_comma.mjs";
import { and } from "./and.mjs";
import { list_any } from "./list_any.mjs";
import { list_length_2 } from "./list_length_2.mjs";
import { each } from "./each.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_filter_async } from "./list_filter_async.mjs";
import { string_prefix_without } from "./string_prefix_without.mjs";
import { list_filter_starts_with } from "./list_filter_starts_with.mjs";
import { html_parse_href } from "./html_parse_href.mjs";
import { html_parse_tag } from "./html_parse_tag.mjs";
import { html_parse_parent } from "./html_parse_parent.mjs";
import { html_parse_tag_not } from "./html_parse_tag_not.mjs";
import { ceb_form1 } from "./ceb_form1.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { add } from "./add.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { string_includes } from "./string_includes.mjs";
import { list_filter } from "./list_filter.mjs";
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
import { list_includes } from "./list_includes.mjs";
import { equal_not } from "./equal_not.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { string_split_space } from "./string_split_space.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
import { list_adder } from "./list_adder.mjs";
export async function ceb_definition(word) {
  let known = {
    apan: ["but", "yet"],
    hari: ["king", "royalty"],
    bisan: ["although", "though", "yet"],
  };
  if (object_property_exists(known, word)) {
    return {
      word,
      definitions: object_property_get(known, word),
    };
  }
  let replaced = ["distuinguish,distinguish"];
  let replaced_split = list_map_split_comma(replaced);
  let skipped = ["nevus"];
  let skipped_pairs = [
    "ka,quantifier",
    "siya,chair",
    "ila,birthmark",
    "kanila,cinnamon",
    "ingon,say",
    "uban,mate",
    "ni,this",
  ];
  let skipped_pairs_split = list_map_split_comma(skipped_pairs);
  each([skipped_pairs_split, replaced_split], (split) =>
    each(split, (s) => assert(list_length_2, [s])),
  );
  let lookup = {};
  each(skipped_pairs_split, (s) =>
    object_property_set(lookup, list_first(s), list_second(s)),
  );
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
    const first = list_first(mapped4);
    word = object_property_get(first, "text");
    matches = list_filter_property(mapped4, "text", word);
  }
  let indices = list_map_property(matches, "index");
  let indices_at = list_map(indices, (i) => list_get(a_href_lefts, i));
  let definitions = [];
  for (let index_at of indices_at) {
    let parent = index_at;
    do {
      parent = html_parse_parent(parent);
    } while (html_parse_tag_not(parent, "tr"));
    let { childNodes } = parent;
    assert(equal, [list_length(childNodes), 2]);
    let right = list_second(childNodes);
    let filtered6 = html_parse_a_href_starts_with(right, "");
    let skips = list_adder((la) => {
      if (greater_than_equal(list_length(filtered6), 2)) {
        each_pairs(filtered6, (f, g) => {
          let after = html_parse_href(g);
          if (string_starts_with(after, "/sense/")) {
            each([f, g], (h) => la(property_text_trim(h)));
          }
        });
      }
    });
    let defs = list_map_property_text_trim(filtered6);
    if (0) defs = list_filter(defs, (d) => list_includes_not(skips, d));
    list_add_multiple(definitions, defs);
  }
  definitions = list_map(definitions, (d) => {
    if (object_property_exists(lookup, d)) {
      return object_property_get(lookup, d);
    }
    const index = string_index(d, "[");
    if (greater_than_equal(index, 0)) {
      const result = string_trim(string_take(d, index));
      return result;
    }
    return d;
  });
  definitions = await list_filter_async(definitions, async (d) => {
    let url = string_combine(prefix_2, d);
    url = string_replace(url, " ", "+");
    let parsed2 = await html_cache_parse(url);
    let q_children2 = ceb_form1(parsed2);
    let as = list_filter(q_children2, (c) => html_parse_tag(c, "a"));
    let mapped5 = list_map(as, html_parse_href);
    let filtered5 = list_filter_starts_with(mapped5, prefix_1);
    let mapped6 = list_map(filtered5, (f) =>
      string_prefix_without(f, prefix_1),
    );
    if (list_empty_is(mapped6)) {
      return false;
    }
    if (list_includes_not(mapped6, word)) {
      return false;
    }
    const replaced = string_replace(d, "s", "z");
    if (equal_not(replaced, d)) {
      if (list_includes(definitions, replaced)) {
        return false;
      }
    }
    if (list_includes(skipped, d)) {
      return false;
    }
    if (
      list_any(skipped_pairs_split, (s) => {
        let [left, right] = s;
        return and(equal(word, left), equal(right, d));
      })
    ) {
      return false;
    }
    let split_d = string_split_space(d);
    if (list_multiple_is(definitions)) {
      if (list_multiple_is(split_d)) {
        if (0)
          log({
            word,
            d,
            skip_because: "contains spaces",
          });
        return false;
      }
    }
    return true;
  });
  return {
    word,
    definitions,
  };
}
