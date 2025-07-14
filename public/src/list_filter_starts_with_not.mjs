import { string_starts_with_curry } from "./string_starts_with_curry.mjs";
import { list_filter } from "./list_filter.mjs";
export function list_filter_starts_with_not(list, prefix) {
  return list_filter(list, string_starts_with_curry(prefix));
}
