import { list_unique } from "./list_unique.mjs";
import { null_get } from "./null_get.mjs";
import { list_to_lookup_value } from "./list_to_lookup_value.mjs";
export function list_to_lookup_keys(words) {
  words = list_unique(words);
  let v = list_to_lookup_value(words, null_get);
  return v;
}
