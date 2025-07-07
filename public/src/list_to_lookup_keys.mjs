import { null_get } from "./null_get.mjs";
import { list_to_lookup_value } from "./list_to_lookup_value.mjs";
export function list_to_lookup_keys(words) {
  let v = list_to_lookup_value(words, null_get);
  return v;
}
