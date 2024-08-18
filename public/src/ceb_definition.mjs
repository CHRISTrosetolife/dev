import { list_pairs_to_lookup } from "./list_pairs_to_lookup.mjs";
import { string_to_url } from "./string_to_url.mjs";
import { list_size } from "./list_size.mjs";
import { list_size_2 } from "./list_size_2.mjs";
import { string_trim_whitespace } from "./string_trim_whitespace.mjs";
import { html_parse_text } from "./html_parse_text.mjs";
import { html_parse_map_text_trim } from "./html_parse_map_text_trim.mjs";
import { list_concat } from "./list_concat.mjs";
import { html_parse_a_href_starts_with_text } from "./html_parse_a_href_starts_with_text.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { each_pairs_async } from "./each_pairs_async.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
import { log } from "./log.mjs";
import { list_map_split_comma } from "./list_map_split_comma.mjs";
import { and } from "./and.mjs";
import { list_any } from "./list_any.mjs";
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
import { html_parse_a_href_starts_with } from "./html_parse_a_href_starts_with.mjs";
import { html_cache_parse } from "./html_cache_parse.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { string_combine } from "./string_combine.mjs";
import { list_get } from "./list_get.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { assert } from "./assert.mjs";
import { equal } from "./equal.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_map } from "./list_map.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { string_replace } from "./string_replace.mjs";
import { string_index } from "./string_index.mjs";
import { string_take } from "./string_take.mjs";
import { list_includes } from "./list_includes.mjs";
import { equal_not } from "./equal_not.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { string_split_space } from "./string_split_space.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_last } from "./list_last.mjs";
import { string_whitespace_normalize } from "./string_whitespace_normalize.mjs";
import { string_starts_with_not } from "./string_starts_with_not.mjs";
export async function ceb_definition(word) {
  let known = {
    didto: ["there"],
  };
  if (object_property_exists(known, word)) {
    return {
      word,
      definitions: object_property_get(known, word),
    };
  }
  let replaced = ["distuinguish,distinguish"];
  let replaced_split = list_map_split_comma(replaced);
  let skipped = [
    "nevus",
    "ignoble",
    "nay",
    "frontage",
    "emanate",
    "ergo",
    "rake-off",
    "vig",
    "demerit",
    "pratfall",
    "stamen",
    "contravene",
    "moil",
    "accede",
    "gusto",
    "extol",
    "ephemeral",
    "julienne",
    "domicile",
    "implicate",
    "ravage",
    "gaunt",
    "emaciated",
    "garner",
    "semblance",
    "effulgence",
    "phonograph",
    "lesion",
    "wreak",
    "clemency",
    "vinify",
    "boondocks",
    "ire",
    "sheen",
    "pauper",
    "headman",
    "tup",
    "voluime",
    "obverse",
    "aha",
    "sentinel",
    "impetus",
    "illustrious",
    "eminent",
    "laud",
    "infront",
    "transpire",
    "specter",
    "spectre",
    "wraith",
  ];
  let skipped_pairs = [
    "ka,quantifier",
    "siya,chair",
    "ila,birthmark",
    "kanila,cinnamon",
  ];
  let skipped_pairs_split = list_map_split_comma(skipped_pairs);
  each([skipped_pairs_split, replaced_split], (split) =>
    each(split, (s) => assert(list_size_2, [s])),
  );
  let lookup = list_pairs_to_lookup(skipped_pairs_split);
  let prefix = "http://www.binisaya.com/";
  let url = string_combine_multiple([
    prefix,
    "node/21?search=binisaya&word=",
    word,
    "&Search=Search",
  ]);
  let { parsed, children } = await ceb_html_cache_parse_form1(url);
  let filtered9 = list_filter_property(children, "type", "text");
  let texts = list_map_property(filtered9, "data");
  if (list_includes(texts, "No results found for the Cebuano word ")) {
    return {
      word,
      definitions: [],
    };
  }
  async function ceb_html_cache_parse_form1(url) {
    let parsed = await html_cache_parse(url);
    let children = ceb_form1(parsed);
    return {
      parsed,
      children,
    };
  }
  let filtered4 = list_filter(
    children,
    (c) =>
      c.type === "text" && string_includes(c.data, "Word - rootword - affixes"),
  );
  if (list_empty_not_is(filtered4)) {
    let f4_first = list_first(filtered4);
    let f4_first_index = list_index(children, f4_first);
    let f4_first_index_a = add(f4_first_index, 3);
    let f4_first_a = list_get(children, f4_first_index_a);
    let f4_first_a_text = html_parse_text(f4_first_a);
    let f4_first_a_tag = object_property_get(f4_first_a, "name");
    assert(equal, [f4_first_a_tag, "b"]);
    word = f4_first_a_text;
  }
  let prefix_1 = string_combine(prefix, "cebuano/");
  let prefix_2 = string_combine(prefix, "english/");
  let a_href_lefts = html_parse_a_href_starts_with(parsed, prefix_1);
  let mapped3 = html_parse_map_text_trim(a_href_lefts);
  let mapped4 = list_map_index(mapped3, (m, index) => {
    return {
      text: m,
      index,
    };
  });
  let matches = list_filter_property(mapped4, "text", word);
  if (list_empty_is(matches)) {
    let first = list_first(mapped4);
    word = object_property_get(first, "text");
    matches = list_filter_property(mapped4, "text", word);
  }
  let indices = list_map_property(matches, "index");
  let indices_at = list_map(indices, (i) => list_get(a_href_lefts, i));
  let definitions = [];
  for (let index_at of indices_at) {
    let parent = index_at;
    let root_is = false;
    do {
      parent = html_parse_parent(parent);
      if (parent.type === "root") {
        root_is = true;
        break;
      }
    } while (html_parse_tag_not(parent, "tr"));
    if (root_is) {
      continue;
    }
    let { childNodes } = parent;
    assert(equal, [list_size(childNodes), 2]);
    let right = list_second(childNodes);
    let filtered6 = html_parse_a_href_starts_with(right, "");
    let skips = await list_adder_async(async (la) => {
      if (greater_than_equal(list_size(filtered6), 2)) {
        await each_pairs_async(filtered6, async (f, g) => {
          let after = html_parse_href(g);
          let sense = "/sense/";
          if (string_starts_with(after, sense)) {
            let url_sense = string_combine_multiple([
              prefix,
              string_prefix_without(after, "/"),
            ]);
            let { children: children_sense } =
              await ceb_html_cache_parse_form1(url_sense);
            let filtered7 = list_filter(children_sense, (c) =>
              html_parse_tag(c, "a"),
            );
            let mapped7 = list_map(filtered7, html_parse_href);
            let filtered8 = list_filter(mapped7, (m) =>
              string_starts_with(m, prefix_2),
            );
            let mapped8 = list_map(filtered8, (f) =>
              string_prefix_without(f, prefix_2),
            );
            each(mapped8, la);
          }
        });
      }
    });
    let defs = html_parse_map_text_trim(filtered6);
    defs = list_map(defs, (d) => {
      for (let r of replaced_split) {
        if (equal(d, list_first(r))) {
          d = list_last(r);
        }
        return d;
      }
    });
    if (0) {
      log({
        defs,
      });
    }
    defs = list_filter(defs, (d) => list_includes_not(skips, d));
    defs = list_filter(defs, (d) => string_starts_with_not(d, "*"));
    list_add_multiple(definitions, defs);
  }
  definitions = list_map(definitions, (d) => {
    if (object_property_exists(lookup, d)) {
      return object_property_get(lookup, d);
    }
    let index = string_index(d, "[");
    if (greater_than_equal(index, 0)) {
      let result = string_trim_whitespace(string_take(d, index));
      return result;
    }
    return d;
  });
  definitions = list_map(definitions, string_whitespace_normalize);
  definitions = await list_filter_async(definitions, async (d) => {
    let replaced = string_replace(d, "s", "z");
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
    if (list_multiple_is(split_d)) {
      if (0) {
        log({
          word,
          d,
          skip_because: "contains spaces",
        });
      }
      return false;
    }
    let url = string_combine(prefix_2, d);
    url = string_to_url(url);
    let { children: children2 } = await ceb_html_cache_parse_form1(url);
    let as = list_filter(children2, (c) => html_parse_tag(c, "a"));
    let mapped5 = list_map(as, html_parse_href);
    let filtered5 = list_filter_starts_with(mapped5, prefix_1);
    let mapped6 = list_map(filtered5, (f) =>
      string_prefix_without(f, prefix_1),
    );
    let tables = list_filter(children2, (c) => html_parse_tag(c, "table"));
    let tables_length = list_size(tables);
    assert(less_than_equal, [tables_length, 3]);
    if (0) {
      if (equal(tables_length, 3)) {
        let middle = list_second(tables);
        let words = html_parse_a_href_starts_with_text(middle, "/cebuano/");
        mapped6 = list_concat(mapped6, words);
      }
    }
    if (list_empty_is(mapped6)) {
      return false;
    }
    if (list_includes_not(mapped6, word)) {
      return false;
    }
    return true;
  });
  definitions = list_unique(definitions);
  return {
    word,
    definitions,
  };
}
