import { list_single } from "./list_single.mjs";
import { list_filter_property_index } from "./list_filter_property_index.mjs";
export function list_find_property_index(verses, property_name, target_value) {
  let indices = list_filter_property_index(verses, property_name, target_value);
  let index = list_single(indices);
}
