import { object_properties_match } from "./object_properties_match.mjs";
import { list_filter } from "./list_filter.mjs";
export function list_filter_properties(indexed, matcher) {
  return list_filter(indexed, (i) => object_properties_match(matcher, i));
}
