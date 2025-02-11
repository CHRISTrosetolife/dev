import { string_empty_not_is } from "./string_empty_not_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { string_trim_whitespace } from "./string_trim_whitespace.mjs";
import { list_map } from "./list_map.mjs";
export function list_trim_empty_not(split) {
  let mapped = list_map(split, string_trim_whitespace);
  let filtered = list_filter(mapped, string_empty_not_is);
  return filtered;
}
