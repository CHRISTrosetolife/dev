import { string_to } from "./string_to.mjs";
import { range } from "./range.mjs";
import { list_map } from "./list_map.mjs";
export function digits_10() {
  let v = list_map(range(10), string_to);
  return v;
}
