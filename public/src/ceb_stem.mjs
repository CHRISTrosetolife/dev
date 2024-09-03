import { object_property_get } from "./object_property_get.mjs";
import { string_suffix_without } from "./string_suffix_without.mjs";
import { string_ends_with } from "./string_ends_with.mjs";
import { list_add } from "./list_add.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
export function ceb_stem(word) {
  let result = [word];
  let suffix = "ng";
  if (string_ends_with(word, suffix)) {
    let r = string_suffix_without(word, suffix);
    list_add(result, r);
  }
  let replacements = {
    jehova: "hehoba",
  };
  if (object_property_exists(replacements, word)) {
    let r = object_property_get(replacements, word);
    list_add(result, r);
  }
  return result;
}
