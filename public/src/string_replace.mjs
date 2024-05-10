import { string_split } from "./string_split.mjs";
import { list_join } from "./list_join.mjs";
export function string_replace(input, from, to) {
  let split = string_split(input, from);
  let joined = list_join(split, to);
  return joined;
}
