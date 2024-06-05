import { list_join_empty } from "./list_join_empty.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_filter } from "./list_filter.mjs";
import { string_split_empty } from "./string_split_empty.mjs";
export function string_exclude(t, symbols) {
  let split = string_split_empty(t);
  let filtered = list_filter(split, (s) => list_includes_not(symbols, s));
  return list_join_empty(filtered);
}
