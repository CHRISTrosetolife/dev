import { string_starts_with } from "./string_starts_with.mjs";
import { list_filter } from "./list_filter.mjs";
export function list_filter_starts_with_not(list, prefix) {
  let filter = function string_starts_with_curry_inner(h) {
    let v2 = string_starts_with(h, prefix);
    return v2;
  };
  let v = list_filter(list, filter);
  return v;
}
