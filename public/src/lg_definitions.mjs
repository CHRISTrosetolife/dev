import { list_empty_is } from "./list_empty_is.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { set_includes } from "./set_includes.mjs";
import { list_all } from "./list_all.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { bible_words_eng_score } from "./bible_words_eng_score.mjs";
import { string_take_find } from "./string_take_find.mjs";
import { string_first_combine_dot } from "./string_first_combine_dot.mjs";
import { list_denest } from "./list_denest.mjs";
import { string_parenthesis_remove } from "./string_parenthesis_remove.mjs";
import { string_split } from "./string_split.mjs";
import { list_map } from "./list_map.mjs";
import { string_combine_dot } from "./string_combine_dot.mjs";
import { string_replace_multiple } from "./string_replace_multiple.mjs";
import { string_prefix_without_try } from "./string_prefix_without_try.mjs";
import { string_suffix_without_try } from "./string_suffix_without_try.mjs";
import { string_trim } from "./string_trim.mjs";
import { string_replace } from "./string_replace.mjs";
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
import { string_includes } from "./string_includes.mjs";
import { set_new } from "./set_new.mjs";
import { set_add } from "./set_add.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
export async function lg_definitions() {
  let eng = await bible_words_eng_score();
  let eng_list = list_map_property(eng, "word");
  let eng_set = set_new();
  each(eng_list, (item) => set_add(eng_set, item));
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
      let abbreviation = string_first_combine_dot(previous);
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
      list_concat(list_map(
        ["adv", "v", "conj", "n", "prep", "adj", "inter"],
        string_combine_dot,
      ),['use']),
      "",
    );
    let ns = string_split(n, ";");
    ns = list_map(ns, string_parenthesis_remove);
    ns = list_map(ns, (m) => string_split(m, ","));
    ns = list_denest(ns);
    ns = list_map(ns, (m) => string_trim(m, " ,"));
    let abbreviation = string_first_combine_dot(t);
    ns = list_filter(ns, (n) => !string_includes(n, abbreviation));
    ns = list_filter(ns, (n) =>
      list_all(string_split(n, " "), (s) => !set_includes(eng_set, s)),
    );
    ns = list_map(ns, (n) => string_take_find(n, "."));
    ns = list_filter(ns, string_empty_not_is);
    if (list_empty_is(ns)) {
      return;
    }
    let list = object_property_initialize(dictionary, t, []);
    list_add_multiple(list, ns);
    previous = t;
  });
  return dictionary;
}
