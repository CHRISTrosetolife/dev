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
export function ceb_stem(word) {
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
  let spelling_uo = ["kung", "gayod", "tibuok"];
  each(result, (r) => {
    let f = list_filter(spelling_uo, r);
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
