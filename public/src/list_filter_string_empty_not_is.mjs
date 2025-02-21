import { string_empty_not_is } from "./string_empty_not_is.mjs";
import { list_filter } from "./list_filter.mjs";
export function list_filter_string_empty_not_is(strongs) {
  let v = list_filter(strongs, string_empty_not_is);
  return v;
}
