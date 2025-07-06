import { list_join_empty } from "./list_join_empty.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_filter } from "./list_filter.mjs";
import { string_split_empty } from "./string_split_empty.mjs";
export function string_only(lower, letters) {
  let split = string_split_empty(lower);
  let filtered2 = list_filter(split, function (c) {
    let v = list_includes(letters, c);
    return v;
  });
  let joined = list_join_empty(filtered2);
  return joined;
}
