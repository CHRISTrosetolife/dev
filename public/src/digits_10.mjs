import { string_to } from "./string_to.mjs";
import { range } from "./range.mjs";
import { list_map } from "./list_map.mjs";
export function digits_10() {
  let d = range(10);
  let v = list_map(d, string_to);
  return v;
}
