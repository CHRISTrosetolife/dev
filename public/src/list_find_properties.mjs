import { list_single } from "./list_single.mjs";
import { list_filter_properties } from "./list_filter_properties.mjs";
export function list_find_properties(indexed, matcher) {
  let matches = list_filter_properties(indexed, matcher);
  let match = list_single(matches);
}
