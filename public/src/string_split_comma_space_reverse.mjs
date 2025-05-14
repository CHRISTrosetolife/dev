import { string_split_comma_space } from "./string_split_comma_space.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_reverse } from "./list_reverse.mjs";
export function string_split_comma_space_reverse(d) {
  let s = string_split_comma_space(d);
  list_reverse(s);
  let v3 = list_join_space(s);
  return v3;
}
