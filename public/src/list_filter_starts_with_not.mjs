import { string_starts_with_curry } from "./string_starts_with_curry.mjs";
import { list_filter } from "./list_filter.mjs";
export function list_filter_starts_with_not(list, prefix) {
  let newLocal = string_starts_with_curry(prefix);
  let v = list_filter(list, newLocal);
  return v;
}
