import { list_map } from "./list_map.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
import { list_includes } from "./list_includes.mjs";
import { string_split_empty } from "./string_split_empty.mjs";
export function string_only(lower, letters, replacement) {
  let split = string_split_empty(lower);
  let mapped = list_map(split, function (c) {
    let v = list_includes(letters, c);
    let v2 = v ? c : replacement;
    return v2;
  });
  let joined = list_join_empty(mapped);
  return joined;
}
