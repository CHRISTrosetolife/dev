import { list_map_property } from "./list_map_property.mjs";
import { string_count } from "./string_count.mjs";
export function string_count_words(text_split) {
  let list = string_count(text_split);
  let property_name = "word";
  let mapped = list_map_property(list, property_name);
  return mapped;
}
