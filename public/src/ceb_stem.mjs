import { list_add_if_exists_not } from "./list_add_if_exists_not.mjs";
import { list_sort_string } from "./list_sort_string.mjs";
import { log } from "./log.mjs";
import { each_range } from "./each_range.mjs";
import { each } from "./each.mjs";
import { string_prefix_without } from "./string_prefix_without.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { string_suffix_without } from "./string_suffix_without.mjs";
import { string_ends_with } from "./string_ends_with.mjs";
import { list_add } from "./list_add.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { string_skip_1 } from "./string_skip_1.mjs";
import { list_filter } from "./list_filter.mjs";
import { string_length } from "./string_length.mjs";
import { string_get } from "./string_get.mjs";
import { identity } from "./identity.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
export function ceb_stem(word) {
  log({
    word,
  });
  let result = [word];
  let suffix = "ng";
  if (string_ends_with(word, suffix)) {
    let r = string_suffix_without(word, suffix);
    list_add(result, r);
  }
  let suffix2 = "ng";
  if (string_ends_with(word, suffix2)) {
    let r = string_suffix_without(word, string_skip_1(suffix2));
    list_add(result, r);
  }
  let prefixes = ["ka", "ni", "mi"];
  each(prefixes, (prefix) => {
    if (string_starts_with(word, prefix)) {
      let r = string_prefix_without(word, prefix);
      list_add(result, r);
    }
  });
  let spelling_ou = ["kung", "gayod", "tibuok"];
  each(result, (r) => {
    let f = list_filter(spelling_ou, (s) => {
      if (string_length(s) !== string_length(r)) {
        return false;
      }
      let e = true;
      each_range(string_length(s), (i) => {
        let s_i = string_get(s, i);
        let r_i = string_get(r, i);
        if (s_i !== r_i) {
          let letters = [s_i, r_i];
          list_sort_string(letters, identity);
          let letters_string = list_join_empty(letters);
          log({
            letters_string,
          });
          if (letters_string !== "ou") {
            e = false;
            return true;
          }
        }
      });
      log({
        e,
      });
      return e;
    });
    each(list, (item) => {
      list_add_if_exists_not();
    });
    list_add_multiple(result, f);
  });
  let replacements = {
    jehova: "hehoba",
    dios: "diyos",
    lalake: "laki",
    walay: "wala",
    mo: "kamo",
    katawohan: "tawo",
    atubangan: "atubang",
    ibabaw: "babaw",
    pinaagi: "paagi",
    babaye: "baye",
    oh: "o",
  };
  if (object_property_exists(replacements, word)) {
    let r = object_property_get(replacements, word);
    list_add(result, r);
  }
  return result;
}
