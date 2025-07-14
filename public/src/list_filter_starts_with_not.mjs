import { string_starts_with_not } from "./string_starts_with_not.mjs";
import { list_filter } from "./list_filter.mjs";
export function list_filter_starts_with_not(list, prefix) {
  let filter = function list_filter_starts_with_not_inner(h) {
    let v2 = string_starts_with_not(h, prefix);
    return v2;
  };
  let v = list_filter(list, filter);
  return v;
}
