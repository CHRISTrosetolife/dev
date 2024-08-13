import { object_properties_match } from "./object_properties_match.mjs";
import { list_filter } from "./list_filter.mjs";
export function list_filter_properties(list, matcher) {
  return list_filter(list, (item) => object_properties_match(matcher, item));
}
