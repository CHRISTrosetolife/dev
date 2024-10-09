import { list_denest } from "./list_denest.mjs";
import { string_parenthesis_remove } from "./string_parenthesis_remove.mjs";
import { string_split } from "./string_split.mjs";
import { list_map } from "./list_map.mjs";
import { string_combine_dot } from "./string_combine_dot.mjs";
import { string_replace_multiple } from "./string_replace_multiple.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { string_prefix_without_try } from "./string_prefix_without_try.mjs";
import { string_suffix_without_try } from "./string_suffix_without_try.mjs";
import { string_trim } from "./string_trim.mjs";
import { string_replace } from "./string_replace.mjs";
import { string_first } from "./string_first.mjs";
import { string_combine } from "./string_combine.mjs";
import { html_parse_tag_named } from "./html_parse_tag_named.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
import { html_parse_text_lower } from "./html_parse_text_lower.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { each } from "./each.mjs";
import { html_parse_visit_class_single } from "./html_parse_visit_class_single.mjs";
import { http_cache_parse_parsed } from "./http_cache_parse_parsed.mjs";
import { url_secure } from "./url_secure.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { list_filter } from "./list_filter.mjs";
import { string_empty_not_is } from "./string_empty_not_is.mjs";
export async function lg_definitions() {
  let u = string_combine_multiple([url_secure(), "learnluganda.com/concise"]);
  let { parsed, root } = await http_cache_parse_parsed(u);
  let d = html_parse_visit_class_single(root, "container");
  let first = "abandon";
  let first_found = false;
  let dictionary = {};
  let previous = null;
  each(object_property_get(d, "children"), (c) => {
    let t = html_parse_text_lower(c);
    if (string_starts_with(t, first)) {
      first_found = true;
    }
    if (!first_found || !html_parse_tag_named(c, "b")) {
      return;
    }
    t = string_parenthesis_remove(t);
    let symbols = ';!?."()';
    let symbols_all = string_combine(symbols, " -'");
    if (previous !== null) {
      let previous_first = string_first(previous);
      let abbreviation = string_combine_dot(previous_first);
      t = string_replace(t, abbreviation, previous);
    }
    t = string_trim(t, symbols_all);
    t = string_suffix_without_try(t, "! int");
    t = string_prefix_without_try(t, "okuwaluka omusaayi; ");
    let { next } = c;
    let n = html_parse_text_lower(next);
    n = string_trim(n, " \n");
    n = string_replace_multiple(
      n,
      list_map(["v", "conj", "n"], string_combine_dot),
      "",
    );
    let ns = string_split(n, ";");
    let ms = list_map(ns, string_parenthesis_remove);
    let ms2 = list_map(ms, (m) => string_trim(m, " ,"));
    let ms3 = list_map(ms2, (m) => string_split(m, ","));
    let dn = list_denest(ms3);
    let f = list_filter(ms3, string_empty_not_is);
    object_property_set(dictionary, t, f);
    previous = t;
  });
  return dictionary;
}
